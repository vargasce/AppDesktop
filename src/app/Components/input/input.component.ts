import { Component, OnInit, AfterViewInit, Input, ElementRef, Renderer2 } from '@angular/core';
import { PagesRoutingModule } from '../../Page/page.routing';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() type: string = 'text';
  @Input() placeholder: string = 'text';
   

  constructor(
    private render: Renderer2,
    private elem: ElementRef
  ) { }

  ngOnInit(): void {
  }

}
