import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    styleUrls: ['./not-found.scss'],
    template: `
        <div style="text-align: center;"><h1>Page not Found</h1></div>
    `
})

export class NotFoundComponent {
    constructor(private titleService: Title) {
        titleService.setTitle('Page not found');
    }
}
