import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {  Estado } from '../../Servicios/Estado';
import { EstadoService } from 'src/app/Servicios/estado.service';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.page.html',
  styleUrls: ['./estados.page.scss'],
})
export class EstadosPage implements OnInit {

  estados:any[];
  constructor(private estado_service:EstadoService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController) { 



  }

  ngOnInit() {

   
    this.getEstados();


  }
  async openAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Nueva estado!',
      inputs: [
        {
          name: 'nombre',

          type: 'text',

          placeholder: 'aqui la estado'
        },{

name:'descripcion',
type:'text',
placeholder:'aqui estado'


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
          this.createEstado(data.nombre,data.descripcion)

          }
        }
      ]
    });
    await alert.present();
  }


  getEstados(){


    this.estado_service.getEstados()
    .subscribe(r => {
      console.log(r.data);

  this.estados= r.data;
     
    }
  
    );

 


  }

  createEstado(nombre: string,descripcion:string) {
    const estado = {
    
      nombre,
      descripcion,
  
    };
    this.estado_service.createEstado(estado)
    .subscribe((newestado) => {
      this.estados.unshift(newestado);
    });
   
  } 




  }
