import { Component, OnInit, Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CardComponent } from './Components/card/card.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  public lengthHeight: number = 0;
  @ViewChild("welcomeContainer") public divWelcomeContainer: any;

  constructor( private renderer: Renderer2, private elem: ElementRef ){
    this.lengthHeight = document.documentElement.scrollHeight;;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit( ){
    this.renderHight();
  }

  public renderHight(){
    this.renderer.setStyle( this.divWelcomeContainer.nativeElement, 'height', this.lengthHeight.toString()+ 'px' );
  }

}
