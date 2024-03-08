import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Options } from 'src/app/utils/models/options.model';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements OnInit, ControlValueAccessor {
  @Input() options: Options[] = [];
  @Input() error: boolean = false;
  @Input() disabled: boolean = false;
  @Input() placeholder: string = '' || 'Select an option';
  @Input() hidePlaceholder: boolean = false;

  @Output() valueChanged = new EventEmitter<any>();

  selectedOption: Options | null = null;
  isCollapsed: boolean = true;

  ngOnInit() {
    if (this.options === undefined || this.options.length === 0) {
      throw new Error('Input "options" is required for app-select component.');
    }
  }

  onKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        break;
      case 'Escape':
        event.preventDefault();
        break;
    }
  }

  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(value: any): void {
    this.selectedOption = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onSelectionChange(event: any) {
    this.selectedOption = event.target.value;
    this.onChange(this.selectedOption);
    this.onTouch();
  }
}
