import { Component, OnInit } from '@angular/core';
import { ListeInscritService } from '../services/liste-inscrit.service';

@Component({
  selector: 'app-liste-inscrit',
  templateUrl: './liste-inscrit.component.html',
  styleUrls: ['./liste-inscrit.component.css']
})
export class ListeInscritComponent implements OnInit {
  inscrits: any;
  eventsId = localStorage.getItem('curent_event');
  constructor(
    private listeInscrit: ListeInscritService
  ) { }

  ngOnInit(): void {
    this.getListe();
  }

  getListe(){
    return this.listeInscrit.getListe(this.eventsId).subscribe(
      (res)=>{
        this.inscrits = res;
        console.log(res);

      }
    )
  }

}
