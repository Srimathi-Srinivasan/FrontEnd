import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { IPropertyBase } from '../models/IPropertyBase';
import { Property} from '../models/Property';


@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties(SellRent:number): Observable<IPropertyBase[]>{
    return this.http.get('data/properties.json').pipe(
     map(data=>{
       const propertiesArray:Array<IPropertyBase>=[];
       for(const id in data){
         if(data.hasOwnProperty(id) && data[id].SellRent==SellRent){
           propertiesArray.push(data[id]);
         }
       }
       return propertiesArray;
     }));
   }


   addProperty(property: Property) {
    localStorage.setItem('newProp', JSON.stringify(property));
  }
}



