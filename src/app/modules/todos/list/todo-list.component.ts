import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  } from '@angular/router/src/router';

@Component({
    selector: 'todo-list-component',
    styleUrls: ['./todo-list.scss'],
    templateUrl: './todo-list.html'
})
export class TodoListComponent implements OnInit { 
    todo;
    todos;
    activeLink;

    constructor(private route: ActivatedRoute, private router: Router) {
        this.todos = route.snapshot.data.todos.result.todos
    }

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
        this.activeLink = event.id;
    }
}