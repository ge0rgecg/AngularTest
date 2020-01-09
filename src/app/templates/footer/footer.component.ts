import { Component, OnInit } from '@angular/core';
import { PRODUCTION } from './../../app.const';
@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit{

    isProduction: boolean;

    ngOnInit(){
        this.isProduction = PRODUCTION;
    }

}
