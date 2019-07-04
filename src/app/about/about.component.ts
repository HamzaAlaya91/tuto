import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {


  info = {
  	nom:"hamza",
  	email:"hamza@gmail.com",
  	telephone: "0751010922"
  }

  comments=[ 
  	{date:new Date(),message:"A"},
  	{date:new Date(),message:"B"},
  	{date:new Date(),message:"C"},
  ];

  commentaire={date:null,message:""};

  constructor() { }

  ngOnInit() {
  }

  onAddCommentaire(c){
  	c.date = new Date();
  	this.comments.push(c);
  	this.commentaire.message="";
  }

}
