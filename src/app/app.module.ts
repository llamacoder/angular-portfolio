import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProjectlistComponent } from './components/projectlist/projectlist.component';
import { ProjectComponent } from './components/project/project.component';
import { FilterComponent } from './components/filter/filter.component';
import { DataService } from './services/data.service';
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
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
