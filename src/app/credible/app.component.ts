import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'credible',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class CredibleComponent {
  public hList = ['https://angular.io/guide/animations', 'https://augury.rangle.io/', 'https://www.protractortest.org/', 'https://www.meetup.com/find/?keywords=angular', 'https://gitter.im/angular/angular'];
  public selectionsOptions = [
    { label: "New Component", selectableValue: 'component' },
    { label: 'Angular Material', selectableValue: 'material' },
    { label: "Add PWA Support", selectableValue: 'pwa' },
    { label: "Add Dependenc", selectableValue: 'dependency' },
    { label: "Run and Watch Tests", selectableValue: 'test' },
    { label: "Build for Production", selectableValue: 'build' }];

  public spanList = [
    { label: "Learn Angular", link: "https://angular.io/tutorial" },
    { label: "CLI Documentation", link: "https://angular.io/cli" },
    { label: "Angular Blog", link: "https://blog.angular.io/" }];
  public userChose: string;
  public currWidth = "24";
  public currHeight = "24";

  constructor(
    private authenticationsService: AuthenticationService,
    private router: Router) { }

  logout() {
    this.authenticationsService.logout();
    this.router.navigate(['/login'])
  }
}
