import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  constructor(private api:ApiService){
    api.fetchnews().subscribe(
      (response)=>{
        this.data=response;
      }
    )
  }



  data:any=[]

}
