import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  recensions = [
    {
      title: 'Awesome tool!',
      text: 'Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl.',
      stars: '⭐⭐⭐⭐⭐',
      img: 'https://media.istockphoto.com/id/1437816897/it/foto/ritratto-di-donna-daffari-manager-o-risorse-umane-per-il-successo-professionale-azienda-che.webp?b=1&s=170667a&w=0&k=20&c=p4Nx_izWqJl_wkwSC9DCdk4nobJE1ySoZk5ocwycTfg=',
      name: 'Olivia Wilson',
      description: 'Founder of Borcelle',
    },
    {
      title: 'Super cool!',
      text: 'Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl.',
      stars: '⭐⭐⭐⭐⭐',
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm90byUyMHByb2ZpbG98ZW58MHx8MHx8fDA%3D',
      name: 'Matt Zhang',
      description: 'CEO at Borcelle',
    },
    {
      title: 'Awesome tool!',
      text: 'Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl.',
      stars: '⭐⭐⭐⭐⭐',
      img: 'https://media.istockphoto.com/id/181884482/it/foto/pronto-a-salire-la-scala-aziendale.jpg?s=612x612&w=0&k=20&c=2DctYgh7k0udbHLx0vnEGyy-F9Ng9Ej8P7Dp3VHGoPI=',
      name: 'Hannah Morales',
      description: 'CEO at Borcelle',
    },
  ];

  constructor(private router: Router) {}

  clickName(recension: any) {
    if (recension.name === 'Olivia Wilson') {
      this.router.navigate(['/center']);
    }
  }
}
