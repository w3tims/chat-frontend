import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { IChatMessage } from '../../commons/chat-message.interface';
import { ChatEvent } from '../../commons/chat-event.enum';
import { Observable } from 'rxjs';
import { IChatClient } from '../../commons/chat-client.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  chatClients$: Observable<IChatClient[]> = this.socket.fromEvent(ChatEvent.CLIENTS);

  constructor(private socket: Socket) {
  }

  newChatMessage$(): Observable<IChatMessage> {
    return this.socket.fromEvent(ChatEvent.NEW_MESSAGE);
  }

  sendMessage(message: string): void {
    this.socket.emit(ChatEvent.NEW_MESSAGE, message);
  }

  setUserName(username: string): void {
    this.socket.emit(ChatEvent.SET_USER_NAME, username);
  }

}
