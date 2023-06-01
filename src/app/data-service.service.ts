import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private data: any[] = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' }
  ];

  getData(): any[] {
    return this.data;
  }

  addItem(itemName: any): number{
    const newId = this.data.length + 1;
    this.data.push({ id: newId, name: itemName});
    return newId;
    //this.newItem={}; //una vez creado y agregado al array, se limpia la variable
  }

  updateItem(item: any, tmpNewName: any): void{
    //const index = this.data.findIndex((d) => d.id === item.id);
    item.name = tmpNewName;
    item.editable = false;
    item.tmpNewName = '';
  }

  deleteItem(item: any): void{
    const index = this.data.findIndex((d) => d.id === item.id);
    if(index > -1){
      this.data.splice(index, 1);
    }
  }


  constructor() { }
}
