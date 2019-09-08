import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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

const appRoutes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'shared-space', component: SharedSpaceComponent, canActivate: [AuthGuardService] }
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
    CreateTopicComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
