import { Component, OnInit, Renderer2, ElementRef, ViewChild, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-submit',
  templateUrl: './button-submit.component.html',
  styleUrls: ['./button-submit.component.css']
})
export class ButtonSubmitComponent implements OnInit {

    @ViewChild('btnSubmit') private btnElement: any;
    @Input() width: string = 'medium';
    @Input() backgroundColor: string = 'orange';
    @Input() color: string = 'white';
    @Input() text: string = 'Input';
    @Input() align: string = 'center';

    @Output() OnClickEvent: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private render: Renderer2,
        private elem: ElementRef
    ) { }

    ngOnInit(): void {
    }

    public ngAfterViewInit( ){
        this.setStyle();
    }

    public OnClick( event: any ){
        console.log('on click');
        this.OnClickEvent.emit( event );
    }


    private setStyle(){

        switch( this.width ){
            case 'small':
                this.render.setStyle( this.btnElement.nativeElement, 'width', '25%');
            break;
            case 'medium':
                this.render.setStyle( this.btnElement.nativeElement, 'width', '50%');
            break;
            case 'large':
                this.render.setStyle( this.btnElement.nativeElement, 'width', '100%');
            break;
        }

        switch( this.backgroundColor ){
            case 'white':
                this.render.addClass( this.btnElement.nativeElement, 'background_white' );
            break;
            case 'orange':
                this.render.addClass( this.btnElement.nativeElement, 'background_orange');
            break;
            case 'black':
                this.render.addClass( this.btnElement.nativeElement, 'background_black' );
            break;
        }

        switch( this.color ){
            case 'white':
                this.render.setStyle( this.btnElement.nativeElement, 'color', 'white' );
            break;
            case 'black':
                 this.render.setStyle( this.btnElement.nativeElement, 'color', '#282726' );               
            break;
        }

    }

}
