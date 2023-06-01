import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-reader',
  templateUrl: './file-reader.component.html',
  styleUrls: ['./file-reader.component.css']
    
})
export class FileReaderComponent {
  fileContent: string = '';

  constructor(private http: HttpClient) { }

  onFileSelected(event: any): void {
    const files: FileList = event.target.files;
    if (files && files.length > 0){
      const file = files.item(0);
    }
  }

  readFile(): void {
    this.http.get('path/to/file.txt', { responseType: 'text' })
      .subscribe(
        data => {
          this.fileContent = data;
        },
        error => {
          console.error('Error reading file:', error);
        }
      );
  }
}
