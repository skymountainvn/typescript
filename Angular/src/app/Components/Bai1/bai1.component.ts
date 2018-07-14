import {Component} from "@angular/core";
// INCRESE-DECREASE NUMBER
// CHANGE IMG
@Component({
    selector:"bai1",
    templateUrl: "./bai1.component.html"
})

export class Bai1Component {
    so:number = 0;
    hinh:string="https://zmp3-photo.zadn.vn/thumb/240_240/avatars/5/a/b/9/5ab9e37a5d36cca1884d75cd5db5e2d5.jpg "

    ED_SHEERAN(e){
        console.log(e);
        e.srcElement.src="https://zmp3-photo.zadn.vn/thumb/240_240/avatars/4/4/44c22d69a695677cb1a0aec5e20d9237_1516949077.jpg"
    }

    SARA_LUU(e){
        console.log(e);
        e.srcElement.src="https://zmp3-photo.zadn.vn/thumb/240_240/avatars/5/a/b/9/5ab9e37a5d36cca1884d75cd5db5e2d5.jpg"
    }

    CONG() {
        this.so= this.so + 1;
    }
    TRU() {
        this.so= this.so - 1;
    }
    RESET() {
        this.so= 0;
    }

}