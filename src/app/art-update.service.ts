import { Injectable } from '@angular/core';
import {Observable} from "rxjs"
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Art } from './art.model';
import { ActivatedRoute } from '@angular/router';
import { APIURL } from '../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class ArtUpdateService {
  constructor(private http: HttpClient,
    private route: ActivatedRoute) {}
    baseUrl= `${APIURL}/art`
    responsephotography: any;
    id;
}
