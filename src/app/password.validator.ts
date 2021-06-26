import { AbstractControl } from "@angular/forms";

export function passValidators(control: AbstractControl): { [key : string] : any} | null {
    const valid = /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/.test(control.value);
    console.log(control.value);
    return valid ? null : { 'validPass': {value: control.value}};
}