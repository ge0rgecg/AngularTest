import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Photo } from './../../../models/photo.model';

@Component({
    selector: 'app-photo-card',
    templateUrl: './photo-card.component.html'
})

export class PhotoCardComponent {

    @Input() photos: Photo[];

    constructor(private router: Router) {

    }

    goDetails(photoId: number) {
        this.router.navigate([`photos/${photoId}/details`]);
    }

    goEdit(photoId: number){
        this.router.navigate([`photos/${photoId}/edit`]);
    }

}
