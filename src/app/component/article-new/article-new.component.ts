import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../common/util.service';
import { AppComponent } from '../app.component';
import { EventObj } from '@tinymce/tinymce-angular/editor/Events';
import { BackEndApi } from '../../back-end-api';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css']
})

export class ArticleNewComponent implements OnInit {

  articleTitle = null;
  articleContent = null;

  tinyMceSettings = {
    skin_url: '/assets/tinymce/skins/ui/oxide',
    content_css: '/assets/tinymce/skins/content/default/content.min.css',
    language: 'zh_CN',
    image_upload_url: BackEndApi.resources,
    emoticons_database_url: '/assets/tinymce/plugins/emoticons/js/emojis.min.js',
    min_height: 700,
    plugins: [
      'advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker',
      'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
      'save table directionality emoticons template paste'
    ],
    toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify' +
      ' | bullist numlist outdent indent | link image media | forecolor backcolor emoticons | print preview fullscreen'
  };

  constructor(
    private utilService: UtilService
  ) {
  }

  ngOnInit() {
    this.utilService.initLeftSiderStatus('article', 'new', AppComponent.self.openMap, AppComponent.self.selectMap);
  }

  onChange($event: EventObj<any>) {
    console.log(this.articleContent);
  }
}
