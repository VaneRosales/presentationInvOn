
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';
import { GalleriaModule } from 'primeng/galleria';
import { ThemeService } from './../../services/theme.service';
@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [ButtonModule, CardModule, PanelModule, DividerModule, GalleriaModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  title = 'Sistema de Inventario en Línea (InvOn)';
  description = 'Control de inventario electrónico de mercancías en Puerto de Acajutla. Unión Portuaria del Pacifico En cumplimiento a las Disposiciones Administrativas de Carácter General DACG DGA. 009-2024 - Anexo II Control de mercancías en abandono - Anexo IV Control de destinación de mercancías en depósito temporal - Anexo VI Control de vehículos en abandono';

  activeIndex: number = 0;
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',  // Para pantallas con ancho menor a 1024px
      numVisible: 3,         // Muestra 3 imágenes
      numScroll: 1           // Desplaza 1 imagen a la vez
    },
    {
      breakpoint: '768px',   // Para pantallas con ancho menor a 768px
      numVisible: 2,         // Muestra 2 imágenes
      numScroll: 1           // Desplaza 1 imagen a la vez
    },
    {
      breakpoint: '560px',   // Para pantallas con ancho menor a 560px
      numVisible: 1,         // Muestra 1 imagen
      numScroll: 1           // Desplaza 1 imagen a la vez
    }
  ];

  imagenes = [
    { url: 'assets/buque.jpg', alt: 'imgcont1' },
    { url: 'assets/contenedor.jpg', alt: 'imgcont2' },
    { url: 'assets/inventario.jpg', alt: 'imgcont3' }
  ];

  toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
  constructor(public themeService: ThemeService) {}

}
