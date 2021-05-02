import { AbstractControl } from '@angular/forms'
export class MyValidators {
    static isPriceValid(control: AbstractControl){
        const value = control.value;
        console.log(value); 
        if (value > 100000) {
            return {price_invalid: true};
        } else {
            return null;
        }
    }
}