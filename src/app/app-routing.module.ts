import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailSubComponent } from 'src/app/email-sub/email-sub.component'

const routes: Routes = [
  { path: 'EmailSub', component: EmailSubComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




