import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favorites: Array<object> = [];
  show: boolean = false;
  filterStr: string = '';

  constructor(private search:SearchService,
              private router: Router) { }

  ngOnInit() {
    this.search.getInfo(this.search.favorites.join(',')).subscribe(data => {
      this.favorites = data['items'];
      this.show = true;
    });
  }

  onView(id) {
    this.router.navigate(['../info', id]);
  }

}
