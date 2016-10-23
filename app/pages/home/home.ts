import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  	public contacts = [{"contactid":1,"contactname":"二敏","contactfrom":"iPhone 6s","contactImgid":"c1","contactcontent":"我发的第一条！","contactzan":1000,"contactping":2000,"contactdate":"一个小时以前"},{"contactid":2,"contactname":"二敏","contactfrom":"iPhone 6s","contactImgid":"c2","contactcontent":"我发的第一条！","contactzan":1000,"contactping":2000,"contactdate":"一个小时以前"},{"contactid":3,"contactname":"二敏","contactfrom":"iPhone 6s","contactImgid":"c3","contactcontent":"我发的第一条！","contactzan":1000,"contactping":2000,"contactdate":"一个小时以前"},{"contactid":4,"contactname":"二敏","contactfrom":"iPhone 6s","contactImgid":"c4","contactcontent":"我发的第一条！","contactzan":1000,"contactping":2000,"contactdate":"一个小时以前"}];

  constructor(private navCtrl: NavController) {
  }



}
