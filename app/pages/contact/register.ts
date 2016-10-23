import {Component} from '@angular/core';
import {NavController,ViewController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/contact/register.html'
})
export class Register {
	 constructor(public viewCtrl: ViewController) {}
	 dismissRegister(){
	 	this.viewCtrl.dismiss();
	 }
	
}