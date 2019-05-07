import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{



  constructor(){

  }

  ngAfterViewInit(){
    this.myCanvas("اهداء");
  }

  ngOnInit(){


  }

  
  update(value?):string{
    return value;
  }


  myCanvas(value){


    var canvas = <HTMLCanvasElement>document.getElementById('myCanvas');
    var ctx = canvas.getContext("2d");
    
    var img = new Image();

    img.onload = ()=>{
      ctx.drawImage(img, 0,0, canvas.width, canvas.height);
      ctx.font = "normal 36px Verdana";
      ctx.fillText(value, 50,50);
      document.getElementById("download").setAttribute("href", canvas.toDataURL());
    }

    // img.src = "https://cdn.cnn.com/cnnnext/dam/assets/190318100224-lionel-messi-exlarge-169.jpg";

    img.src = "assets/cards/9.jpg";

    


  }




  title = 'canvas';
}
