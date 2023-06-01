import { TestBed } from '@angular/core/testing';

import { DataServiceService } from './data-service.service';

describe('DataServiceService', () => {
  let service: DataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataServiceService);
  });

  let data: any[] = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' }
  ];

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should add a new user', () => {
  //   //const newId = data.length + 1;
  //   const name: string = 'Juan';
  //   const id = service.addItem(name);
  //   const index = data.findIndex((d) => d.id === id);
  //   expect(data[index].id).toEqual(id);
  //   expect(data[index].name).toEqual(name);
  // });
});
