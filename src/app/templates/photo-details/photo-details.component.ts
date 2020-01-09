import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PhotoService } from './../../services/photo.service';

import { Photo } from './../../models/photo.model';


@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit {

  photo: Photo = new Photo();

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router
  ) { }

  ngOnInit() {
    const photoId: number = + this.activatedRoute.snapshot.paramMap.get('photoId');
    this.getDetails(photoId);
  }

  goEdit(photoId: number) {
    this.router.navigate([`photos/${photoId}/edit`]);
  }

  goBack() {
    this.router.navigate([`photos`]);
  }

  private getDetails(id: number) {
    this.photoService.getById(id)
      .subscribe(
        (p: Photo) => this.photo = p,
        (error: Error) => console.error(error)
      );
  }

}
