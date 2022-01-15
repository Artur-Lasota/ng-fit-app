import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { SettingsModel } from 'src/app/common/models/settings.model';
import { UserSettingsService } from 'src/app/shared/services';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})

@UntilDestroy()
export class SettingsComponent {

    public form!: FormGroup;
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
    public age = 29;
    public BMI = '0';
    private userInfo!: SettingsModel;

    constructor(private formBuilder: FormBuilder, private auth: AuthService, private settingsService: UserSettingsService) {
        this.createForm();
        this.settingsService.getSettings().then( x => this.userInfo = x);
        setTimeout(() => {
            this.auth.user$.pipe(untilDestroyed(this)).subscribe( userInfo => {
                this.createForm(userInfo);
                this.BMI = this.BMICalc();
                console.log(userInfo)
            });
        }, 200);
    }

    public createForm(userInfoAuth?: any): void {
        if (userInfoAuth?.sub && userInfoAuth?.sub === this.userInfo.userId) {
            this.form = this.formBuilder.group({
                weight: [this.userInfo.weight, [Validators.required, Validators.min(1)]],
                height: [this.userInfo.height, [Validators.required, Validators.min(1)]],
                gender: [this.userInfo.gender, [Validators.required]],
                birth: [this.userInfo.birth],
                fatLevel: [this.userInfo.fatLevel],
                activityLevel: [null],
                weightGoal: [null],
                weightLoseTempo: [null],
                weightGoalDate: [null],
                dailyDeficit: [null]
            });
        } else {
            this.form = this.formBuilder.group({
                weight: [null, [Validators.required, Validators.min(1)]],
                height: [null, [Validators.required, Validators.min(1)]],
                gender: [null, [Validators.required]],
                birth: [null],
                fatLevel: [null],
                activityLevel: [null],
                weightGoal: [null],
                weightLoseTempo: [null],
                weightGoalDate: [null],
                dailyDeficit: [null]
            });
        }
    }

    public BMICalc(): string {
            const weight: number = this.form.get('weight')?.value;
            const height: number = this.form.get('height')?.value;
            if (weight && height) {
                const BMI = ((weight / (height * height)) * 10000).toFixed(0);
                return BMI;
            } else { return '0'; }
    }

    public BMRCalc(): string {
        let BMR;
        const weight = this.form.get('weight')?.value;
        const height = this.form.get('height')?.value;
        if (this.gender) {
            BMR = (10 * weight + 6.25 * height - 5 * this.age + 5).toFixed(0);
        } else {
            BMR = (10 * weight + 6.25 * height - 5 * this.age - 161).toFixed(0);
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

    public save(): void {
        console.log(this.form)
    }
}
