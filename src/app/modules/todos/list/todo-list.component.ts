import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoListService, Todo } from './todo-list.service';
import { ToastrService } from 'ngx-toastr';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';


@Component({
    selector: 'todo-list-component',
    styleUrls: ['./todo-list.scss'],
    templateUrl: './todo-list.html'
})
export class TodoListComponent implements OnInit {
    todo;
    todos: Todo[];
    activeLink;
    error;
    busy;
    checkBoxToggleAll: boolean = false;
    completedFilter;
    checkedTodos: Todo[];
    modalRef: BsModalRef;

    @ViewChild('todoList')
    todoList: ElementRef;
    constructor(private route: ActivatedRoute, private router: Router, private service: TodoListService, private toastr: ToastrService,
        private modalService: BsModalService, private cd: ChangeDetectorRef) {
        this.activeLink = this.filterLinks.find((item) => item.label == 'All');
        this.completedFilter = this.activeLink.completedFilter;
        this.todos = route.snapshot.data.todos.result;
    }

    filterLinks = [
        { label: 'Active', id: 1, completedFilter: false },
        { label: 'Completed', id: 2, completedFilter: true, },
        { label: 'All', id: 3, completedFilter: null },
    ]

    ngOnInit() {

    }

    async onSubmit(form) {
        if (!form.valid) {
            this.error = 'Todo is required';
            return;
        }

        this.error = null;
        this.busy = new Promise(async (resolve, reject) => {
            try {
                const saveResponse = await this.service.saveTodo({ text: this.todo });
                if (saveResponse.result) {
                    this.toastr.success('Todo saved! Reloading', 'Success!');
                }
                await this.reloadTodos();
                this.todo = null;
                resolve();
            } catch (e) {
                console.error(e);
                reject();
            }
        });

    }

    onAlertClosed() {
        this.error = null;
    }

    setLinkActive = (event) => {
        this.activeLink = event;
        this.completedFilter = this.activeLink.completedFilter
    }

    deleteTodo(id) {
        this.busy = new Promise(async (resolve, reject) => {
            try {
                const delResponse = await this.service.deleteTodo(id);
                if (delResponse.result) {
                    this.toastr.success('Todo Deleted! Reloading', 'Success!');
                }

                await this.reloadTodos();

                resolve();
            } catch (e) {
                console.error(e);
                reject();
            }
        });
    }

    completeTodo(todo: Todo) {
        todo.completed = true;
        this.busy = new Promise(async (resolve, reject) => {
            try {
                const updateResponse = await this.service.updateTodo(todo);

                if (updateResponse) {
                    this.toastr.success('Todo completed! Reloading', 'Success!');
                }

                await this.reloadTodos();
                resolve();
            } catch (e) {
                reject();
            }
        })
    }


    async reloadTodos() {
        const response = await this.service.getTodos();
        if (response) {
            this.todos = response.result;
        }
    }

    toggleAll = (event) => {
        this.todos.filter(item => {
            if (this.completedFilter == null) {
                return item;
            } else {
                return item.completed == this.completedFilter
            }
        }).forEach(todo => {
            todo.checked = event;
        });
    }

    storeCheckedAndOpenModal(template) {
        this.checkedTodos = this.todos.filter(item => item.checked == true);
        this.openModal(template);
    }

    openModal(template) {
        this.modalRef = this.modalService.show(template);
    }

    deleteCheckedTodos() {
        this.closeModal();
        this.busy = new Promise(async (resolve, reject) => {
            try {
                if (!this.checkedTodos.length) {
                    throw ('empty_list');
                }

                await Promise.all(
                    this.checkedTodos.map(item => this.service.deleteTodo(item._id))
                );

                this.toastr.success('Todos deleted! Reloading...', 'Success!');
                await this.reloadTodos();
                resolve();
            } catch (e) {
                if (e == 'empty_list') {
                    this.toastr.error('Delete list is empty! Try again', 'Error');
                }
                reject();
            }
        }).then(() => this.invalidateChecked());
    }

    completeCheckedTodos() {
        this.closeModal();
        this.busy = new Promise(async (resolve, reject) => {
            try {
                if (!this.checkedTodos.length) {
                    throw ('empty_list');
                }

                await Promise.all(
                    this.checkedTodos.map(item => {
                        item.completed = true;
                        return this.service.updateTodo(item);
                    })
                );

                this.toastr.success('Todos completed! Reloading...', 'Success!');
                await this.reloadTodos();
                resolve();
            } catch (e) {
                if (e == 'empty_list') {
                    this.toastr.error('Update list is empty! Try again', 'Error');
                }
                reject();
            }
        });
    }

    closeModal(invalidateChecked: boolean = false) {
        this.modalRef.hide();
        if (invalidateChecked) {
            this.invalidateChecked();
        }
    }

    invalidateChecked() {
        this.checkedTodos = [];
        this.checkBoxToggleAll = false;
        this.toggleAll(false);
    }

}