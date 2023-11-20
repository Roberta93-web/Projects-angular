import { Component } from '@angular/core';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css'],
})
export class CenterComponent {
  cardRecensions = [
    {
      rec: 'Functional tool with lots of flexible solutions for your business. I can’t recommend it enough. It has helped my business tremendously!',
      img: 'https://media.istockphoto.com/id/1437816897/it/foto/ritratto-di-donna-daffari-manager-o-risorse-umane-per-il-successo-professionale-azienda-che.webp?b=1&s=170667a&w=0&k=20&c=p4Nx_izWqJl_wkwSC9DCdk4nobJE1ySoZk5ocwycTfg=',
      name: 'Olivia Wilson',
      description: 'Founder of Borcelle',
    },
    {
      rec: 'Functional tool with lots of flexible solutions for your business. I can’t recommend it enough. It has helped my business tremendously!',
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm90byUyMHByb2ZpbG98ZW58MHx8MHx8fDA%3D',
      name: 'Matt Zhang',
      description: 'CEO at Borcelle',
    },
    {
      rec: 'Functional tool with lots of flexible solutions for your business. I can’t recommend it enough. It has helped my business tremendously!',
      img: 'https://media.istockphoto.com/id/181884482/it/foto/pronto-a-salire-la-scala-aziendale.jpg?s=612x612&w=0&k=20&c=2DctYgh7k0udbHLx0vnEGyy-F9Ng9Ej8P7Dp3VHGoPI=',
      name: 'Hannah Morales',
      description: 'CEO at Borcelle',
    },
  ];
}
