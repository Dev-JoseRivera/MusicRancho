import { Component, OnInit } from '@angular/core';
import { RanchoApiService } from '../rancho-api.service';

@Component({
  selector: 'app-rancho-number',
  templateUrl: './rancho-number.component.html',
  styleUrls: ['./rancho-number.component.css']
})
export class RanchoNumberComponent implements OnInit {

  constructor(
    private service: RanchoApiService
  ) { }

  ngOnInit(): void {
    this.service.getRanchoNumbers().subscribe(result => {
      console.log(result);
    });
  }

}
