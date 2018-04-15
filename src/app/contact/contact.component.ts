import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import * as $ from 'jquery';

import { PreloaderService } from '../core/service/preloader.service';

@Component({
  selector: 'cip-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  titlePage: any = 'Contato, Fale Comigo - CodeInPixel';
  titlePageContent: any = 'Contato, Orçamento, Tirar Dúvidas ou uma Consultoria?';

  constructor(
    private titleService: Title,
    private meta: Meta,
    private _prealoderServ: PreloaderService
  ) {
    this.meta.updateTag({ name: 'description', content: 'Contato, Orçamento, Tirar Dúvidas ou Consultoria - CodeInPixel Studios' });
    this.meta.updateTag({ name: 'keywords', content: 'Contato, Orçamento, Dúvidas, Consultoria' });
    this.meta.updateTag({ name: 'author', content: 'CodeInPixel Studios' });
  }

  ngOnInit() {
    // Remove height: 100%; from body
    $('body, .cip_main').css('height', 'auto');
    this.titleService.setTitle(this.titlePage);
    this.linkNavigationName('Fale Comigo');
  }

  // Router Navigation
  // linkNavigation(linkTo) {
  //   this._prealoderServ.setSectionRouter({
  //     sectionRouter: linkTo,
  //     preloader: 'close'
  //   });
  // }

  linkNavigationName(linkName) {
    this._prealoderServ.setSectionRouter({
      sectionRouterName: linkName
    });
  }

}