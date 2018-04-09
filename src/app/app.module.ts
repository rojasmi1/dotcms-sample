import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { NewsService } from './services/news.service';
import { StateManagerService } from './services/state-manager.service';
import { AppRoutingModule } from './/app-routing.module';
import { NewsContainerComponent } from './containers/news-container/news-container.component';
import { SincePipe } from './pipes/since.pipe';
import { DateFilterComponent } from './components/date-filter/date-filter.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    NewsDetailComponent,
    NewsContainerComponent,
    SincePipe,
    DateFilterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsService, StateManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
