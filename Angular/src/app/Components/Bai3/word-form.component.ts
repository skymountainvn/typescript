import { Component, Input, Output, EventEmitter  } from "@angular/core";

@Component ({
    selector: 'app-word-form',
    templateUrl: './word-form.component.html'
})

export class wordFormComponent {
    isShowForm = false;
    toggleForm(){
        this.isShowForm = !this.isShowForm;
    }
}