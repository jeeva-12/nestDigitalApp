import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrls: ['./emplogin.component.css']
})
export class EmploginComponent {


   id=""
   password=""

   constructor(private route:Router){}

  empLogin=()=>
  {
    
   let data:any=
   {
    id:this.id,
    password:this.password
   }
   console.log(data)

if (this.id=="1122" && this.password=="12345") {
    alert("valid")
    

    
  
} else 
{
 alert("invalid") 
}


}
}
