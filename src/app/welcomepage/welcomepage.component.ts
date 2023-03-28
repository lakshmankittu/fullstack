import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoginForm } from 'src/models/login_item';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent 
{ 
  @Input()loginlist!: LoginForm;
  @Output() changeobj=new EventEmitter<boolean>();
  logout()
  {
    console.log("its fine false");
    this.changeobj.emit(false);
    return
  }
 
}
