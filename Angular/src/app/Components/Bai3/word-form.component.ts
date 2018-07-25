import { Component, Input, Output, EventEmitter  } from "@angular/core";
import { word } from '../../types';

@Component ({
    selector: 'app-word-form',
    templateUrl: './word-form.component.html'
})

export class wordFormComponent {
    isShowForm = false;
    @Output() AddWord = new EventEmitter();

    txten = ' ';
    txtvn = ' ';


    toggleForm(){
        this.isShowForm = !this.isShowForm;
    }
    addWord() {
        const word = {
            _id: Math.random() + ' ',
            en: this.txten,
            vn: this.txtvn,
            isRemember : true
            
        };
        this.AddWord.emit(word);
        this.txten = ' ';
        this.txtvn = ' ';
        this.isShowForm = false;
    }
}