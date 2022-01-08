import { Component } from '@angular/core';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})

export class SettingsComponent {

    public daysList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    public monthsList: string[] = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
    public activitiesList: string[] = [
        "Brak",
        "Stacjonarna (BMR x 0.2)",
        "Lekka aktywność (BMR x 0.375)",
        "Umiarkowana aktywność (BMR x 0.5)",
        "Wysoka aktywność (BMR x 0.9)"

    ];
    public gender = true;
    public weight = 92;
    public height = 1.85;
    public age = 29;

    constructor() {
    }

    public BMICalc(): string {
        let BMI = (this.weight / (this.height * this.height)).toFixed(0);
        return BMI;
    }

    public BMRCalc(): string {
        let BMR;
        if (this.gender) {
            BMR = (10 * this.weight + 6.25 * this.height - 5 * this.age + 5).toFixed(0);
        } else {
            BMR = (10 * this.weight + 6.25 * this.height - 5 * this.age - 161).toFixed(0);
        }
        return BMR;
    }

    public activityCalc(): void {
        // switch () {
        //     case 'Oranges':
        //         console.log('Oranges are $0.59 a pound.');
        //         break;
        //     case 'Mangoes':
        //     case 'Papayas':
        //         console.log('Mangoes and papayas are $2.79 a pound.');
        //       // expected output: "Mangoes and papayas are $2.79 a pound."
        //     break;
        //     default:
        //         console.log(`Sorry, we are out of ${expr}.`);
        // }
    }
}
