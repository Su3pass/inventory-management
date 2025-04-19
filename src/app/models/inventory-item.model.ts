export interface InventoryItem {
    id?: number;                // 项目ID (唯一，自增)
    name: string;               // 项目名称 (必填)
    category: 'Electronics' | 'Furniture' | 'Clothing' | 'Tools' | 'Miscellaneous'; // 类别
    quantity: number;           // 数量 (必填)
    price: number;              // 价格 (必填)
    supplierName: string;       // 供应商名称 (必填)
    stockStatus: 'In Stock' | 'Low Stock' | 'Out of Stock'; // 库存状态
    featuredItem?: number;      // 特色项目 (默认: 0)
    specialNote?: string;       // 特别说明 (可选)
  }