import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emprsg',
  templateUrl: './emprsg.component.html',
  styleUrls: ['./emprsg.component.css']
})
export class EmprsgComponent {

  id=""
  firstName=""
  lastName=""
  houseNo=""
  houseName=""
  streetName=""
  pin=""
  district=""
  state=""
  country=""
  mobile=""
  email=""
  parentname=""
  gender=""
  highestdegree=""
  yearofexperience=""
  
  dateofjioning=""
  username=""
  password=""
  confirmpassword=""

  constructor(private route:Router){}

  employeeReg=()=>
  {
    
   let data:any=
   {
    
  id:this.id,
  firstName:this.firstName,
  lastName:this.lastName,
  houseNo:this.houseNo,
  houseName:this.houseName,
  streetName:this.streetName,
  pin:this.pin,
  district:this.district,
  state:this.state,
  country:this.country,
  mobile:this.mobile,
  email:this.email,
  parentname:this.parentname,
  gender:this.gender,
  highestdegree:this.highestdegree,
  yearofexperience:this.yearofexperience,
  dateofjioning:this.dateofjioning,
  username:this.username,
  password:this.password,
  confirmpassword:this.confirmpassword
   }
   console.log(data)

if (this.password== this.confirmpassword) {
    alert("Registered Successfully")
    
  
} else 
{
 alert("password and confirm password not matching") 
}

  }

}
