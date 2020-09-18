import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NewsApiService } from './news-api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/Toolbar';
import { MatIconModule } from '@angular/material/Icon';
import { MatSidenavModule } from '@angular/material/Sidenav';
import { MatListModule } from '@angular/material/List';
import { NewsFrontComponent } from './news-front/news-front.component';
import { EmailSubComponent } from './email-sub/email-sub.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsFrontComponent,
    EmailSubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,

  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
