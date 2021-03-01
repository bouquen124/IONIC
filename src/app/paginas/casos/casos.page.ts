import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CasosService } from 'src/app/Servicios/casos.service';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { Casos } from '../../Servicios/casos';

@Component({
  selector: 'app-casos',
  templateUrl: './casos.page.html',
  styleUrls: ['./casos.page.scss'],
})
export class CasosPage implements OnInit {

  constructor(public http : HttpClient,
    private caso_sevice:CasosService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,private loadingCtrl: LoadingController) { }

  ngOnInit() {

this.getCasos();

  }



  casos: any=[];
  
  
  getCasos(){


    this.caso_sevice.getCasos()
    .subscribe(r => {
      console.log(r.data);

  this.casos= r.data;
     
    } );

  }


  createCasos(  
   
    nombre:string,
    descripcion:string,
    fecha:Date,
    c_profesional_id:number,
    t_usuario_id:number,
    c_estado_id:number
    
    
    ) {
    const caso = {
    nombre,
    descripcion,
    fecha,
    c_profesional_id,
    t_usuario_id,
    c_estado_id
      
    };
    this.caso_sevice.createCasos(caso)
    .subscribe((newestado) => {
      this.casos.unshift(newestado);
    });
   
  }


  async openAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Nuevo Caso!',
      inputs: [
        {
          name: 'nombre',
          type: 'text',

          placeholder: 'Introduce el nombre'
        },{

name:'descripcion',
type:'text',
placeholder:'Introduce la descripcion'


        },{

          name:'fecha',
          type:'date',
          value:new Date(),
          placeholder:'fecha'
          
          
                  },{

                    name:'c_profesional_id',
                    type:'number',
                    placeholder:'intoduuzca el  id profesional'
                    
                    
                            },{

                              name:'t_usuario_id',
                              type:'number',
                              placeholder:'Introguzca el id del usuario'
                              
                              
                                      },{

                                        name:'c_estado_id',
                                        type:'number',
                                        placeholder:'Introguzca el id del estado'
                                        
                                        
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
          this.createCasos(data.nombre,data.descripcion,data.fecha,data.c_profesional_id,data.t_usuario_id,data.c_estado_id)
      

          }
        }
      ]
    });
    await alert.present();
  }

  deleteCasos(id:number, index: number) {
    this.caso_sevice.deleteCasos(id)
    .subscribe((id) => {
      this.casos.splice(index, 1);
      this.presentToast('Su tarea fue eliminada correctamente');
    });
  }




  updateCasos(){
    const casos ={
      id:1,
      nombre:"string12",
      descripcion:"string12",
      fecha:new Date(),
      c_profesional_id:1,
      t_usuario_id:1,
      c_estado_id:1
      
  
    };
    
    this.caso_sevice.updateCasos(casos).subscribe(todo=>{
    
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