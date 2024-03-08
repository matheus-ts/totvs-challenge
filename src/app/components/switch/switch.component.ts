import {
  Component,
  EventEmitter,
  Input,
  Output,
  forwardRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true,
    },
  ],
})
export class SwitchComponent {
  @Input() disabled: boolean = false;

  @Input() hasLabel: boolean = false;
  @Input() labelChecked: string = '';
  @Input() labelUnchecked: string = '';

  @Output() changeValue = new EventEmitter<any>();

  check: boolean | null = false;

  onChange: any = () => {};
  onTouch: any = () => {};

  onKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'Enter':
        event.preventDefault();
        this.check = !this.check;
        this.onChange(this.check);
        this.onTouch();
        console.log(this.check);
        this.changeValue.emit(this.check);
        break;
      case 'Escape':
        event.preventDefault();
        break;
    }
  }

  writeValue(value: any): void {
    this.check = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  toggle(event: any) {
    if (event instanceof KeyboardEvent && event.key === 'Enter') {
      event.preventDefault();
      this.check = !this.check;
    } else {
      this.check = event.target.checked;
    }
    this.onChange(this.check);
    this.onTouch();
    this.changeValue.emit(this.check);
  }
}
