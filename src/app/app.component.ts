import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  clientsOnline$ = this.chat.chatClients$();

  text = new FormControl('');

  newMessageForm = new FormGroup({
    text: this.text
  });

  constructor(private chat: ChatService) {
  }

  ngOnInit(): void {
    this.chat.chatClients$().subscribe(users => console.log('users:', users));
    this.chat.newChatMessage$().subscribe(users => console.log('new message:', users));
  }

  sendMessage(formSubmitEvent: Event) {
    this.chat.sendMessage('msg');
  }
}
