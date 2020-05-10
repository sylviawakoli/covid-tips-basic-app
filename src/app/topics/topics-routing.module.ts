import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {
  Topic1Component,
  Topic2Component,
  Topic3Component,
  Topic4Component,
  Topic5Component,
  Topic6Component,
} from "./content";

const routes: Routes = [
  {
    path: "",
    redirectTo: "1",
  },
  {
    path: "1",
    component: Topic1Component,
  },
  {
    path: "2",
    component: Topic2Component,
  },
  {
    path: "3",
    component: Topic3Component,
  },
  {
    path: "4",
    component: Topic4Component,
  },
  {
    path: "5",
    component: Topic5Component,
  },
  {
    path: "6",
    component: Topic6Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopicsPageRoutingModule {}
