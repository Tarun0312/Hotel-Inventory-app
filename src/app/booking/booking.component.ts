import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingService } from './booking.service';
import { CustomValidator } from './validators/custom-validator';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})

export class BookingComponent implements OnInit {

  bookingForm !: FormGroup;




  public get guests() {
    return this.bookingForm.get("guests") as FormArray;
  }


  constructor(private fb: FormBuilder, private booking: BookingService,private router: ActivatedRoute) {

  }


  ngOnInit(): void {
    const roomId = this.router.snapshot.paramMap.get('id');

    this.bookingForm = this.fb.group({
      roomId: new FormControl({ disabled: true, value: roomId }, { validators: Validators.required }),// same ['']
      guestName: ['', {
        updateOn: 'blur',
        validators: [Validators.minLength(5), Validators.required]
      }],
      guestEmail: ['', [Validators.required]],
      mobileNumber: ['', [Validators.minLength(10), Validators.maxLength(10)]],
      bookingAmount: ['', [Validators.min(1000)]],
      checkinDate: [''],
      checkoutDate: [''],
      bookingDate: [''],
      //nested form
      address: this.fb.group({
        addressLine1: ['', [Validators.required]],
        addressLine2: [''],
        city: [''],
        state: [''],
        pincode: [''],
        country: [''],
      }),
      guests: this.fb.array([this.fb.group({
        guestName: ['', Validators.required],
        age: new FormControl('', { validators: [Validators.required] }),

      })]),
      tnc: new FormControl(false, { validators: [Validators.requiredTrue] })
    }, { validators : CustomValidator.validateDate})


    this.getBookingData();



    this.bookingForm.valueChanges.subscribe(data => {
      // console.log(data);
      this.booking.bookRoom(this.bookingForm.getRawValue()).subscribe((data) => {
        console.log(data);
      })
    })

  }


  getBookingData() {
    this.bookingForm.patchValue({
      // roomId: new FormControl({disabled: true,value:'11'}),// same ['']
      guestName: ['Tarun'],
      guestEmail: ['tarun@gmail.com'],
      mobileNumber: [''],
      bookingAmount: [''],
      checkinDate: [''],
      checkoutDate: [''],
      bookingDate: [''],
      //nested form
      address: {
        addressLine1: [''],
        addressLine2: [''],
        city: [''],
        state: [''],
        pincode: [''],
        country: [''],
      },
      guests: [],
      tnc: false
    });
  }



  submit() {
    console.log(this.bookingForm.getRawValue());

    // this.booking.bookRoom(this.bookingForm.getRawValue()).subscribe((data) => {
    //   console.log(data);

    // })

    this.bookingForm.reset({
      roomId: new FormControl({ value: '10', disabled: true }),// same ['']
      guestName: [''],
      guestEmail: [''],
      mobileNumber: [''],
      bookingAmount: [''],
      checkinDate: [''],
      checkoutDate: [''],
      bookingDate: [''],
      //nested form
      address: {
        addressLine1: [''],
        addressLine2: [''],
        city: [''],
        state: [''],
        pincode: [''],
        country: [''],
      },
      guests: [],
      tnc: false
    })
  }

  addGuest() {
    this.guests.push(
      this.fb.group({
        guestName: [''],
        age: new FormControl('')
      })
    )
  }

  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }

  deletePassport() {
    if (this.bookingForm.get('passport'))
      this.bookingForm.removeControl('passport');
  }

  deleteGuest(i: number) {
    this.guests.removeAt(i);
  }


}
