import { Component, OnInit, OnDestroy, ChangeDetectorRef, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent implements OnInit, OnDestroy {
  products = [
    {
      id: 1,
      name: 'Slim Fit Dark Wash',
      price: '$89.00',
      image: 'assets/images/product-slim.png'
    },
    {
      id: 2,
      name: 'Classic Straight Blue',
      price: '$79.00',
      image: 'assets/images/product-classic.png'
    },
    {
      id: 3,
      name: 'Distressed Black Street',
      price: '$99.00',
      image: 'assets/images/product-distressed.png'
    },
    {
      id: 4,
      name: 'Relaxed Light Wash',
      price: '$85.00',
      image: 'assets/images/product-relaxed.png'
    }
  ];

  /* Carousel Logic */
  itemsPerSlide = 3; // Default for desktop
  currentIndex = 0;
  private intervalId: any;
  private isBrowser: boolean;

  selectedProduct: any = null;

  constructor(
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.checkScreenSize();
      window.addEventListener('resize', () => this.checkScreenSize());
      this.startAutoSlide();
    }
  }

  ngOnDestroy() {
    this.stopAutoSlide();
    if (this.isBrowser) {
      window.removeEventListener('resize', () => this.checkScreenSize());
    }
  }

  openPreview(product: any) {
    this.selectedProduct = product;
    this.stopAutoSlide();
    this.cdr.detectChanges();
  }

  closePreview() {
    this.selectedProduct = null;
    this.startAutoSlide();
    this.cdr.detectChanges();
  }

  checkScreenSize() {
    if (this.isBrowser) {
      if (window.innerWidth < 768) {
        this.itemsPerSlide = 1;
      } else {
        this.itemsPerSlide = 3;
      }
      this.cdr.detectChanges(); // Update view
    }
  }

  get transformStyle() {
    const percentage = 100 / this.itemsPerSlide;
    return `translateX(-${this.currentIndex * percentage}%)`;
  }

  next() {
    // If we have N items and show K items, max index is N - K
    // But to loop seamlessly, we just reset.
    // For simple infinite loop via reset:
    if (this.currentIndex < this.products.length - this.itemsPerSlide) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Go back to start
    }
    this.cdr.detectChanges();
    this.resetTimer();
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.products.length - this.itemsPerSlide;
    }
    this.cdr.detectChanges();
    this.resetTimer();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.next(); // Use next() which handles the loop
    }, 3000);
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  resetTimer() {
    this.stopAutoSlide();
    this.startAutoSlide();
  }
}
