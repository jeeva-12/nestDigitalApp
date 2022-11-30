import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NavhomeComponent } from './navhome/navhome.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { ViewFriendsComponent } from './view-friends/view-friends.component';
import { NavadminComponent } from './navadmin/navadmin.component';
import { EmploginComponent } from './emplogin/emplogin.component';
import { EmprsgComponent } from './emprsg/emprsg.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

const myRoute:Routes=[
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"adminlogin",
    component:AdminloginComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"emplogin",
    component:EmploginComponent
  },
  {
    path:"emprsg",
    component:EmprsgComponent
  },
  {
    path:"gallery",
    component:GalleryComponent
  },
  {
    path:"vCourse",
    component:ViewCourseComponent
  },
  {
    path:"Vfriends",
    component:ViewFriendsComponent
  }
]



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    GalleryComponent,
    NavhomeComponent,
    AdminloginComponent,
    ViewCourseComponent,
    ViewFriendsComponent,
    NavadminComponent,
    EmploginComponent,
    EmprsgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
