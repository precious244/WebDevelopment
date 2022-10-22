import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.scss']
})
export class TextInputComponent implements OnInit {

  @Input() isPassword: boolean = false;
  @Output() iniEvent = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  savedValue(event: any){
    this.iniEvent.emit(event.target.value);
  }

}