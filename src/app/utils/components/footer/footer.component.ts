import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <div class="copyright-footer">
            <h5 class="copyright-text padding-h-slim">Made by <a href="https://www.linkedin.com/in/vitor-medeiro-9096ab138/" target="_blank">Vitor Medeiro</a>
            </h5>
            <a href="https://github.com/liverday" target="_blank">
                <img src="assets/github-logo.png" />
            </a>
        </div>
    `,
    styleUrls: ['./footer.scss']
})
export class AppFooterComponent { }