import { Routes } from "@angular/router";
import { ACGComponent } from "./app.component";
import { AcgChapters } from "./components/chapters/chapters";
import { allChaptersResolver, chaptersResolver } from "../application_services/data.resolvers";

export const acgRoutes: Routes = [
  {
    path: '', component: ACGComponent
  },
  {
    path: 'chapters/:novel_id', component: AcgChapters,
  resolve: {
      data: allChaptersResolver
    }
  },
  {
    path: ':novel_id/:description', component: AcgChapters,
    resolve: {
      data: chaptersResolver
    }
  }

];


