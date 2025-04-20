import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';


@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    featured = [];
    isModalOpen = false;
    itemName = '';
    category = '';
    quantity = '';
    price = '';
    supplierName = '';
    stockStatus = '';
    featuredItem = '';
    specialNote = '';
    constructor(private http: HttpService) { }
    ngOnInit() {
        this.getFeatured();
    }
    getFeatured(){
        this.http.getAll('').subscribe((res: any)=>{
            this.featured = res.filter(item=>item.featured_item === 1);
        })
    }
    showModal(){
        this.isModalOpen = true;
    }
    create(){
        this.http.create({
            item_name: this.itemName,
            category: this.category,
            quantity: this.quantity,
            price: this.price,
            supplier_name: this.supplierName,
            stock_status: this.stockStatus,
            featured_item: this.featuredItem,
            special_note: this.specialNote,
        }).subscribe((res: any)=>{
            this.getFeatured();
            this.isModalOpen = false;
        })
    }
    setOpen(isOpen: boolean) {
        this.isModalOpen = isOpen;
    }
}