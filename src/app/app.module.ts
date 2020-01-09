import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { HomeComponent } from './templates/home/home.component';
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import { PageNotFoundComponent } from './templates/page-not-found/page-not-found.component';
import { ArticlesComponent } from './templates/articles/articles.component';
import { UserService } from './services/user.service';
import { PostComponent } from './templates/post/post.component';
import { PhotoComponent } from './templates/photo/photo.component';
import { PostService } from './services/post.service';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { PhotoService } from './services/photo.service';
import { TruncatePipe } from './pipes/truncate.pipe';
import { PhotoCardComponent } from './templates/photo/photo-card/photo-card.component';
import { TimerComponent } from './templates/timer/timer.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppRouting } from './app.routing';
import { PhotoDetailsComponent } from './templates/photo-details/photo-details.component';
import { AlbumService } from './services/album.service';
import { PhotoFormComponent } from './templates/photo/photo-form/photo-form.component';
import { AuthenticationService } from './services/authentication.service';
import { Globals } from './app.globals';
import { AppGuard } from './app.guard';
import { LoginComponent } from './templates/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    ArticlesComponent,
    PostComponent,
    PhotoComponent,
    TruncatePipe,
    PhotoCardComponent,
    TimerComponent,
    PhotoDetailsComponent,
    PhotoFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BsDropdownModule.forRoot(),
    AppRouting,
    ReactiveFormsModule,
    NgxSpinnerModule,
  ],
  providers: [
    UserService,
    PostService,
    PhotoService,
    AlbumService,
    AuthenticationService,
    Globals,
    AppGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
