import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./album-photos.component.css'],
  template: `
    <h1>Album Photos</h1>
    <ul>
      <li *ngFor="let photo of photos" class="photo-item">
        <img [src]="photo" alt="photo">
    </li>
    </ul>
    <button (click)="goBack()">Return</button>
  `
})
export class AlbumPhotosComponent {
  photos: any[] = [];
  constructor(private albumService: AlbumsService, private router: Router, private route: ActivatedRoute) {
    let albumId = this.route.snapshot.params['id'];
    this.albumService.getAlbumPhotos(albumId).subscribe(data => this.photos = data);
  }
  goBack() {
    this.router.navigate(['/albums']);
  }
}