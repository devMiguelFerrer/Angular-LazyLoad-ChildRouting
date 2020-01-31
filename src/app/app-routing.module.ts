import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'form', loadChildren: () => import('./form/form.module').then((m) => m.FormModule) },
  { path: 'tabs', loadChildren: () => import('./tabs/tabs.module').then((m) => m.TabsModule) },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
