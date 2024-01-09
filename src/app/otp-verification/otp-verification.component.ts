import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent {
  otp="";
  ref="";
  condition=false;
  success=false;

  constructor(private route: ActivatedRoute,private httpClient: HttpClient){

  }

  ngOnInit()
  {
    this.route.params.subscribe(params => {
      console.log(params['ref']);
      this.ref =params['ref'];

    });
  }
  submitOTP()
  {
    const searchParams = {
      otp:this.otp,
      transferRef:this.ref

    };
    const headers = {
      'Content-Type': 'application/json'
    };
    console.log(searchParams);

    const apiUrl = `http://localhost:8091/operation/emissionotp`;
    this.httpClient.post(apiUrl, searchParams,{headers}).subscribe(
      (response: any) => {
        console.log(response);
        if(response['msg']=="OTP not verified !")
        {
          this.condition=true;
        }
        else{
          this.condition=false;
          this.success=true;

        }
      },
      );
  }
}
