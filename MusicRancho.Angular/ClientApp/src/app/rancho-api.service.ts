import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse } from './rancho/responses/api-response';

@Injectable({
  providedIn: 'root'
})
export class RanchoApiService {
  private apiEndpoint = "https://localhost:7001";

  constructor(
    private httpClient: HttpClient
  ) { }

  // RanchoAPI

  getRanchos(): Observable<APIResponse> {
    return this.httpClient.get<APIResponse>(`${this.apiEndpoint}/api/v1/ranchoAPI`);
  }

  // TODO: método para adicionar un nuevo rancho.

  // TODO: método para obtener un rancho por ID.

  // TODO: método para actualizar un rancho.

  // TODO: método para eliminar un rancho.

  // RanchoNumberAPI

  getRanchoNumbers(): Observable<APIResponse> {
  return this.httpClient.get<APIResponse>(`${this.apiEndpoint}/api/v1/ranchoNumberAPI`);
  }

  // TODO: método para adicionar un nuevo rancho.

  // TODO: método para obtener un rancho por ID.

  // TODO: método para actualizar un rancho.

  // TODO: método para eliminar un rancho.
}
