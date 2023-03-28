import { Component } from '@angular/core';
import { LoginForm } from 'src/models/login_item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
user={
  isLogin:false,
};

[x: string]: any;
  title = 'login';
  Login:LoginForm[]=[];
  username=''
  password=''
  change(item:boolean)
  {
     console.log(item);
     this.user.isLogin=item;
  }
  welcomeform(loginitem:LoginForm)
  {
    if(this.Login.length>0)
    {
      this.Login.splice(0);
    }
     this.user.isLogin=true;
     this.Login.push(loginitem);
  }
}
