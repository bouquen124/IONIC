import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BoletinesService } from 'src/app/Servicios/boletines.service';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { Boletines } from '../../Servicios/boletines';

@Component({
  selector: 'app-boletines',
  templateUrl: './boletines.page.html',
  styleUrls: ['./boletines.page.scss'],
})
export class BoletinesPage implements OnInit {

  constructor(public http : HttpClient,
    private boletin_service:BoletinesService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,private loadingCtrl: LoadingController) { }

  ngOnInit() {
   this.getBoletines();
  }


boletines:any[];

  getBoletines(){


    this.boletin_service.getBoletines()
    .subscribe(r => {
      console.log(r.data);

  this.boletines= r.data;
     
    } );

  }



  createBoletin(  
    c_profesional_id:number, 
    titulo:string,
    subtitulo:string ,
    contenido:string,
    autor:string
    
    
    ) {
    const boletin = {
      c_profesional_id, 
    titulo,
    subtitulo, 
    contenido,
    autor
  
    };
    this.boletin_service.createBoletin(boletin)
    .subscribe((newestado) => {
      this.boletines.unshift(newestado);
    });
   
  }

  async openAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Nuevo Boletin!',
      inputs: [
        {
          name: 'c_profesional_id',
          type: 'number',

          placeholder: 'Introfuzca el c_profesional_id'
        },{

name:'titulo',
type:'text',
placeholder:'Introduzca el titulo'


        },{

          name:'subtitulo',
          type:'text',
          placeholder:'aqui la subtitulo'
          
          
                  },{

                    name:'contenido',
                    type:'text',
                    placeholder:'Introduzca el contenido'
                    
                    
                            },{

                              name:'autor',
                              type:'text',
                              placeholder:'Introduzca el autor'
                              
                              
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
          this.createBoletin(data.c_profesional_id,data.titulo,data.subtitulo,data.contenido,data.autor)
      

          }
        }
      ]
    });
    await alert.present();
  }


  deleteBoletin(id:number, index: number) {
    this.boletin_service.deleteBoletin(id)
    .subscribe((id) => {
      this.boletines.splice(index, 1);
      this.presentToast('Su tarea fue eliminada correctamente');
    });
  }

  
  updateBoletin(){
    const boletin ={
      id:1,
      c_profesional_id:1, 
      titulo:"nuevos archivos",
      subtitulo:"dSAS" ,
      contenido:"ASSAA",
      autor:"ASSAS"
      
      
  
    };
    
    this.boletin_service.updateBoletines(boletin).subscribe(todo=>{
    
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
