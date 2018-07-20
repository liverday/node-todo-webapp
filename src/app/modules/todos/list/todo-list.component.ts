import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoListService } from './todo-list.service';
import { ToastrService } from 'ngx-toastr';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';


@Component({
    selector: 'todo-list-component',
    styleUrls: ['./todo-list.scss'],
    templateUrl: './todo-list.html'
})
export class TodoListComponent implements OnInit { 
    todo;
    todos;
    activeLink;
    error;
    busy;

    @ViewChild('todoList')
    todoList: ElementRef;
    constructor(private route: ActivatedRoute, private router: Router, private service: TodoListService, private toastr: ToastrService) {
        this.todos = route.snapshot.data.todos.result
    }

    filterLinks = [
        { label: 'Active', id: 1 },
        { label: 'Completed', id: 2 },
        { label: 'All', id: 3 },
    ]

    ngOnInit() {
    }

    async onSubmit(form) {
        if (!form.valid) {
            this.error = 'Todo is required';
            return;
        }
        
        this.error = null;
        this.busy = new Promise(async(resolve, reject) => {
            try {
                const saveResponse = await this.service.saveTodo({text: this.todo}); 
                if (saveResponse.result) {
                    this.toastr.success('Todo saved! Reloading', 'Success!');
                }
                const reloadResponse = await this.service.getTodos();
                if (reloadResponse) {
                    this.todos = reloadResponse.result
                }
                this.todo = null;        
                resolve();
            } catch (e) {
                console.error(e);
                reject();
            }
        }).then(() => this.scrollToBottom()); 
        
    }
    
    onAlertClosed() {
        this.error = null;
    }

    setLinkActive = (event) => {
        this.activeLink = event.id;
    }

    scrollToBottom() {
        const lastChild = this.todoList.nativeElement.querySelector('ul li:last-child');
        this.todoList.nativeElement.querySelector('ul').scrollTop = this.todos.length * 40 + (lastChild.scrollHeight - lastChild.offsetHeight);
    }

    deleteTodo(id) {
        this.busy = new Promise(async(resolve, reject) => {
            try {
                const delResponse = await this.service.deleteTodo(id);
                if (delResponse.result) {
                    this.toastr.success('Todo Deleted! Reloading', 'Success!');
                }

                const reloadResponse = await this.service.getTodos();
                if (reloadResponse) {
                    this.todos = reloadResponse.result;
                }

                resolve();
            } catch (e) {
                console.error(e);
                reject();
            }
        });
    }
}