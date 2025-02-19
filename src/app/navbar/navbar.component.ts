import { Component, AfterViewInit } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: '#navbar-example'
    });
  }
}
