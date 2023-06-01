import { Component } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent {
  data: any=[];
  newItem: any= {};

  constructor(private dataService: DataServiceService){}

  ngOnInit(): void{
    this.loadData();
  }

  loadData():void{
    this.data = this.dataService.getData();
  }

  addItem(): void{
    this.dataService.addItem(this.newItem.name);
    this.loadData();
    this.newItem.name='';

    // const newId = this.data.length + 1;
    // this.data.push({ id: newId, name: this.newItem.name});
    // this.newItem={}; //una vez creado y agregado al array, se limpia la variable
  }

  editItem(item:any):void{
    item.editable = true;
  }

  cancelEdit(item:any):void{
    item.editable = false;
  }

  updateItem(item: any, tmpNewName: any): void{
    this.dataService.updateItem(item, tmpNewName);
    this.loadData();

    // //const index = this.data.findIndex((d) => d.id === item.id);
    // item.name = tmpNewName;
    // item.editable = false;
    // item.tmpNewName = '';
  }

  deleteItem(item: any): void{
    this.dataService.deleteItem(item);
    this.loadData();
  }
}
