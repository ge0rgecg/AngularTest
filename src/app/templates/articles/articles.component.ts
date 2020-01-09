import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html'
})

export class ArticlesComponent implements OnInit {

    @Output() backgroundColor = new EventEmitter<string>();
    selectedBackgroundColor: string;

    ngOnInit() {
        this.backgroundColor.subscribe(
            bc => this.selectedBackgroundColor = bc
        );
    }

    onSetBackgroundColor(color: string){
        this.backgroundColor.emit(color);
    }

}
