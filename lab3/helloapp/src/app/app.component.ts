import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<label> <h2>Варіант 8.</h2> <br> <br> Введіть число 1:</label>
              <input [(ngModel)]="num1" placeholder="num1"> <br> <br>
              <label> Введіть число 2:</label>
              <input [(ngModel)]="num2" placeholder="num2">
              <h1>Середнє арифметичне: {{num1}} + {{num2}}</h1>`
})
export class AppComponent { 
    name='';
}