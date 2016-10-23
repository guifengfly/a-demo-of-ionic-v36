import {Component} from '@angular/core';
import {NavController,LoadingController,AlertController,ToastController,ModalController} from 'ionic-angular';
import { Register } from '../contact/register';
@Component({
  templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {
	public user={
		username : '',
		password : ''
	}
constructor(private loadingCtrl: LoadingController,private alertCtrl: AlertController,private toastCtrl: ToastController,private modalController : ModalController) {
	
}

openRegisterPage(){
  let modal = this.modalController.create(Register);
    modal.present();
	
}

login() {
if(this.user.username==""){
/*
  let alert = this.alertCtrl.create({
    title: 'Low battery',
    subTitle: '10% of battery remaining',
    buttons: ['Dismiss']
  });
  alert.present();

  */
  let toast = this.toastCtrl.create({
    message: '用户名不能为空',
    duration: 2000,
    position: 'top',
    showCloseButton:true
  });
  toast.present();

}else{
  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();

  setTimeout(() => {
    loading.dismiss();
  }, 3000);	
}

}


}
