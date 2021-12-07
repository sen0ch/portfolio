import { Component, OnInit } from '@angular/core';

interface Project {
  id: number;
  image: string;
  url: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projects: Project[] = [
    {
      id: 0,
      image: 'page.png',
      url: 'page'
    },
    {
      id: 1,
      image: 'email.png',
      url: 'email'
      },
    {
      id: 2,
      image: 'canvas-retina.png',
      url: 'canvas'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
