import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Item } from './item';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items = [

      // items
      { id: 0, name: '0', headline: 'Ocean Beach', description: 'Description 0',
      image: 'waves-at-ocean-beach.jpg', cta: 'call to action', url: 'url 0' },
      { id: 1, name: '1', headline: 'La Jolla Cove', description: 'Description 1',
      image: 'wave-at-la-jolla-cove.jpg', cta: 'call to action' , url: 'url 1'},
      { id: 2, name: '2', headline: 'Big Rocks', description: 'Description 2',
      image: 'wave-breaking-on-big-rocks.jpg', cta: 'call to action', url: 'url 2' },
      { id: 3, name: '3', headline: 'Wave Break', description: 'Description 3',
      image: 'wave-breaking-on-oceans-beach.jpg', cta: 'call to action', url: 'url 3' },
      { id: 4, name: '4', headline: 'Point Loma', description: 'Description 4',
      image: 'wave-near-point-loma.jpg', cta: 'call to action', url: 'url 4' },
      { id: 5, name: '5', headline: 'Jetty', description: 'Description 5',
      image: 'waves-and-surfers-near-the-jetty-in-ocean-beach.jpg', cta: 'call to action', url: 'url 5'  },
      { id: 6, name: '6', headline: 'Waves', description: 'Description 6',
      image: 'waves.jpg', cta: 'call to action', url: 'url 6'  },
      { id: 7, name: '7', headline: 'Pier Beach', description: 'Description 7',
      image: 'waves-breaking-on-pier-on-beach.jpg', cta: 'call to action', url: 'url 7'  },
      { id: 8, name: '8', headline: 'Pier', description: 'Description 8',
      image: 'waves-breaking-on-pier.jpg', cta: 'call to action', url: 'url 8'  },
];

    return {items};
  }

  // Overrides the genId method to ensure that a item always has an id.
  // If the items array is empty,
  // the method below returns the initial number (11).
  // if the items array is not empty, the method below returns the highest
  // id id + 1.
  genId(items: Item[]): number {
    return items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;
  }
}
