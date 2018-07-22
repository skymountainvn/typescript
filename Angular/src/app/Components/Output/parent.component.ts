import { Component } from '@angular/core';
@Component({
    selector: 'app-parent',  
    templateUrl:'./parent.component.html'

})

export class ParentComponent {
    count = 1;
    increase(){ this.count++;}
    descrease(){ this.count--;}
    reset() { this.count = 0;}
}