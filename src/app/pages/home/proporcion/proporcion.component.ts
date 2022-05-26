import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-proporcion',
  templateUrl: './proporcion.component.html',
  styleUrls: ['./proporcion.component.css']
})
export class ProporcionComponent implements OnInit {

  sigma = '\\sigma^2';
  mu = '\\mu';
  n = 'n';
  p = 'p';

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
