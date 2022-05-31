import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-varianza',
  templateUrl: './varianza.component.html',
  styleUrls: ['./varianza.component.css']
})
export class VarianzaComponent implements OnInit {

  formCantidad: FormGroup = this.formBuilder.group({
    numPoblation: ['1', Validators.required]
  });

  porDefecto = {
    numPoblation: '1'
  }


  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
  }

}
