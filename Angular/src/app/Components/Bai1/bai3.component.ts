import {Component} from "@angular/core";
// list and button change color
@Component({
    selector:"bai3",
    template:`
        <div class="container">
            <div class="form-group" style = "width:200px">
                <button class="btn btn-success form-control" *ngIf="!isShowForm" (click)="toggleForm()"> SHOW </button>
                <br>
                <div *ngIf="isShowForm" >
                <input class="form-control" placeholder="ENGLISH" [(ngModel)]="txten"> 
                <br>
                <input class="form-control" placeholder="VIETNAMESE" [(ngModel)]="txtvn"> 
                <br>
                <button class="btn btn-success form-control" (click)="addWord()"> ADD WORD </button>
                <br>
                <br>
                <button class="btn btn-danger form-control" (click)="toggleForm()"> CANCEL </button>
                </div>
            </div>
            <div *ngFor= "let word of words">
                <h3 class="{{ word.isRemember ? 'text-success' : 'text-danger'}}"> {{word.en}} </h3>
                <p> {{word.vn}} </p>
            <button class="btn btn-danger" (click)="removeWord(word._id)"> REMOVE </button>
            <button class="{{word.isRemember ? 'btn btn-danger' : 'btn btn-success'}}" (click)="toggle(word._id)"> TOGGLE </button>
            </div>
        </div>
    `,
    styles:[
        "p {color:blue }"
    ] 

})

export class Bai3Component {
    txten=' ';
    txtvn=' ';
    isShowForm = false;
    words: word[] = [
        {en:'ONE', vn:"MOT", isRemember: true, _id:'a1'},
        {en:'TWO', vn:"HAI", isRemember: false, _id:'a2'},
        {en:'THREE', vn:"BA", isRemember: true, _id:'a3'},
        {en:'FOUR', vn:"BON", isRemember: false, _id:'a4'},
        {en:'FIVE', vn:"NAM", isRemember: true, _id:'a5'}
    ];

    wordSize1= {
        fontWeight: 500,
        color: 'green'
    }
    wordSize2= {
        fontWeight: 500,
        color: 'red'
    }


    removeWord(_id:string) {
        const index = this.words.findIndex(word => word._id === _id);
        this.words.splice(index, 1);
    }

    toggle(_id:string) {
        const word = this.words.find(word => word._id === _id);
        word.isRemember = !word.isRemember;
    }

    addWord() {
        const { txten, txtvn} = this;
        this.words.push({
            en: txten, vn: txtvn, isRemember: false, _id:Math.random()+ ' '
        });
        this.txten = '';
        this.txtvn = '';
    }

    toggleForm(){
        this.isShowForm = !this.isShowForm;
    }

}

interface word {
    en: string;
    vn: string;
    _id: string;
    isRemember : boolean;
}
   


