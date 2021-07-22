import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  contactForm: any = null;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      myName: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(14)]],
      email: ['',[Validators.required]],
      description: ['',[Validators.required]],
      gender: ['',[Validators.required]],
      select:['',[Validators.required]],
      age:['',[Validators.required]]
    })
   }

  ngOnInit(): void {
  }
submitForm(){
  this.submitted = true;
  console.log(this.contactForm.value);
  console.log(this.contactForm);

}
}
