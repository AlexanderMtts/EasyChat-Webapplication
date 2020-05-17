import { Component, OnInit } from '@angular/core';

import { Person } from '../shared/models/nickname';
import { ChatService } from '../shared/services/chat-serice.service';
import { ChatMessage } from '../shared/models/chat-message';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css']
})

export class ChatBarComponent implements OnInit {

  public chatMessage: string;

  constructor(private chatService: ChatService) { }

  ngOnInit() { }

  public addMessage(): void {
    if (this.chatMessage.trim() === '') {
      return;
    }

    if (!Person.Nickname) {
      alert('Bitte Benutzername erfassen um Nachrichten zu senden')
      return;
    }

    let messageToSend: ChatMessage = new ChatMessage();

    messageToSend.message = this.chatMessage;
    messageToSend.nickname = Person.Nickname;

    this.chatService.addToHistory(messageToSend)
      .subscribe(
        (response: ChatMessage) => {
          this.chatMessage = '';
        }
      )
  }
}
