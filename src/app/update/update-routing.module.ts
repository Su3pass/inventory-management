import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdatePage } from './update.page';  // 更新导入

const routes: Routes = [
  {
    path: '',
    component: UpdatePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdatePageRoutingModule {}
