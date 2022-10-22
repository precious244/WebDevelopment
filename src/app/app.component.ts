import { Component } from '@angular/core';
import { Kendaraan } from './class/kendaraan';
import { Mobil } from './class/mobil';
import { Motor } from './class/motor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app-pretty';

  constructor() {
     
    const MobilA = new Kendaraan();

    MobilA.setRoda(6);
    MobilA.setMesin("10 Silinder");

    console.log(MobilA.getRoda());
    console.log(MobilA.getMesin());

    const MobilBaleno = new Mobil();

    MobilBaleno.setRoda(4);
    MobilBaleno.setMesin("4 Silinder");

    console.log(MobilBaleno.getRoda());
    console.log(MobilBaleno.getMesin());

    const MotorHonda = new Motor();

    MotorHonda.setRoda(2);
    MotorHonda.setMesin("2 Tabung");

    console.log(MotorHonda.getRoda());
    console.log(MotorHonda.getMesin());

  }

}