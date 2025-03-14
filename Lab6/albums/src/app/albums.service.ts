import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AlbumsService {
  private api = 'http://localhost:3002/albums';

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>(this.api);
  }

  getAlbum(id: number): Observable<any> {
    return this.http.get<any>(`${this.api}/${id}`);
  }


  getAlbumPhotos(id: number): Observable<string[]> {
    return this.http.get<any>(`${this.api}/${id}`).pipe(
      map(album => album.photos)
    );
  }

  updateAlbum(id: number, album: any): Observable<any> {
    return this.http.put<any>(`${this.api}/${id}`, album);
  }

  deleteAlbum(id: number): Observable<any> {
    return this.http.delete<any>(`${this.api}/${id}`);
  }
}