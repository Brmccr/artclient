import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { art } from '../artdisplay/artdisplay.component';
import { ArtService } from '../art.service';

@Component({ templateUrl: 'admin.component.html' })
export class AdminComponent implements OnInit {
    loading = false;
    users: User[] = [];

    constructor(private artService: ArtService) { }

    ngOnInit() {
        this.loading = true;
        this.ArtService.getAll().pipe(first()).subscribe(Art => {
            this.loading = false;
            this.Art = Art;
        });
    }
}