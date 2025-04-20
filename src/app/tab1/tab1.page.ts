import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../service/http.service';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy {
    private reloadListener: any;

    constructor(private http: HttpService) {
        // Initialize the reload listener
        this.reloadListener = () => {
            this.getAll();
        };
    }

    goods = []
    inputModel = ''

    ngOnInit() {
        window.addEventListener('reload-tab1', this.reloadListener);
        this.getAll();
    }

    ngOnDestroy() {
        window.removeEventListener('reload-tab1', this.reloadListener);
    }

    search() {
        this.goods = [];
        this.getAll();
    }

    getAll() {
        this.http.getAll(this.inputModel)
            .subscribe((res: any) => {
                console.log(res)
                this.goods = res;
            })
    }
}
