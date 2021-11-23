import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Item } from './item';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items = [

      // email
      { id: 0, name: '0', headline: '50% off your favorite yarn brands', description: 'Description 0', image: 'anchor.png', cta: 'call to action', url: 'url 0' },
      { id: 1, name: '1', headline: 'Brand 1', description: 'Description 1', image: 'item1.jpg', cta: 'call to action', url: 'url 1' },
      { id: 2, name: '2', headline: 'Brand 2', description: 'Description 2', image: 'item2.jpg', cta: 'call to action', url: 'url 2' },
      { id: 3, name: '3', headline: 'Brand 3', description: 'Description 3', image: 'item3.jpg', cta: 'call to action', url: 'url 3' },
      { id: 4, name: '4', headline: 'Brand 4', description: 'Description 4', image: 'item4.jpg', cta: 'call to action', url: 'url 4' },

      // canvas
      { id: 5, name: '5', headline: 'Headline 0', description: 'Description 0', image: 'waves.jpg', cta: 'call to action', url: 'url 0' },
      { id: 6, name: '6', headline: 'Luxe Leather', description: 'Description 1', image: 'sofa.png', cta: 'call to action', url: 'url 1' },
      { id: 7, name: '7', headline: 'Good Taste', description: 'Description 2', image: 'table.png', cta: 'call to action', url: 'url 2' },
      { id: 8, name: '8', headline: 'Downtown', description: 'Description 3', image: 'chairs.png', cta: 'call to action', url: 'url 3' },
      { id: 9, name: '9', headline: 'Alfresco', description: 'Description 4', image: 'outdoor.png', cta: 'call to action', url: 'url 4' },

      // page
      { id: 10, name: '10', headline: 'Headline 0', description: 'Description 0', image: 'waves.jpg', cta: 'call to action', url: 'url 0' },
      { id: 11, name: '11', headline: 'Headline 1', description: 'Description 1',
      image: 'wave-at-la-jolla-cove.jpg', cta: 'call to action' , url: 'url 1'},
      { id: 12, name: '12', headline: 'Headline 2', description: 'Description 2', image: 'wave-breaking-on-big-rocks.jpg', cta: 'call to action', url: 'url 2' },
      { id: 13, name: '13', headline: 'Headline 3', description: 'Description 3', image: 'wave-breaking-on-oceans-beach.jpg', cta: 'call to action', url: 'url 3' },
      { id: 14, name: '14', headline: 'Headline 4', description: 'Description 4',
      image: 'wave-near-point-loma.jpg', cta: 'call to action', url: 'url 4' },
      { id: 15, name: '15', headline: 'Headline 5', description: 'Description 5',
      image: 'waves-and-surfers-near-the-jetty-in-ocean-beach.jpg', cta: 'call to action', url: 'url 5'  },
      { id: 16, name: '16', headline: 'Headline 6', description: 'Description 6',
      image: 'waves-at-ocean-beach.jpg', cta: 'call to action', url: 'url 6'  },
      { id: 17, name: '17', headline: 'Headline 7', description: 'Description 7',
      image: 'waves.jpg', cta: 'call to action', url: 'url 7'  },
      { id: 18, name: '18', headline: 'Headline 8', description: 'Description 8', image: 'waves-ocean.jpg', cta: 'call to action', url: 'url 8'  },
      { id: 19, name: '19', headline: 'Headline 9', description: 'Description 9',
      image: 'waves-seen-from-the-sunset-cliffs-in-san-diego.jpg', cta: 'call to action', url: 'url 9'  },

      // canvas
      /*{ id: 10, name: '10', headline: 'Headline 0', description: 'Description 0', image: 'waves.jpg', cta: 'call to action' },
      { id: 11, name: '11', headline: 'Headline 1', description: 'Description 1', image: 'sofa.png', cta: 'call to action' },
      { id: 12, name: '12', headline: 'Headline 2', description: 'Description 2', image: 'table.png', cta: 'call to action' },
      { id: 13, name: '13', headline: 'Headline 3', description: 'Description 3', image: 'chairs.png', cta: 'call to action' },
      { id: 14, name: '14', headline: 'Headline 4', description: 'Description 4', image: 'outdoor.png', cta: 'call to action' }*/
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
