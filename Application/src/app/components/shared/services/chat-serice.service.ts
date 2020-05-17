import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ChatMessage } from '../models/chat-message';
import { Observable } from 'rxjs';

@Injectable()
export class ChatService {

  private actionUrl: string;
  nativeElement: any;

  constructor(private http: HttpClient) {
    this.actionUrl = 'http://hsgapi.azurewebsites.net/history';
  }

  public addToHistory(message: ChatMessage): Observable<ChatMessage> {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };

    return this.http.post<ChatMessage>(this.actionUrl, message, options);
  }

  public getHistory(): Observable<ChatMessage[]> {
    return this.http.get<ChatMessage[]>(this.actionUrl);
  }
}