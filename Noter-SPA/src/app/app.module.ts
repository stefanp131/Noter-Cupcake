import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { RegisterComponent } from 'src/components/register/register.component';
import { FooterComponent } from 'src/components/footer/footer.component';
import { LoginComponent } from 'src/components/login/login.component';
import { HomeComponent } from 'src/components/home/home.component';
import { AuthGuardService } from 'src/services/authGuard.service';
import { SharedSpaceComponent } from 'src/components/shared-space/shared-space.component';
import { TopicComponent } from 'src/components/topic/topic.component';
import { CreateTopicComponent } from 'src/components/create-topic/create-topic.component';
import { TopicContentComponent } from 'src/components/topic-content/topic-content.component';
import { CreateNoteComponent } from 'src/components/create-note/create-note.component';
import { NoteComponent } from 'src/components/note/note.component';
import { JwtInterceptorService } from 'src/services/jwtInterceptor.service';
import { PageNotFoundComponent } from 'src/components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'shared-space', component: SharedSpaceComponent, canActivate: [AuthGuardService] },
  { path: 'shared-space/:id', component: TopicContentComponent, canActivate: [AuthGuardService] },
  { path: '', redirectTo: '/home' , pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    SharedSpaceComponent,
    TopicComponent,
    CreateTopicComponent,
    TopicContentComponent,
    CreateNoteComponent,
    NoteComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
