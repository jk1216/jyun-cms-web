import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../common/util.service';
import { AppComponent } from '../app.component';
import { TagService } from '../../service/tag.service';
import { Tag } from '../../domain/tag';

@Component({
  selector: 'app-navigation-tag',
  templateUrl: './navigation-tag.component.html',
  styleUrls: ['./navigation-tag.component.css']
})

export class NavigationTagComponent implements OnInit {

  newTagName: string;

  tags: Tag[] = [];
  sortName: string = null;
  sortValue: string = null;
  displayData = [...this.tags];

  constructor(
    private utilService: UtilService,
    private tagService: TagService
  ) {
  }

  ngOnInit() {
    this.utilService.initLeftSiderStatus('navigation', 'tag', AppComponent.self.openMap, AppComponent.self.selectMap);
    this.tagService.getTags()
      .subscribe(result => this.initTags(result));
  }

  private initTags(tags: Tag[]) {
    this.tags = tags;
    this.displayData = [...this.tags];
  }

  addNewTag(): void {
    this.tagService.addNewTag(new Tag(this.newTagName, 0))
      .subscribe(result => {
        this.initTags(result);
        this.newTagName = null;
      });
  }

  deleteTag(name: string) {
    this.tagService.deleteTag(name)
      .subscribe(result => this.initTags(result));
  }

  sort(sort: { key: string; value: string }) {
    this.sortName = sort.key;
    this.sortValue = sort.value;
    this.search();
  }

  private search() {
    const tags = [...this.tags];
    if (this.sortName && this.sortValue) {
      this.displayData = tags.sort((a, b) => (this.sortValue === 'ascend') ? (a[this.sortName] > b[this.sortName] ? 1 : -1) : (b[this.sortName] > a[this.sortName] ? 1 : -1));
    } else {
      this.displayData = tags;
    }
  }
}
