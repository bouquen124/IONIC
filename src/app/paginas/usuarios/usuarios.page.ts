import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuariosService } from 'src/app/Servicios/usuarios.service';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { Usuarios } from '../../Servicios/usuarios';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  constructor(public http : HttpClient,
    private usuario_servicio:UsuariosService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,private loadingCtrl: LoadingController ) { }

  ngOnInit() {

   this.getUsuarios();
  }


  usuarios: any=[];
  
  
  getUsuarios(){


    this.usuario_servicio.getUsuarios()
    .subscribe(r => {
      console.log(r.data);

  this.usuarios= r.data;
     
    } );

  }


  createUsuario(  
    c_tipo_id :number ,
    nombre:string ,
    edad : number,
    localidad:string
    
    
    ) {
    const usuario = {
     c_tipo_id,
      nombre,  
      edad,
      localidad
      
  
    };
    this.usuario_servicio.createUsuario(usuario)
    .subscribe((newestado) => {
      this.usuarios.unshift(newestado);
    });
   
  }




  async openAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Nueva  usuario!',
      inputs: [
        {
          name: 'c_tipo_id',
          type: 'number',

          placeholder: 'aqui el c_tipo_id'
        },{

name:'nombre',
type:'text',
placeholder:'aqui la nombre'


        },{

          name:'edad',
          type:'number',
          placeholder:'aqui la edad'
          
          
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
          this.createUsuario(data.c_tipo_id,data.nombre,data.edad,data.localidad)
      

          }
        }
      ]
    });
    await alert.present();
  }



  deleteUsuarios(id:number, index: number) {
    this.usuario_servicio.deleteUsuarios(id)
    .subscribe((id) => {
      this.usuarios.splice(index, 1);
      this.presentToast('Su tarea fue eliminada correctamente');
    });
  }



  updateUsuarios(){
    const usuario ={
      id:1,
    c_tipo_id :1 ,
    nombre:"string", 
    edad : 1,
    localidad:"string"
      
  
    };
    
    this.usuario_servicio.updateUsuarios(usuario).subscribe(todo=>{
    
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
