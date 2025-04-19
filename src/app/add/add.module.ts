import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddPage } from './add.page';  // 修正导入名称（原为Tab1Page）
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { AddPageRoutingModule } from './add-routing.module';  // 修正导入名称（原为Tab1PageRoutingModule）

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    AddPageRoutingModule  // 修正大小写（原为addPageRoutingModule）
  ],
  declarations: [AddPage]
})
export class AddPageModule {}