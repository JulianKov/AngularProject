import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class SearchService {
  constructor(private httpClient: HttpClient) { }

  favorites: Array<string> = [
    "Fdf5aTYRW0E", "XWfHTLm6ECQ", "fBNz5xF-Kx4", "PkZNo7MFNFg", "PHLlnhh1sb8", "m1_ih43p24s"
  ];

  searchValue: string = '';

  getVideos(name: string) {
    return this.httpClient.get(`https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=15&regionCode=Ru&order=relevance&q=${name}`);
  }

  getInfo(id: string) {
    return this.httpClient.get(`https://www.googleapis.com/youtube/v3/videos?id=${id}&&part=snippet,statistics`);
  }

  addFavorite(id: string) {
    if (this.favorites.indexOf(id) === -1) {
      this.favorites.push(id);
    }
    console.log(this.favorites)
  }
}


