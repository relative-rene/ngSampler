import { NgModule } from "@angular/core";
import { ContactList } from "./components/contact-list/contact-list";
import ContactComponent from "./components/contact/contact";
import { AppRoutingModule } from './app-routing.module';
import { ContactStore } from "./store/store";
@NgModule({
    declarations: [ContactList, ContactComponent],
    imports: [AppRoutingModule],
    providers: [ContactStore]
})

export class ShoppingCartModule { }