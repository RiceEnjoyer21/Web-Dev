import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  styleUrls: ['./album-detail.component.css'],
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
  <main>
    <h1>Album Detail</h1>
    <div>
    <span>New Album title:</span>
    <input [(ngModel)]="album.title" />
    <button id="save" (click)="save()">Save</button></div>
    <button class="return-btn"(click)="goBack()">Return</button>
    <button class="photos-btn"(click)="goToPhotos()">Photos</button>
    </main>
  `
})
export class AlbumDetailComponent {
  album: any = {};

  constructor(private route: ActivatedRoute, private albumService: AlbumsService, private router: Router) {
    const id = this.route.snapshot.params['id'];
    this.albumService.getAlbum(id).subscribe(data => this.album = data);
  }

  save() {
    this.albumService.updateAlbum(this.album.id, this.album).subscribe();
  }

  goBack() {
    this.router.navigate(['/albums']);
  }

  goToPhotos() {
    this.router.navigate(['/albums', this.album.id, 'photos']);
  }
}