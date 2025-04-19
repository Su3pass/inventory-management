import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UpdatePage } from './update.page';  // 更新导入
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { UpdatePageRoutingModule } from './update-routing.module';  // 更新导入

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    UpdatePageRoutingModule
  ],
  declarations: [UpdatePage]
})
export class UpdatePageModule {}
