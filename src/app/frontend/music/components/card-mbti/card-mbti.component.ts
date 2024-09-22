import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-card-mbti',
  templateUrl: './card-mbti.component.html',
  styleUrls: ['./card-mbti.component.css']
})
export class CardMbtiComponent implements OnInit {
  @ViewChild('carousel') carousel!: ElementRef;
  cards: number[] = [];

  ngOnInit(): void {
    this.cards = Array.from({ length: 16 });
  }

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent): void {
    event.preventDefault();
    const carouselElement = this.carousel.nativeElement;
    carouselElement.scrollLeft += event.deltaY;
  }

  scrollLeft(): void {
    const carouselElement = this.carousel.nativeElement;
    carouselElement.scrollBy({ left: -300, behavior: 'smooth' }); // เลื่อนซ้าย
  }

  scrollRight(): void {
    const carouselElement = this.carousel.nativeElement;
    carouselElement.scrollBy({ left: 300, behavior: 'smooth' }); // เลื่อนขวา
  }

  ngAfterViewInit(): void {
    const carouselElement = this.carousel.nativeElement;

    carouselElement.addEventListener('scroll', () => {
      if (carouselElement.scrollLeft + carouselElement.clientWidth >= carouselElement.scrollWidth) {
        setTimeout(() => {
          carouselElement.scrollTo({ left: 0, behavior: 'smooth' });
        }, 300);
      }
    });
  }
}