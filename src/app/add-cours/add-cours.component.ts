import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-cours',
  templateUrl: './add-cours.component.html',
  styleUrls: ['./add-cours.component.css']
})
export class AddCoursComponent implements OnInit {

  ckeditorContent: string = '<p>Hello CKEditor</p>';
  constructor() { }

  ngOnInit(): void {
  }

  save(data: any){
    console.log(data);
    
  }
}
