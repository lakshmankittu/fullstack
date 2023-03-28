import { Component, EventEmitter, Output } from '@angular/core';
import { LoginForm } from 'src/models/login_item';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent
{
  @Output() onlogin=new EventEmitter<LoginForm>();
  username=''
  password=''
  welcome()
 {
  if(!this.username.trim().length)
   return alert("username cant be empty");
  let loginobj:LoginForm={
  username:this.username,
  password:this.password,
  }
  
  console.log(loginobj);
  this.onlogin.emit(loginobj);
  this.username=''
  this.password=''
}
}
