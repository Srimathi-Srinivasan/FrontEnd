import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { Property } from 'src/app/models/Property';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
public propertyId : number;
property = new Property();
galleryOptions: NgxGalleryOptions[];
galleryImages: NgxGalleryImage[];


constructor(private route: ActivatedRoute,
            private router: Router,
            private housingService: HousingService) { }

ngOnInit() {
  this.propertyId = +this.route.snapshot.params['id'];
    this.route.data.subscribe(
      (data: Property) => {
        this.property = data['prp'];
      }
    );
  // this.route.params.subscribe(
  //   (params) => {
  //     this.propertyId = +params['id'];
  //     this.housingService.getProperty(this.propertyId).subscribe(
  //       (data: Property) => {
  //         this.property = data;
  //       }
  //     );
  //   }
  // );
  this.galleryOptions = [
    {
      width: '100%',
      height: '465px',
      thumbnailsColumns: 4,
      imageAnimation: NgxGalleryAnimation.Slide,
      preview: true
    }
  ];

  this.galleryImages = [
    {
      small: 'assets/images/prop1.jfif',
      medium: 'assets/images/prop1.jfif',
      big: 'assets/images/prop1.jfif'
    },
    {
      small: 'assets/images/prop2.jfif',
      medium: 'assets/images/prop2.jfif',
      big: 'assets/images/prop2.jfif'
    },
    {
      small: 'assets/images/prop3.jfif',
      medium: 'assets/images/prop3.jfif',
      big: 'assets/images/prop3.jfif'
    },
    {
      small: 'assets/images/prop4.jfif',
      medium: 'assets/images/prop4.jfif',
      big: 'assets/images/prop4.jfif'
    },
    {
      small: 'assets/images/prop1.jfif',
      medium: 'assets/images/prop1.jfif',
      big: 'assets/images/prop1.jfif'
    }
  ];






}
}
