import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { ContentDetails } from '../about/contD';
@Component({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {


  	public contacts = [{"contactid":1,"contactname":"二敏","contacttexxt":"13325457584"},{"contactid":2,"contactname":"二敏","contacttexxt":"13325457584"},{"contactid":3,"contactname":"二敏","contacttexxt":"13325457584"},{"contactid":4,"contactname":"二敏","contacttexxt":"13325457584"},{"contactid":5,"contactname":"二敏","contacttexxt":"13325457584"}];

  constructor(private navCtrl: NavController) {
  	}

  	itemClick(event,contact){
  		//console.log(contact);

  		this.navCtrl.push(ContentDetails,{item:contact});
  	}


  }

