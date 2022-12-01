import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  name=""
  company=""
  designation=""
  mobile=""
  email=""
  subject=""
  constructor(private route:Router){}

contact=()=>{
  let data:any=
  {
    name:this.name,
  company:this.company,
  designation:this.designation,
  mobile:this.mobile,
  email:this.email,
  subject:this.subject
  }
  console.log(data)

}
}
