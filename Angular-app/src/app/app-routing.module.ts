import { ChatComponent } from './chatbot/chat/chat.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ToDoComponent } from './Todo/to-do/to-do.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginFormComponent},
  {path:'Users', component:UserListComponent, children:[
    {path:':id', component:UserDetailsComponent}
  ]},
  {path:'toshika', component:ChatComponent},
  {path:'to-do', component:ToDoComponent},
  {path:'**', component:HomeComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
