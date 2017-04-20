import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    {id:0, text:"you're now friends with kees"},
    {id:1, text:"Kees liked your message"},
    {id:2, text:"You never believe what just happened!"}
  ];

  update(id, text){
    this.messages = this.messages.map(m =>
      m.id === id
      ? {id, text}
      : m
    )
  }
  constructor() { }
}
