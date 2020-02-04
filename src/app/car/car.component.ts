import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  name: string;
  speed: number;
  model: string;
  colors: Colors;
  options: string[];

  constructor() { }


  ngOnInit() {
    this.name = 'Audi';
    this.speed = 250;
    this.model = 'A8';
    this.colors = {
      car: 'White',
      salon: 'Black',
      wheels: 'Silver'
    };
    this.options = ['ABS', 'AutoParking', 'EBS'];
  }

  carSelect(carName) {
    // tslint:disable-next-line:triple-equals
    if (carName == 'bmv') {
      this.name = 'BMW';
      this.speed = 290;
      this.model = '725i';
      this.colors = {
        car: 'Blue',
        salon: 'White',
        wheels: 'Gray'
      };
      this.options = ['ABS', 'AutoParking', 'EBS'];
    } else if (carName === 'audi') {
      this.name = 'Audi';
      this.speed = 250;
      this.model = 'A8';
      this.colors = {
        car: 'White',
        salon: 'Black',
        wheels: 'Silver'
      };
      this.options = ['ABS', 'AutoParking', 'EBS', 'GUR'];
    } else {
      this.name = 'Mersedes';
      this.speed = 320;
      this.model = 'C180';
      this.colors = {
        car: 'Yellow',
        salon: 'Black',
        wheels: 'Silver'
      };
      this.options = ['ABS', 'AutoParking', 'EBS', 'AutoPilot'];
    }

  }

}

interface Colors {
  car: string;
  salon: string;
  wheels: string;
}
