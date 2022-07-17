import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-espace-user',
  templateUrl: './espace-user.component.html',
  styleUrls: ['./espace-user.component.css']
})
export class EspaceUserComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  ckeditorContent: string = '<p>Hello CKEditor</p>';

  save(data: any){
    console.log(data);
    
  }
}
