import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfesionalesService } from 'src/app/Servicios/profesionales.service';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { Profesionales } from '../../Servicios/profesionales';

@Component({
  selector: 'app-profesionales',
  templateUrl: './profesionales.page.html',
  styleUrls: ['./profesionales.page.scss'],
})
export class ProfesionalesPage implements OnInit {

  constructor(public http : HttpClient,
    private profesionalservice:ProfesionalesService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,private loadingCtrl: LoadingController) { }

  ngOnInit() {
this.getProfesionales();
 
  }
  profesionales: any=[];
  
  
  getProfesionales(){


    this.profesionalservice.getProfesionales()
    .subscribe(r => {
      console.log(r.data);

  this.profesionales= r.data;
     
    } );

  }


  createProfesioanles(  

    c_clinica_id:number,
nombre:string,
telefono:string,
correo:string,
localidad:string  
    ) {
    const profesioanl = {
      c_clinica_id,
      nombre,
      telefono,
      correo,
      localidad

  
    };
    this.profesionalservice.createProfesioanles(profesioanl)
    .subscribe((newestado) => {
      this.profesionales.unshift(newestado);
    });
   
  }
  async openAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Nueva  usuario!',
      inputs: [
        {
          name: 'c_clinica_id',
          type: 'number',

          placeholder: 'aqui la clinica'
        },{

name:'nombre',
type:'text',
placeholder:'aqui el nombre'


        },{

          name:'telefono',
          type:'number',
          placeholder:'aqui el telefono'
                  },
                  {

                    name:'correo',
                    type:'text',
                    placeholder:'aqui el correo'
                    
                    
                            },{

                    name:'localidad',
                    type:'text',
                    placeholder:'aqui la localidad'
                    
                    
                            }
      ],

      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Crear',
          handler: (data) => {
          this.createProfesioanles(data.c_clinica_id,data.nombre,data.telefono,data.correo,data.localidad)
      

          }
        }
      ]
    });
    await alert.present();
  }


  deleteProfesional(id:number, index: number) {
    this.profesionalservice.deleteProfesional(id)
    .subscribe((id) => {
      this.profesionales.splice(index, 1);
      this.presentToast('Su tarea fue eliminada correctamente');
    });
  }


  updateProfesionales(){
    const profesional ={
  
      id:1,
      c_clinica_id:2,
      nombre:'cambio',
      telefono:'cambio',
      correo:'cambio@gmail.com',
      localidad:'camnios'
  
    };
    
    this.profesionalservice.updateProfesionales(profesional).subscribe(todo=>{
    
    console.log(todo);
    
    });
    
    }









  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000
    });
    await toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando..',
      duration: 2000
    });
    await loading.present();
    return loading;
  }
}
