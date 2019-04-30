import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  video: [];
  show: boolean = false;
  link: string;

  constructor(private route: ActivatedRoute,
              private search: SearchService,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getInformation(id);
    this.link = `http://www.youtube.com/embed/${id}?rel=0" allowfullscreen=`;

  }

  videoUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.link);
  }

  getInformation(id: string) {
    this.search.getInfo(id).subscribe(data => {
      this.video = data['items'][0];
      this.show = true;
    })
  }

}
