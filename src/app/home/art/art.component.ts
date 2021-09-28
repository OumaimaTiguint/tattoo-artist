import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})
export class ArtComponent implements OnInit {
  images = [
    '../../../assets/1.jpg', '../../../assets/2.jpg', '../../../assets/3.jpg',
    '../../../assets/4.jpg','../../../assets/5.jpg', '../../../assets/6.jpg',
    '../../../assets/7.jpg', '../../../assets/8.jpg', '../../../assets/9.jpg'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
