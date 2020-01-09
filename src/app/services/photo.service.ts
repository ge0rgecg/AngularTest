import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_URL } from './../app.const';

import { Photo } from './../models/photo.model';

@Injectable()
export class PhotoService {

    constructor(private httpClient: HttpClient) { }

    add(photo: Photo): Observable<HttpResponse<Photo>> {
        return this.httpClient.post<Photo>(`${API_URL}/photos`, photo, { observe: 'response'});
    }

    update(photo: Photo): Observable<HttpResponse<Photo>> {
        return this.httpClient.put<Photo>(`${API_URL}/photos/${photo.id}`, photo, { observe: 'response'});
    }

    getAll(): Observable<Photo[]> {
        return this.httpClient.get<Photo[]>(`${API_URL}/photos`);
    }

    getById(id: number): Observable<Photo> {
        return this.httpClient.get<Photo>(`${API_URL}/photos/${id}`);
    }

}
