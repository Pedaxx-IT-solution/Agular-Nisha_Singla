import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

    pageview:string = "hello i am a variable";

    imageurl:string = "assets/download.jpg";  

    buttovariable : boolean = false;

    users: string[] = [ "john" ,"levee", "kaka"];


    changetitle(){
this.pageview="hello worldd";

    }



  constructor() { }

  ngOnInit() {
  }

}
