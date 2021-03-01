import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { TiposService } from 'src/app/Servicios/tipos.service';
import{Tipos} from '../../Servicios/tipos'

@Component({
  selector: 'app-tipos',
  templateUrl: './tipos.page.html',
  styleUrls: ['./tipos.page.scss'],
})
export class TiposPage implements OnInit {
  tipos:any[];
  constructor(private tipo_servicee:TiposService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController) { 


    
  }

  ngOnInit() {

  this.getEstados();
    
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

name:'descripcion',
type:'text',
placeholder:'aqui la descripcion'


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
          this.createTipos(data.nombre,data.descripcion)
      

          }
        }
      ]
    });
    await alert.present();
  }


  getEstados(){


    this.tipo_servicee.getTipos()
    .subscribe(r => {
      console.log(r.data);

  this.tipos= r.data;
     
    }
  
    );

  }

  createTipos(nombre: string,descripcion:string) {
    const tipos = {
    
      nombre,
      descripcion,
  
    };
    this.tipo_servicee.createTipos(tipos)
    .subscribe((newestado) => {
      this.tipos.unshift(newestado);
    });
   
  }

  
  deleteTipos(id:number, index: number) {
    this.tipo_servicee.deleteTipos(id)
    .subscribe((id) => {
      this.tipos.splice(index, 1);
      this.presentToast('Su tarea fue eliminada correctamente');
    });

  
  }


  updateTipos(){
    const tipos ={
    
    id:4,
    nombre:'este',
    descripcion:'este es dos2'
    };
    
    this.tipo_servicee.updateTipos(tipos).subscribe(todo=>{
    
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
