import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpingPage } from './help.page';

const routes: Routes = [
  {
    path: '',
    component: HelpingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpingPageRoutingModule {}
