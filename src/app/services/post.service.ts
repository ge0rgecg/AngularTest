import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_URL } from './../app.const';

import { Post } from './../models/post.model';

@Injectable()
export class PostService {

    constructor(private httpClient: HttpClient) { }

    getAll(): Observable<Post[]> {
        return this.httpClient.get<Post[]>(`${API_URL}/posts`);
    }

}
