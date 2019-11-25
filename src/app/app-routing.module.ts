import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemContainerComponent} from './container/item-container/item-container.component';

const routes: Routes = [
  { path: '', component: ItemContainerComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
