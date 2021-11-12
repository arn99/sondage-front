import { Injectable } from '@angular/core';
import { Enquete } from '../models/Enquete';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class EnqueteService {

  status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];

    enqueteNames: string[] = [
        "Bamboo Watch", 
        "Black Watch", 
        "Blue Band", 
        "Blue T-Shirt", 
        "Bracelet", 
        "Brown Purse", 
        "Chakra Bracelet",
        "Galaxy Earrings",
        "Game Controller",
        "Gaming Set",
        "Gold Phone Case",
        "Green Earbuds",
        "Green T-Shirt",
        "Grey T-Shirt",
        "Headphones",
        "Light Green T-Shirt",
        "Lime Band",
        "Mini Speakers",
        "Painted Phone Case",
        "Pink Band",
        "Pink Purse",
        "Purple Band",
        "Purple Gemstone Necklace",
        "Purple T-Shirt",
        "Shoes",
        "Sneakers",
        "Teal T-Shirt",
        "Yellow Earbuds",
        "Yoga Mat",
        "Yoga Set",
    ];

    constructor(private http: HttpClient) { }

    getEnquetes(): Observable<Enquete[]> {
        const url = `${apiUrl}/inquiry`;
        return this.http.get<Enquete[]>(url)
          .pipe(
            tap(() => console.log()),
          );
      }
    getEnqueteById(id: number): Observable<Enquete> {
        const url = `${apiUrl}/inquiry/${id}`;
        return this.http.get<Enquete>(url)
          .pipe(
            tap(() => console.log()),
          );
      }
    getProducts() {
        return this.http.get<any>('assets/enquetes.json')
        .toPromise()
        .then(res => <Enquete[]>res.data)
        .then(data => { return data; });
    }

    getProductsWithOrdersSmall() {
        return this.http.get<any>('assets/enquetes-orders-small.json')
        .toPromise()
        .then(res => <Enquete[]>res.data)
        .then(data => { return data; });
    }

    generatePrduct(): Enquete {
        const enquete: Enquete =  {
            id: this.generateId(),
            name: this.generateName(),
            description: "Product Description",
            price: this.generatePrice(),
            quantity: this.generateQuantity(),
            category: "Product Category",
            inventoryStatus: this.generateStatus(),
            rating: this.generateRating()
        };

        enquete.image = enquete.name?.toLocaleLowerCase().split(/[ ,]+/).join('-')+".jpg";;
        return enquete;
    }

    generateId() {
        let text = "";
        let possible = "0123456789";
        
        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        
        return Number.parseInt(text);
    }

    generateName() {
        return this.enqueteNames[Math.floor(Math.random() * Math.floor(30))];
    }

    generatePrice() {
        return Math.floor(Math.random() * Math.floor(299)+1);
    }

    generateQuantity() {
        return Math.floor(Math.random() * Math.floor(75)+1);
    }

    generateStatus() {
        return this.status[Math.floor(Math.random() * Math.floor(3))];
    }

    generateRating() {
        return Math.floor(Math.random() * Math.floor(5)+1);
    }
}
