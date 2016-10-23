import {Page,NavController,NavParams} from 'ionic-angular';
@Page({
  templateUrl: 'build/pages/about/contD.html'
})
export class ContentDetails {
	public item={};
	constructor(public params: NavParams){
		this.params.get('contact');
		this.item=this.params.data.item;
	 }
 }