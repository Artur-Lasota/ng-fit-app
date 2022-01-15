import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/common/constants';
import { SettingsModel } from 'src/app/common/models/settings.model';
import { FitAppService } from '../fit-app.service';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService extends FitAppService {

  constructor(protected readonly httpClient: HttpClient) {
    super(httpClient);
  }

  public async getSettings(): Promise<SettingsModel> {
      return await this.get<SettingsModel>(`${Constants.api.settings}`);
  }
}
