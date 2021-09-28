import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { HomeComponent } from './home/home.component';
import { ArtComponent } from './art/art.component';
import { AboutComponent } from './about/about.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    IntroComponent, 
    HomeComponent, ArtComponent, AboutComponent, SubscribeComponent, ContactComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
