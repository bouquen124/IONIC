import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ClinicasService } from 'src/app/Servicios/clinicas.service';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { Clinicas } from '../../Servicios/clinica';



@Component({
  selector: 'app-clinicas',
  templateUrl: './clinicas.page.html',
  styleUrls: ['./clinicas.page.scss'],
})
export class ClinicasPage implements OnInit {
  clinicas:any[];
  constructor(private clinica_service:ClinicasService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {
this.getClinicas();
   
  }




  getClinicas(){


    this.clinica_service.getClinicas()
    .subscribe(r => {
      console.log(r.data);

  this.clinicas= r.data;
     
    } );

  }


  createClinica(  
    nombre:string,  
    direccion :string ,
    telefono :string,
    correo :string) {
    const luna = {
    
      nombre,  
      direccion ,
      telefono ,
      correo 
  
    };
    this.clinica_service.createClinica(luna)
    .subscribe((newestado) => {
      this.clinicas.unshift(newestado);
    });
   
  }
  

  async openAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Nueva tipo!',
      inputs: [
        {
          name: 'nombre',

          type: 'text',

          placeholder: 'aqui el nombre'
        },{

name:'direccion',
type:'text',
placeholder:'aqui la direcion'


        },{

          name:'telefono',
          type:'text',
          placeholder:'aqui el telefono'
          
          
                  },{

                    name:'correo',
                    type:'text',
                    placeholder:'aqui la correo'
                    
                    
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
          this.createClinica(data.nombre,data.direccion,data.telefono,data.correo)
      

          }
        }
      ]
    });
    await alert.present();
  }






  deleteClinicas(id:number, index: number) {
    this.clinica_service.deleteClinicas(id)
    .subscribe((id) => {
      this.clinicas.splice(index, 1);
      this.presentToast('Su tarea fue eliminada correctamente');
    });

  
  }


  updateClinicas(){
    const clinica ={
      id:1,
      nombre:'editadio' , 
      direccion :'editadio',
      telefono :'editadio',
      correo :'editadio'
  
    };
    
    this.clinica_service.updateClinicas(clinica).subscribe(todo=>{
    
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
  













 
  
    
  

