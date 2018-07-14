import {Component} from "@angular/core";
// list and button change color
@Component({
    selector:"bai2",
    template:`
        <div>
            <h1 style="color: red" *ngIf="!isRemember" >{{en}} </h1>
            <h2 style="color: green" *ngIf="isRemember" >{{en}} </h2>
            <p> {{vn}} </p>
            <button class="{{isRemember ? 'btn btn-danger' : 'btn btn-success'}}" (click)="toggleIsRemember()"> TOGGLE </button>
        </div>
    `,
    styles:[
        "p {color:blue }"
    ] 

})

export class Bai2Component {
    en="ONE";
    vn="MOT";
    isRemember = true;
    toggleIsRemember() {this.isRemember = !this.isRemember};

}
   


