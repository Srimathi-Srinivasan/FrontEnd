import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { Property } from '../models/Property';
import { HousingService } from './housing.service';

@Injectable({
  providedIn: 'root'
})
export class PropertyResolverService implements Resolve<Property> {

  constructor(private router:Router, private housingService:HousingService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Property | Observable<Property> | Promise<Property> {
    const propId=route.params['id'];
    return this.housingService.getProperty(+propId).pipe(
      catchError(error=>{
        this.router.navigate(['/']);
       return of(null);
      })
    );
  }
}
