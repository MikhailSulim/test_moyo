// Api для получения информации о местоположении пользователя
import { GEOLOCATION_API_URL } from './constants.ts';

class GeoApi {
  private _serverUrl: string;
  private _headers: { [key: string]: string };

  constructor({ serverUrl, headers }: { serverUrl: string, headers: { [key: string]: string } }) {
    this._serverUrl = serverUrl;
    this._headers = headers;
  }

  private _checkResponse(res: Response) {
    return res.ok ? res.json() : Promise.reject(`${res.status} ${res.statusText}`);
  }

  private _request(url: string, options: RequestInit) {
    return fetch(url, options).then(this._checkResponse);
  }

  getCity() {
    return this._request(this._serverUrl, {
      method: 'GET',
      headers: this._headers,
    });
  }
}

const geoApi = new GeoApi({
  serverUrl: GEOLOCATION_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default geoApi;
