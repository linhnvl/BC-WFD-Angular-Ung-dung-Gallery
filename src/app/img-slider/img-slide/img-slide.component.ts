import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { template } from '@angular/core/src/render3';

@Component({
  selector: 'app-img-slide',
  templateUrl: './img-slide.component.html',
  styleUrls: ['./img-slide.component.scss']
})
export class ImgSlideComponent implements OnInit {
  @ViewChild('tmpl') template: TemplateRef<any>;
  constructor() { }

  ngOnInit() {
  }

}
