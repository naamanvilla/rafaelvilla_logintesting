import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { FileReaderComponent } from './file-reader/file-reader.component';
import { APIdataComponent } from './apidata/apidata.component';
import { CRUDComponent } from './crud/crud.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'filereader', component: FileReaderComponent},
  {path: 'apidata', component: APIdataComponent},
  {path: 'crud', component: CRUDComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
