import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-alejandro',
  templateUrl: './alejandro.component.html',
  styleUrls: ['./alejandro.component.css']
})
export class AlejandroComponent implements OnInit {

 // registerForm: FormGroup;

  constructor() { }

  ngOnInit() {

  /*  this.registerForm = this.formBuilder.group({
      firstname: [''],
      lastname: '',
      street: '',
      zip: [''], 
      city: ''
    });*/

  }

  logForm(value: any) {
    console.log(value);
  }

}
