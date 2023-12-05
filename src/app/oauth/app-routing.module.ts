import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { RouterModule, Routes } from "@angular/router";

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

const routes: Routes = [
    { path: '/', component: HomeComponent }
]

