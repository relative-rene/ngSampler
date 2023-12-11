import { Routes } from "@angular/router";
import { ACGComponent } from "./app.component";
import { AcgChapters } from "./components/chapters/chapters";

export const acgRoutes: Routes = [
  {
    path: '', component: ACGComponent
  },
  { 
    path: 'chapters', component: AcgChapters 
  }

];


