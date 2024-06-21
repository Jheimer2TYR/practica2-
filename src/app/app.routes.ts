import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { InicioComponent } from './components/inicio/inicio.component';
//import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: 'app/inicio', component: InicioComponent },
  { path: 'acercade', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
