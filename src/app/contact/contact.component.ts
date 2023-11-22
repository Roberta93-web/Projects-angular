import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  name_model: string = '';
  email_model: string = '';
  subject_model: string = '';
  message_model: string = '';

  submit(form: NgForm) {
    alert('FORM SENT: ' + JSON.stringify(form.value));
    console.log('Name: ' + form.value.name);
    console.log('Email: ' + form.value.email);
    console.log('Subject: ' + form.value.subject);
    console.log('Message: ' + form.value.message);
  }
  reset(form: NgForm) {
    this.name_model = '';
    this.email_model = '';
    this.subject_model = '';
    this.message_model = '';
  }
}
