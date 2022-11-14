import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    // change to immutable
    this.messages = [...this.messages, message] ;
  }

  clear() {
    this.messages = [];
  }
}
