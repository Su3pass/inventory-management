import { Injectable } from '@angular/core';
import { InventoryItem } from '../models/inventory-item.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private apiUrl = 'https://prog2005.it.scu.edu.au/ArtGalley';
  
  constructor() { }

  // 获取所有项目
  getAllItems(): Promise<InventoryItem[]> {
    // 实际实现将调用API
    return Promise.resolve([]);
  }

  // 添加新项目
  addItem(item: InventoryItem): Promise<InventoryItem> {
    // 实际实现将调用API
    return Promise.resolve(item);
  }

  // 更新项目
  updateItem(name: string, item: InventoryItem): Promise<InventoryItem> {
    // 实际实现将调用API
    return Promise.resolve(item);
  }

  // 删除项目
  deleteItem(name: string): Promise<void> {
    // 实际实现将调用API
    return Promise.resolve();
  }

  // 获取特色项目
  getFeaturedItems(): Promise<InventoryItem[]> {
    // 实际实现将调用API
    return Promise.resolve([]);
  }
}