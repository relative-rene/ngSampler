import {
  NgModule,
  Component
} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  FormsModule
} from '@angular/forms';

/*
 * Components
 */
import {ChatNavBar} from './components/ChatNavBar';
import {
  ChatThreads,
  ChatThread
  } from './components/ChatThreads';
import {
  ChatWindow,
  ChatMessage
  } from './components/ChatWindow';

/*
 * Injectables
 */
import {servicesInjectables} from './services/services';
import {utilInjectables} from './util/util';

/*
 * Services
 */
import {
  MessagesService,
  ThreadsService,
  UserService
} from './services/services';

import {ChatExampleData} from './ChatExampleData';

/*
 * Webpack
 */
import '../css/styles.css';

@Component({
  selector: 'chat-app',
  template: `
  <div>
    <nav-bar></nav-bar>
    <div class="container">
      <chat-threads></chat-threads>
      <chat-window></chat-window>
    </div>
  </div>
  `
})
export class ChatAppComponent {
  constructor(public messagesService: MessagesService,
              public threadsService: ThreadsService,
              public userService: UserService) {
    ChatExampleData.init(messagesService, threadsService, userService);
  }
}

@NgModule({
  declarations: [
    ChatAppComponent,
    ChatNavBar,
    ChatThreads,
    ChatThread,
    ChatWindow,
    ChatMessage,
    utilInjectables
  ],
  imports: [
   FormsModule
  ],
  bootstrap: [ ChatAppComponent ],
  providers: [ servicesInjectables ]
})
export class ChatAppModule {}

platformBrowserDynamic().bootstrapModule(ChatAppModule);

