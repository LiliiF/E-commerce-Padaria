import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './page/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },  // Define a nova rota
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
