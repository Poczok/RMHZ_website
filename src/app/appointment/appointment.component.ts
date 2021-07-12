import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  public nameControl = new FormControl(null, Validators.required);
  public dateControl = new FormControl(null, Validators.required);
  public numberOfGuestsControl = new FormControl(null, Validators.required);
  public contactPhoneControl = new FormControl(null, Validators.required);
  public contactEmailControl = new FormControl(null, [Validators.email, Validators.required]);

  public form = new FormGroup({
    name: this.nameControl,
    date: this.dateControl,
    numberOfGuests: this.numberOfGuestsControl,
    contactPhone: this.contactPhoneControl,
    contactEmail: this.contactEmailControl
  });

  constructor() { }

  ngOnInit() {
  }

}
