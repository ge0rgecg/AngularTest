import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Photo } from 'src/app/models/photo.model';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
    selector: 'app-photo',
    templateUrl: './photo.component.html'
})

export class PhotoComponent implements OnInit {


    photos: Photo[] = [];

    constructor(private photoService: PhotoService) { }

    ngOnInit() {
        this.getPhotos()
     }

    private getPhotos() {
        this.photoService.getAll()
        .pipe(
            map(
            // (photos: Photo[]) => photos.filter(p => p.id <= 20)
            (p: Photo[]) => p.filter(x => x.id <= 20)
            )
        )
            .subscribe(
                (photos: Photo[]) => this.photos = photos,
                (error: Error) => console.error(error)
            );
    }
}
