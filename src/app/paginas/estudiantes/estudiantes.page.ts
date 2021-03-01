import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EstudiantesService } from 'src/app/Servicios/estudiantes.service';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { Estudiantes } from '../../Servicios/estudiantes';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.page.html',
  styleUrls: ['./estudiantes.page.scss'],
})
export class EstudiantesPage implements OnInit {

  constructor(public http : HttpClient,
    private estudiantes_service:EstudiantesService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,private loadingCtrl: LoadingController) { }

  ngOnInit() {
   this.getEstudiantes();
  }

  estudiantes: any=[];
  
  
  getEstudiantes(){


    this.estudiantes_service.getEstudiantes()
    .subscribe(r => {
      console.log(r.data);

  this.estudiantes= r.data;
     
    } );

  }
  
    

  createEstudiante(  
    c_clinica_id:number, 
    c_profesional_id:number, 
    nombre:string,
    telefono :string ,
    correo :string ,
    localidad:string,
    
    
    ) {
    const estudiante = {
      c_clinica_id, 
    c_profesional_id, 
    nombre,
    telefono, 
    correo ,
    localidad
      
  
    };
    this.estudiantes_service.createEstudiante(estudiante)
    .subscribe((newestado) => {
      this.estudiantes.unshift(newestado);
    });
   
  }



  async openAlert() {
    const alert = await this.alertCtrl.create({
      header: 'nuevo estudiante!',
      inputs: [
        {
          name: 'c_clinica_id',
          type: 'number',

          placeholder: 'aqui el c_tipo_id'
        },{

name:'c_profesional_id',
type:'number',
placeholder:'aqui el profesional'


        },{

          name:'nombre',
          type:'text',
          placeholder:'aqui el nombre'
          
          
                  },{

                    name:'telefono',
                    type:'text',
                    placeholder:'aqui  el telefono'
                    
                    
                            },{

                              name:'correo',
                              type:'text',
                              placeholder:'aqui  el telefono'
                              
                             },{

                              name:'localidad',
                              type:'text',
                              placeholder:'introduzca la localidad'
                              
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
          this.createEstudiante(data.c_clinica_id,data.c_profesional_id,data.nombre,data.telefono,data.correo,data.localidad)
      

          }
        }
      ]
    });
    await alert.present();
  }

  deleteEstudiante(id:number, index: number) {
    this.estudiantes_service.deleteEstudiante(id)
    .subscribe((id) => {
      this.estudiantes.splice(index, 1);
      this.presentToast('Su tarea fue eliminada correctamente');
    });
  }



  updateEstudiantes(){
    const estudiante ={
      id:3,
      c_clinica_id:1, 
    c_profesional_id:1, 
    nombre:'no se',
    telefono:'95154455', 
    correo:'ale@gmail.com' ,
    localidad:'mexico'
      
  
    };
    
    this.estudiantes_service.updateEstudiantes(estudiante).subscribe(todo=>{
    
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
