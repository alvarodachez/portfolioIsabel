import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name:string = '';
  email:string = '';
  subject:string = '';
  message:string = '';

  constructor(public _messageService:MessageService) { }

  ngOnInit(): void {
  }

  contactForm(){
    let form = {
      name:this.name,
      email:this.email,
      subject:this.subject,
      message:this.message
    }

    this._messageService.sendMessage(form).subscribe( res => {
      console.log(res);
    })


  }

}
