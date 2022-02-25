import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserFormComponent } from './pages/user-form/user-form.component';
import { UserGridComponent } from './pages/user-grid/user-grid/user-grid.component';

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'user-form', component: UserFormComponent },
  { path: 'user-grid', component: UserGridComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
