import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InicioComponent } from '../../pages/inicio/inicio.component';
import { AboutComponent } from '../../pages/about/about.component';
 


@Component({
  
  selector: 'app-navbar',
  standalone: true,
  imports: [InicioComponent,AboutComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) { }
/**
 * 
 */
  ngOnInit(): void {
    this.router.navigate(['/']);
  }
  irAcercaDe() {
    this.router.navigate(['/acerde']); // Navega a la ruta '/acerca-de' (página Acerca de)
  }

}
