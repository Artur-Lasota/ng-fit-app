import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Constants } from '../../common/constants';
import { CustomHttpParamEncoder } from './param-encoder';
@Injectable()
export class FitAppService {

    constructor(protected readonly httpClient: HttpClient) {
    }

    protected async get<T>(url: string, params?: any): Promise<T> {
        url = Constants.api.baseUrl + url;
        if (params) {
            return await this.httpClient.get<T>(url, { params }).toPromise<T>();
        }
        return await this.httpClient.get<T>(url).toPromise<T>();
    }

    protected getObservable<T>(url: string, params?: any): Observable<T> {
        url = Constants.api.baseUrl + url;
        if (params) {
            return this.httpClient.get<T>(url, { params });
        }
        return this.httpClient.get<T>(url);
    }

    protected getObservableEncode<T>(url: string, params?: any): Observable<T> {
        url = Constants.api.baseUrl + url;
        if (params) {
            return  this.httpClient.get<T>(url, {
                params: Object.entries(params).reduce((paramsEl, [key, value]) => paramsEl.set(key, value as any),
                new HttpParams({ encoder: new CustomHttpParamEncoder() }))
            });
        }
        return this.httpClient.get<T>(url);
    }

    protected postObservable<T>(url: string, params: any, headers?: any): Observable<T> {
        url = Constants.api.baseUrl + url;
        if (!headers) {
            headers = new HttpHeaders().set('Content-Type', 'application/json');
        }
        return this.httpClient.post<T>(url, params, { headers });
    }

    protected async post<T>(url: string, params: any, headers?: any): Promise<T> {
        url = Constants.api.baseUrl + url;
        if (!headers) {
            headers = new HttpHeaders().set('Content-Type', 'application/json');
        }
        return await this.httpClient.post<T>(url, params, { headers }).toPromise();
    }

    protected async put<T>(url: string, params: any, headers?: any): Promise<T> {
        url = Constants.api.baseUrl + url;
        if (!headers) {
            headers = new HttpHeaders().set('Content-Type', 'application/json');
        }
        return await this.httpClient.put<T>(url, params, { headers }).toPromise();
    }

    protected async patch<T>(url: string, params: any, headers?: any): Promise<T> {
        url = Constants.api.baseUrl + url;
        if (!headers) {
            headers = new HttpHeaders().set('Content-Type', 'application/json');
        }
        return await this.httpClient.patch<T>(url, params, { headers }).toPromise();
    }

    protected async delete<T>(url: string, params: any): Promise<T> {
        url = Constants.api.baseUrl + url + '/' + params;
        return await this.httpClient.delete<T>(url).toPromise();
    }
}
