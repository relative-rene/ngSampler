import { Subject } from 'rxjs';
import { Message } from '../_models/message.model';

/**
 * Service controls state management of form
 */
export class MessageService {
  messagesChanged = new Subject<Message[]>();

  private messages: Message[] = [];

  constructor() { }

  setMessages(messages: Message[]) {
    this.messages = messages;
    this.messagesChanged.next(this.messages.slice());
  }

  
  getMessages() {
    return this.messages.slice();
  }

  getMessage(index: number) {
    return this.messages[index];
  }

  addMessage(message: Message) {
    this.messages.push(message);
    this.messagesChanged.next(this.messages.slice());
  }

  updateMessage(index: number, newMessage: Message) {
    this.messages[index] = newMessage;
    this.messagesChanged.next(this.messages.slice());
  }

  deleteMessage(index: number) {
    this.messages.splice(index, 1);
    this.messagesChanged.next(this.messages.slice());
  }
}
