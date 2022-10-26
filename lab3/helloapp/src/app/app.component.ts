import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<label> <h2>Варіант 8.</h2> <br> <br> Введіть число 1:</label>
              <input [(ngModel)]="num1" placeholder="num1"> <br> <br>
              <label> Введіть число 2:</label>
              <input [(ngModel)]="num2" placeholder="num2">
              <button type="button" (click)="doStuff()">Do stuff</button>
              <h1>Середнє арифметичне кубів: {{mid}}</h1>
              <h1>Середнє геометричне модулів: {{mid2}}</h1>`
})
export class AppComponent { 
    num1='';
    num2='';
    mid='';
    mid2='';

    doStuff() {
        this.mid= String((Math.pow(Number(this.num1), 3) + Math.pow(Number(this.num2), 3)) / 2);
        this.mid2 = String(Math.sqrt(Math.abs(Number(this.num1)) * Math.abs(Number(this.num2))));
    }
}