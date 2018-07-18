import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'todos-component',
    styleUrls: ['./todos.scss'],
    templateUrl: './todos.html'
})
export class TodosComponent implements OnInit {

    constructor(private titleService: Title) {
        this.titleService.setTitle("Todos | Todo WebApp");
    }

    ngOnInit() {

    }
}