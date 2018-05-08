import { Component, OnInit } from '@angular/core';
declare var jQuery:any;
//declare var $ :any;

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrls: ['./my-first-comp.component.css']
})
export class MyFirstCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    jQuery.noConflict();
      (function($) {
        $(function() {
          // more code using $ as alias to jQuery
            $("p").css({"color":"red","font-size":"18px"});
        });
     })(jQuery);
  } 

}

