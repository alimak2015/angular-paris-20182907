import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { State } from '../../enums/state.enum';
import { Item } from '../../interfaces/item';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public Form: FormGroup;
  public libelles = Object.values(State);
  @Output() newItem: EventEmitter<Item> = new  EventEmitter<Item>();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.Form = this.fb.group({
      name: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],
        reference: [
          '',
          Validators.compose([Validators.required, Validators.minLength(5)])
        ],
      state: State.ALIVRER, // <--- the FormControl called "name"
      dateLivraison: '',

    });
  }

  public  isError(field: string): Boolean {

     return this.Form.get(field).invalid && this.Form.get(field).touched;
  }

  public process(): void {
    // console.log(this.Form.value);
    this.newItem.emit(this.Form.value);
  }

}
