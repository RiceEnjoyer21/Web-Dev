import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsService } from '../albums.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  standalone: true,
  styleUrls: ['./albums.component.css'],
  imports: [CommonModule],
  template: `
   <h1>Albums</h1>
<ul>
  <li *ngFor="let album of albums" (click)="goToDetail(album.id)" class="album-item">
    <div class="image-container">
      <img [src]="album.photos[0]" alt="thumbnail">
      <button class="delete-btn" (click)="deleteAlbum(album.id, $event)">✖</button>
    </div>
    <span> {{ album.title }}</span>
  </li>
</ul>

  `
})
export class AlbumsComponent {
  albums: any[] = [];
  constructor(private albumService: AlbumsService, private router: Router) {
    this.albumService.getAlbums().subscribe(data => this.albums = data);
  }
  goToDetail(id: number) {
    this.router.navigate(['/albums', id]);
  }
  deleteAlbum(id: number, event: Event) {
    event.stopPropagation();
    event.preventDefault();

    console.log(`Attempting to delete album with ID: ${id}`);

    this.albumService.deleteAlbum(id).subscribe(() => {
      console.log(`Album ${id} deleted.`);
      this.albums = this.albums.filter(a => a.id !== id);
    }, error => {
      console.error('Delete request failed:', error);
    });
  }

}