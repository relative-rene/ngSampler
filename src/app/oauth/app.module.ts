import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";
import { AuthorizedComponent } from "./authorized/authorized.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
    declarations:[AuthorizedComponent, HomeComponent],
    imports:[AppRoutingModule],
    providers:[]
})

export class OAuthModule{}