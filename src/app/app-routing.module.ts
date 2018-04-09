import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsContainerComponent }      from './containers/news-container/news-container.component';

const routes : Routes = [
  {path: 'news/:id', component: NewsContainerComponent},
  { path: 'news', component: NewsContainerComponent },
  { path: '', redirectTo: '/news', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}