import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-mode-com',
  templateUrl: './mode-com.component.html',
  styleUrls: ['./mode-com.component.css']
})
export class ModeComComponent implements OnInit {

  constructor( public dataService: DataService) { }

  ngOnInit(): void {
  }

}
