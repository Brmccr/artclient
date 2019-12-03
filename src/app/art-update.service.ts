import { Injectable } from '@angular/core';
import {Observable} from "rxjs"
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Art } from './art.model';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ArtUpdateService {
  constructor(private http: HttpClient,
    private route: ActivatedRoute) {}
    baseUrl= 'http://localhost:3000/art'
    responsephotography: any;
    id;
}
