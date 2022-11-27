import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<label> <h2>Варіант 4.</h2> <br> <br> Введіть строку:</label>
              <input [(ngModel)]="input" placeholder="input"> <br> <br>
              <button type="button" (click)="reverseString(input)">Reverse</button>
              <h1>Зворотня стрічка: {{reverse}}</h1>`
})

export class AppComponent { 
    input='';
    reverse='';

    reverseString(str: string) {
        for (let i = str.length - 1; i >= 0; i--) {
          this.reverse += str[i];
        }

        return this.reverse;
    }
}