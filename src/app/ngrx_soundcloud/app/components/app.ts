import { Component } from '@angular/core';


@Component({
  selector: 'soundcloud',
  styles: [`
    .main {
      padding-bottom: 200px;
    }
  `],
  template: `
    <app-header></app-header>

    <main class="main">
      <router-outlet></router-outlet>
    </main>

    <player></player>
  `
})
export class SoundCloudComponent {}
