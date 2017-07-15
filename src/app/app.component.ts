import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Retro Barcode Generator';
  boxes: Array<number> = [grn(),grn(),grn(),grn(),grn(),grn(),grn(),grn(),grn()]
}

function grn(){
  let value: number = (Math.floor(Math.random()*6))+1
  return value;
};
