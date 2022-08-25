import { Component, OnInit } from '@angular/core';
import { EvenementsService } from '../services/evenements.service';

@Component({
  selector: 'app-events-by-user',
  templateUrl: './events-by-user.component.html',
  styleUrls: ['./events-by-user.component.css']
})
export class EventsByUserComponent implements OnInit {
  event: any;
  constructor(
    private evenementService : EvenementsService,
    
  ) { }

  ngOnInit(): void {
    this. getEventsByUser();
  }

  getEventsByUser(){
    const user_id = localStorage.getItem('auth_token');
    console.log(user_id);
    
    this.evenementService.getEvenentByUser(user_id).subscribe(
      (res)=>{
        console.log(res);
        this.event = res;
        
      }
    )
  }

  //recuperer l'id de l'evenement
  getidEvents(id: any){
    localStorage.setItem('curent_event', id);
  }
 

}
