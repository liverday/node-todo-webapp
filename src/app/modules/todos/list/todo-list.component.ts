import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'todo-list-component',
    styleUrls: ['./todo-list.scss'],
    templateUrl: './todo-list.html'
})
export class TodoListComponent implements OnInit { 
    todo;
    activeLink;
    filterLinks = [
        { label: 'Active', id: 1 },
        { label: 'Completed', id: 2 },
        { label: 'All', id: 3 },
    ]

    ngOnInit() {
        
    }

    async onSubmit(form) {
        
    }

    setLinkActive = (event) => {
        console.log(event);
        this.activeLink = event.id;
    }
}