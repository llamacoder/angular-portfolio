import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment'
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProjectlistComponent } from './components/projectlist/projectlist.component';
import { ProjectComponent } from './components/project/project.component';
import { FilterComponent } from './components/filter/filter.component';
import { ProjectService } from './services/project.service';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ProjectpageComponent } from './components/projectpage/projectpage.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ProjectlistComponent,
    ProjectComponent,
    FilterComponent,
    HomeComponent,
    ResumeComponent,
    ProjectpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'projects'),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
