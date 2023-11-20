import { Component } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css'],
})
export class SolutionsComponent {
  reasons = [
    {
      num: '#one',
      title: 'Reliability',
      testo:
        'Lorem ipsum praesent ac massa at ligula reet﻿ est iaculis. Vivamus est mist aliquet elit ac nisl. ',
    },
    {
      num: '#two',
      title: 'Transparency',
      testo:
        'Lorem ipsum praesent ac massa at ligula reet﻿ est iaculis. Vivamus est mist aliquet elit ac nisl. ',
    },
    {
      num: '#three',
      title: 'Simplicity',
      testo:
        'Lorem ipsum praesent ac massa at ligula reet﻿ est iaculis. Vivamus est mist aliquet elit ac nisl. ',
    },
  ];
}
