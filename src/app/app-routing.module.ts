import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProjectpageComponent } from './components/projectpage/projectpage.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ProjectComponent } from './components/project/project.component';

const routes: Routes = [
  {path:'', component: ProjectpageComponent},
  {path:'projectpage', component: ProjectpageComponent},
  {path:'resume', component: ResumeComponent},
  {path:'project/:id', component: ProjectComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
