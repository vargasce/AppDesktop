import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  @Input() text: string = "Titulo";
  @Input() align: string = "center";
  @Input() color: string = "white";
  @ViewChild('titleRef') refTitle: any;

  constructor(
    private render: Renderer2,
    private elem: ElementRef
  ) { }

  ngOnInit(): void {
    this.initConf();
  }

  private initConf(){
    //this.render.setStyle( this.refTitle.nativeElement, 'color', this.color);
  }

}
