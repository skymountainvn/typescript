import { Component, Input,Output  } from "@angular/core";

@Component ({
    selector: 'app-word-info',
    templateUrl: './word-info.component.html'
})

export class wordInfoComponent {
    @Input() wordInfo : any;

}