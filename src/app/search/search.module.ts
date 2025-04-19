import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPage } from './search.page';  // 更新导入
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { SearchPageRoutingModule } from './search-routing.module';  // 更新导入

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    SearchPageRoutingModule  // 更新模块
  ],
  declarations: [SearchPage]  // 更新声明
})
export class SearchPageModule {}  // 更新模块类名