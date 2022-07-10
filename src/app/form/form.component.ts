import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  myForm: any = FormGroup;
  arr: any = FormArray;
// QuestionsArray:any=['Name','age', 'gender']
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      'name': new FormControl("", [Validators.required]),
      'address': new FormControl("", [Validators.required]),
      'phone_number': new FormControl("", [Validators.required]),
      'email': new FormControl("", [Validators.required]),
      arr: this.fb.array([this.createItem()])
    })
  }
  createItem() {
    return this.fb.group({
      Question: [''],
      Answer:['']
    })
  }
  addItem() {
    debugger;
    this.arr = this.myForm.get('arr') as FormArray;
    this.arr.push(this.createItem());
  }
  Submit() {
    console.log(this.myForm);
    console.log(this.myForm.value);
  }

}
