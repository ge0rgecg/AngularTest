import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album.model';
import { Photo } from 'src/app/models/photo.model';
import { AlbumService } from 'src/app/services/album.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhotoService } from 'src/app/services/photo.service';

import { CustomValidator } from './../../../shared/validation/custom-validator';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  albums: Album[];
  photos: Photo[] = [];
  photoTitle: string;

  photoForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private albumService: AlbumService,
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router
  ) {
      this.buildPhotoForm();
    }

    get albumId() {
      return this.photoForm.get('albumId');
    }
    get title() {
      return this.photoForm.get('title');
    }
    get url() {
      return this.photoForm.get('url');
    }

  ngOnInit() {
    this.fillAlbumOptions();
    const photoId: number = Number(this.activatedRoute.snapshot.paramMap.get('photoId'));

    if(photoId > 0) {
      this.fillPhotoForm(photoId);
    }
  }
  private fillPhotoForm(photoId: number) {
    this.photoService.getById(photoId)
    .subscribe(
      (p: Photo) => {
        this.photoForm.patchValue({
          albumId: p.albumId,
          title: p.title,
          url: p.url
        });
      },
      (error: Error) => console.error(error)
    );
  }

  onSubmit() {
    if (this.photoForm.valid) {
      const photo: Photo = new Photo();
      photo.albumId = this.photoForm.value.albumId;
      photo.title = this.photoForm.value.title.toString();
      photo.url = this.photoForm.value.url.toString();
      photo.thumbnailUrl = this.photoForm.value.url.toString();

      if(photo.id === 0){
        this.addPhoto(photo);
      }else{
        this.updatePhoto(photo);
      }
    }

  }

  private buildPhotoForm() {
    this.photoForm = this.formBuilder.group({
      albumId: ['', Validators.required],
      title: ['', [Validators.required, Validators.minLength(5)]],
      url: ['', [Validators.required, CustomValidator.urlValidator]]
    });
  }

  private addPhoto(photo: Photo) {
    this.photoService.add(photo)
      .subscribe(
        (r: HttpResponse<Photo>) => {
          if (r.status === 201) {
            console.log('response', r);
          }
        },
        (error: Error) => console.error(error)
      );
  }

  private updatePhoto(photo: Photo) {
    this.photoService.update(photo)
      .subscribe(
        (r: HttpResponse<Photo>) => {
          if (r.status === 201) {
            console.log('response', r);
          }
        },
        (error: Error) => console.error(error)
      );
  }

  private fillAlbumOptions() {
    this.albumService.getAll()
      .subscribe(
        (a: Album[]) => this.albums = a,
        (error: Error) => console.error(error),
      );
  }

}
