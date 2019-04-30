import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeFilter',
})
export class FilterPipe implements PipeTransform{
  transform(videos, value) {
    return videos.filter( video => {
      return video.snippet.title.toLowerCase().includes(value)
    })
  }
}
