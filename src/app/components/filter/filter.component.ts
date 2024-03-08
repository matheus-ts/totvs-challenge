import { Component, OnInit } from '@angular/core';
import { optionsMock } from 'src/app/utils/mock';
import { Options } from 'src/app/utils/models/options.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
 
  options: Options[] = []

  ngOnInit(): void {
    this.options = optionsMock
  }

}
