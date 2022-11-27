import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-fucking-child',
  templateUrl: './fucking-child.component.html',
  styleUrls: ['./fucking-child.component.css']
})
export class FuckingChildComponent {
     _coef1: number;
     _coef2: number;
     _coef3: number;
     _disc: number;
     _x1: number;
     _x2: number;
	 
	@Input()
	set coef1(coef1:number) {
			this._coef1 = coef1;
  }
  get coef1() { return this._coef1; }

  @Input()
	set coef2(coef2:number) {
			this._coef2 = coef2;
  }
  get coef2() { return this._coef2; }

  @Input()
	set coef3(coef3:number) {
			this._coef3 = coef3;
  }
  get coef3() { return this._coef3; }

  get disc() : number {
    this._disc = (Math.pow(this.coef2, 2) - (4 * this.coef1 * this.coef3));
    return this._disc;
  }

  get x1() : number {
    return ((-(this.coef2) + Math.sqrt(this.disc)) / 2 * this.coef1)
  }

  get x2() : number {
    return ((-(this.coef2) - Math.sqrt(this.disc)) / 2 * this.coef1)
  }
  
}
