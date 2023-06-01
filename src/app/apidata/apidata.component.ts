import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataobsService } from '../dataobs.service';
import { Observable } from 'rxjs'; 
import { Data } from '@angular/router';

@Component({
  selector: 'app-apidata',
  templateUrl: './apidata.component.html',
  styleUrls: ['./apidata.component.css']
})
export class APIdataComponent implements OnInit {
  data: any;
  dataobs$: Observable<any[]> = new Observable<any[]>;

  constructor(private http: HttpClient, private dataobsService: DataobsService){}

  ngOnInit(): void {
    this.fetchData();
    this.dataobs$ = this.dataobsService.getData();
    //this.dataobs$ = Object.keys(this.dataobs$).map(key => ({ key, value: this.dataobs$[key]}));
  }

  fetchData(): void{
    const apiUrl = 'https://rickandmortyapi.com/api/character'; //url
    this.http.get(apiUrl).subscribe((response) =>{
      this.data = response;
    });
  }

  formatData(): void{
    
  }


}

