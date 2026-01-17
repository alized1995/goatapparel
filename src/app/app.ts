import { Component, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common'; // Import isPlatformBrowser
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { ProductListComponent } from './components/product-list/product-list';
import { FooterComponent } from './components/footer/footer';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent, HeroComponent, ProductListComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  title = 'goatapparel';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private meta: Meta,
    private titleService: Title
  ) {
    // SEO Logic
    this.titleService.setTitle('GOAT Apparel | Premium Denim');
    this.meta.addTags([
      { name: 'description', content: 'Discover the new standard in premium denim. Crafted for comfort, designed for style. GOAT Apparel - Redefining fashion in Pakistan.' },
      { name: 'keywords', content: 'denim, jeans, fashion, premium, goat apparel, pakistan, clothing' },
      { property: 'og:title', content: 'GOAT Apparel | Premium Denim' },
      { property: 'og:description', content: 'Redefining denim for the modern generation.' },
      { property: 'og:image', content: 'https://alized1995.github.io/goatapparel/assets/images/brand-feature.jpg' },
      { property: 'og:url', content: 'https://alized1995.github.io/goatapparel/' },
      { name: 'robots', content: 'index, follow' }
    ]);
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Initialize IntersectionObserver only in the browser
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
          }
        });
      }, {
        threshold: 0.1
      });

      document.querySelectorAll('[data-aos]').forEach(element => {
        observer.observe(element);
      });
    }
  }
}
