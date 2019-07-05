import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  model: any = {};
  onSubmit() {
	alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
	}

  constructor() { }

  ngOnInit() {
  }

}
