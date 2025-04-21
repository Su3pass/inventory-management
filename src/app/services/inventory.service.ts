import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient) { }
    url = 'https://prog2005.it.scu.edu.au/ArtGalley';
    getAll(data) {
        return this.http.get(this.url+'/'+data);
    }
    create(data){
        return this.http.post(this.url, data);
    }
    delete(data){
        return this.http.delete(this.url+'/'+data);
    }
    update(name: string, data: any) {
        return this.http.put(`${this.url}/${name}`, data);
    }
}
