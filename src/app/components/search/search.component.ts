import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { debounceTime } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private search: SearchService,
              private router: Router) {
    this.initForm();
  }

  searchForm: FormGroup;
  show: boolean = false;
  videos: [];

  private initForm(){
    this.searchForm = new FormGroup({
      formInput: new FormControl(null)
    });
  }

  ngOnInit() {
    this.searchForm.valueChanges.pipe(debounceTime(1000)).subscribe(v => {
      this.onSearch(v.formInput)
     });
     if (this.search.searchValue.length !== 0) {
      this.onSearch(this.search.searchValue);
     }
  }


  onSearch(value) {
    this.search.searchValue = value;
    this.search.getVideos(value).subscribe(data => {
      this.videos = data['items'];
      this.show = true;
    })
  }

  onView(id) {
    this.router.navigate(['../info', id]);
  }

  onLike(id) {
    this.search.addFavorite(id);
  }
}
