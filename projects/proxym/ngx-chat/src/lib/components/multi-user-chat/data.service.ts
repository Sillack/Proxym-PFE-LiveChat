import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Room} from '../../services/adapters/xmpp/plugins/multi-user-chat.plugin';

@Injectable()
export class DataService {

    private messageSource;
    currentMessage = this.messageSource.asObservable();

    constructor() { }

    changeMessage(room: Room) {
        this.messageSource.next(room);
    }

}
