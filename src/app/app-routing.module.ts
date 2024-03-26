import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { TrayectoriaComponent } from './componentes/trayectoria/trayectoria.component';
import { TareasComponent } from './componentes/tareas/tareas.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';

const routes: Routes = [
  { path:'principal',component:PrincipalComponent,},

  {path:'trayectoria',component:TrayectoriaComponent},

  {path:'tareas',component:TareasComponent},

  {path:'habilidades',component:HabilidadesComponent},

  {path:'proyectos',component: ProyectosComponent},

  {path:'estudios',component: EstudiosComponent},

  {path:'',redirectTo:'principal',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
