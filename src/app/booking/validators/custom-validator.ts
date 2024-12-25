import { FormGroup } from "@angular/forms";

export class CustomValidator {

    static validateDate(control : FormGroup){

        const checkinDate : any = new Date(control.get('checkinDate')?.value);
        const checkoutDate  : any = new Date(control.get('checkoutDate')?.value);
        console.log(checkinDate,'  ',checkoutDate);
        
        const diffTime = checkoutDate-checkinDate;
        const diffDays = Math.ceil(diffTime/24*60*60*1000)
        console.log(diffTime);
        console.log(diffDays);
        if(diffDays <= 0){
            control.get('checkoutDate')?.setErrors({
                invalidDate:true
            })
            return {
                invalidDate : true
            }
        }
        
        return null;
    }
}
