import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { SettingsModel } from 'src/app/common/models/settings.model';
import { UserSettingsService } from 'src/app/shared/services';
import dayjs from 'dayjs';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})

@UntilDestroy()
export class SettingsComponent {

    public form!: FormGroup;
    public daysList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
        16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    public monthsList: string[] = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec',
    'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
    public activitiesList: string[] = [
        'Brak',
        'Stacjonarna (BMR x 0.2)',
        'Lekka aktywność (BMR x 0.375)',
        'Umiarkowana aktywność (BMR x 0.5)',
        'Wysoka aktywność (BMR x 0.9)'

    ];
    public deficitList: string[] = [
        '250kcal',
        '500kcal',
        '750kcal',
        '1000kcal'

    ];
    public gender = true;
    public age = 29;
    public BMI = '0';
    public activityCalories = '0 kcal';
    private userInfo!: SettingsModel;

    constructor(private formBuilder: FormBuilder, private auth: AuthService, private settingsService: UserSettingsService,
                private cd: ChangeDetectorRef) {
        this.createForm();
        this.settingsService.getSettings().then( x => this.userInfo = x);
        setTimeout(() => {
            this.auth.user$.pipe(untilDestroyed(this)).subscribe( userInfo => {
                this.createForm(userInfo);
                this.BMI = this.BMICalc();
                if (userInfo?.sub && userInfo?.sub === this.userInfo.userId) {
                    this.calcWeightGoal();
                    this.form.get('weightGoal')?.valueChanges.pipe(untilDestroyed(this)).subscribe(() => this.calcWeightGoal());
                }
            });
        }, 200);
    }

    public createForm(userInfoAuth?: any): void {
        if (userInfoAuth?.sub && userInfoAuth?.sub === this.userInfo.userId) {
            this.form = this.formBuilder.group({
                weight: [this.userInfo.weight, [Validators.required, Validators.min(1)]],
                height: [this.userInfo.height, [Validators.required, Validators.min(1)]],
                gender: [this.userInfo.gender, [Validators.required]],
                dayOfBirth: [this.getDayOfBirth()],
                monthOfBirth: [this.getMonthOfBirth()],
                yearOfBirth: [this.getYearOfBirth()],
                fatLevel: [this.userInfo.fatLevel],
                activityLevel: [this.activitiesList[this.userInfo.activityLevel]],
                weightGoal: [this.userInfo.weightGoal],
                weightLoseTempo: [null],
                weightGoalDate: [null],
                dailyDeficit: [this.userInfo.dailyDeficit]
            });
        } else {
            this.form = this.formBuilder.group({
                weight: [null, [Validators.required, Validators.min(1)]],
                height: [null, [Validators.required, Validators.min(1)]],
                gender: [null, [Validators.required]],
                dayOfBirth: [null],
                monthOfBirth: [null],
                yearOfBirth: [null],
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
        return Number(BMR) < 1 ? '0' : BMR;
    }

    public activityCalc($event: any): void {
        switch ($event) {
                case 'Brak':
                    this.activityCalories = '0 kcal';
                    break;
                case 'Stacjonarna (BMR x 0.2)':
                    this.activityCalories = `${(parseInt(this.BMRCalc(), 0) * 0.2).toFixed(0)} kcal`;
                    break;
                case 'Lekka aktywność (BMR x 0.375)':
                    this.activityCalories = `${(parseInt(this.BMRCalc(), 0) * 0.375).toFixed(0)} kcal`;
                    break;
                case 'Umiarkowana aktywność (BMR x 0.5)':
                    this.activityCalories = `${(parseInt(this.BMRCalc(), 0) * 0.5).toFixed(0)} kcal`;
                    break;
                case 'Wysoka aktywność (BMR x 0.9)':
                    this.activityCalories = `${(parseInt(this.BMRCalc(), 0) * 0.9).toFixed(0)} kcal`;
                    break;
                default:
                    this.activityCalories = '0 kcal';
            }
    }

    public calcWeightGoal(): void {
        const dailyDeficit = this.convertDeficit(this.form.get('dailyDeficit')?.value);
        const weightGoal = Number(this.form.get('weightGoal')?.value);
        const weight = Number(this.form.get('weight')?.value);
        const tempo = Math.abs(Number(((weight - weightGoal) / dailyDeficit).toFixed(2)));
        const today = new Date();
        const goalDate = dayjs(today.setDate(today.getDate() + tempo * 7)).format('DD/MM/YYYY');
        this.form.get('weightLoseTempo')?.setValue(`${tempo} tygodni`);
        this.form.get('weightGoalDate')?.setValue(goalDate);
    }

    public save(): void {
        this.form.updateValueAndValidity();
        if (this.form.valid) {
            this.settingsService.postSettings(this.mapForm());
        }
    }

    private convertDeficit(deficit: string): number {
        switch (deficit) {
            case '250kcal':
                return 0.25;
            case '500kcal':
                return 0.5;
            case '750kcal':
                return 0.75;
            case '1000kcal':
                return 1;
            default:
                return 0;
        }
    }

    private mapForm(): SettingsModel {
        return {
            userId: this.userInfo.userId,
            birth: new Date(this.form.get('yearOfBirth')?.value, this.getMonthIndex(),
                this.form.get('dayOfBirth')?.value, 12),
            weight: this.form.get('weight')?.value,
            height: this.form.get('height')?.value,
            fatLevel: this.form.get('fatLevel')?.value,
            gender: this.form.get('gender')?.value,
            activityLevel: this.getActivityIndex(),
            weightGoal: this.form.get('weightGoal')?.value,
            dailyDeficit: this.form.get('dailyDeficit')?.value
        };
    }

    private getDayOfBirth(): number {
        const date: Date = new Date(this.userInfo.birth);
        return date.getDate();
    }

    private getMonthOfBirth(): string {
        const date: Date = new Date(this.userInfo.birth);
        return this.monthsList[date.getMonth()];
    }

    private getYearOfBirth(): number {
        const date: Date = new Date(this.userInfo.birth);
        return date.getFullYear();
    }

    private getMonthIndex(): number {
        return this.monthsList.findIndex( month => {
            return month === this.form.get('monthOfBirth')?.value;
        });
    }

    private getActivityIndex(): number {
        return this.activitiesList.findIndex( activity => {
            return activity === this.form.get('activityLevel')?.value;
        });
    }
}
