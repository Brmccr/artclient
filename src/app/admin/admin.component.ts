import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { Art } from '../art.model';
import { ArtService } from '../art.service';

@Component({
     selector: 'app-admin',
     templateUrl: 'admin.component.html' })
export class AdminComponent implements OnInit {
     loading = true;
    arts: Art[] = [];

    constructor(private artService: ArtService) { }

    ngOnInit() {
        this.loading = true;
        this.artService.responsephotography().pipe(first()).subscribe(arts => {
            this.loading = true;
            this.arts = arts;
        });
    }
}