import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common'

@Component({
  selector: 'app-scrolltop',
  templateUrl: './scrolltop.component.html',
  styleUrls: ['./scrolltop.component.css']
})
export class ScrolltopComponent implements OnInit {

  windowScrolled: boolean = false;
  constructor(@Inject(DOCUMENT) private document: Document) {}
  @HostListener('window:scroll', [])
  
  onWindowScroll(): void {
      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
          this.windowScrolled = true;
      }
     else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 50) {
          this.windowScrolled = false;
      }
  }
  scrollToTop(): void {
      (function smoothscroll(): void {
          const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
          if (currentScroll > 0) {
              window.scrollTo(0, currentScroll - (currentScroll));
          }
      })();
  }

  ngOnInit(): void {
  }

}
