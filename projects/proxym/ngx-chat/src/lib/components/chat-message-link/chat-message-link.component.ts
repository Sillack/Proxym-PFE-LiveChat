import {PlatformLocation} from '@angular/common';
import {Component, Inject, InjectionToken, OnInit, Optional} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { delay } from 'rxjs/operators';

export interface LinkOpener {
    openLink(url: string): void;
}

/**
 * You can provide your own implementation for {@link LinkOpener} to override link opening e.g. when using Cordova.
 */
export const LinkOpenerToken = new InjectionToken<LinkOpener>('pazznetworkNgxChatLinkOpener');
declare var require: any;
@Component({
    selector: 'ngx-chat-message-link',
    templateUrl: './chat-message-link.component.html',
    styleUrls: ['./chat-message-link.component.less']
})
export class ChatMessageLinkComponent implements OnInit {
    link: string;
    public links = ['https://api.linkpreview.net/?key=171b4f88b0a3251101568e0f1ef7afb3&q=' +
    this.link];
    imgFile = require('../../../../../../../src/assets/file_attach.png');
    public colors2 = [
        '',
        'red',
        'pink',
        'purple',
        'deep-purple',
        'indigo',
        'blue',
        'light-blue',
        'cyan',
        'teal',
        'green',
        'light-green',
        'lime',
        'yellow',
        'amber',
        'orange',
        'deep-orange',
        'brown',
        'grey',
        'blue-grey'
    ];
    public colors = [
        '',
        'blue',
        'amber',
        'teal'
    ];
    text: string;

    constructor(private router: Router,
                private platformLocation: PlatformLocation,
                private httpClient: HttpClient,
                @Optional() @Inject(LinkOpenerToken) private linkOpener: LinkOpener) { }

    ngOnInit() {
        this.links = ['https://api.linkpreview.net/?key=171b4f88b0a3251101568e0f1ef7afb3&q=' +
            this.link];
    }
    public previewClick(link: string): void {
        alert('Link:\n' + link + '\nwas clicked!');
    }

    onClick($event: Event) {
        if (this.linkOpener) {
            $event.preventDefault();
            this.linkOpener.openLink(this.link);
        } else if (this.isInApp()) {
            $event.preventDefault();
            const linkParser = document.createElement('a');
            linkParser.href = this.link;
            this.router.navigateByUrl(linkParser.pathname);
        }
    }

    private isInApp() {
        return this.link.startsWith(this.appUrl());
    }

    private appUrl() {
        return window.location.protocol + '//' + window.location.host + this.platformLocation.getBaseHrefFromDOM();
    }
    public apiCallbackFn = route => {
        // return this.http.get(route);

        // Hard code for demo purposes:

        return this.httpClient.get('https://api.linkpreview.net/?key=171b4f88b0a3251101568e0f1ef7afb3&q=' +
            this.link).
        pipe(delay(2500));
    }

}
