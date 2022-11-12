import { Component, OnInit } from '@angular/core';
import { RanchoApiService } from '../rancho-api.service';
import { APIResponse } from './responses/api-response';

@Component({
  selector: 'app-rancho',
  templateUrl: './rancho.component.html',
  styleUrls: ['./rancho.component.css']
})
export class RanchoComponent implements OnInit {
  public response?: APIResponse;

  constructor(
    private service: RanchoApiService
  ) { }

  ngOnInit(): void {
    this.service.getRanchos().subscribe(result => {
      this.response = result;      
    });
  }

  createRancho(): void {
    console.log("Clickeado");
  }

}
