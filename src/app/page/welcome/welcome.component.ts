
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { GalleriaModule } from 'primeng/galleria';
import { SplitterModule } from 'primeng/splitter'
import { ThemeService } from './../../services/theme.service';
@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [ButtonModule, CardModule, PanelModule, GalleriaModule, SplitterModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  displayBasic = false;
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
    { url: 'assets/imgGalleria1.png', alt: 'imgcont1' },
    { url: 'assets/imgGalleria2.png', alt: 'imgcont2' },
    //{ url: 'assets/imgGalleria3.jpg', alt: 'imgcont3' },
    { url: 'assets/imgGalleria4.png', alt: 'imgcont4' },
    //{ url: 'assets/imgGalleria5.jpg', alt: 'imgcont5' },
  ];

  showFullscreen() {
    this.displayBasic = true;
  }
  toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
  constructor(public themeService: ThemeService) {}

}
