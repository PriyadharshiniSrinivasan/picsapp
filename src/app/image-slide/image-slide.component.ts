import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'image-slide',
  templateUrl: './image-slide.component.html',
  styleUrls: ['./image-slide.component.css']  
})
export class ImageSlideComponent implements OnInit {

  @ViewChild('carousel') carousel: any;
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 1000;
    config.keyboard = false;
  }       

  
  pause() {
    this.carousel.pause();
  }

  ngOnInit() {


  }

  

}
