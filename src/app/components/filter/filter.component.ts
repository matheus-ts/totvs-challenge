import { Component, OnInit } from '@angular/core';
import { optionsMock } from 'src/app/utils/mock';
import { Options } from 'src/app/utils/models/options.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  test: string = '';
  checked: boolean = false;

  checkedDisabled: boolean = false;
  checkedWithoutLabel: boolean = false;

  options: Options[] = [];
  optionsDisabled: Options[] = [];

  ngOnInit(): void {
    this.options = optionsMock;

    this.optionsDisabled = optionsMock.map((option) => {
      const disabled = parseInt(option.value) % 2 !== 0;
      return { ...option, disabled };
    });
  }

  valueChangedSwitch(event: any) {
    console.log(this.checked);
  }

  changeValue(event: any) {
    console.log(this.test);
  }
}
