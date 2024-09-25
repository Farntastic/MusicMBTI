import { Component, OnInit, ViewChild, ElementRef, HostListener, Input } from '@angular/core';
import { MBTIService } from '../../services/mbti.service';
import { Mbti } from '../../interface/mbti.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-mbti',
  templateUrl: './card-mbti.component.html',
  styleUrls: ['./card-mbti.component.css']
})
export class CardMbtiComponent implements OnInit {
  MBTi: Mbti[] = [];
  
  @Input() isMbtiPage: boolean = false; // รับค่า isMbtiPage เพื่อแสดงผลเฉพาะในหน้า MBTI

  @ViewChild('carousel') carousel!: ElementRef;

  constructor(private mbtiService: MBTIService, private router: Router) { }

  ngOnInit(): void {
    this.getAllmbti();
  }

  goToPlaylist(mbti: string) {
    this.router.navigate(['MBTI/${id}', mbti]);
  }

  getAllmbti() {
    this.mbtiService.getAllmbti().subscribe((res: any) => {
      res.forEach((item: any) => {
        let data = {
          id: item.id,
          mbti: item.mbti,
          description: item.description,
          img: item.img
        };
        this.MBTi.push(data);
      });
    });
  }

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent): void {
    event.preventDefault();
    const carouselElement = this.carousel.nativeElement;
    carouselElement.scrollLeft += event.deltaY;
  }

  scrollLeft() {
    if (this.carousel) {
      console.log('Scrolling left');
      this.carousel.nativeElement.scrollBy({ left: -500, behavior: 'smooth' });
    } else {
      console.error('Carousel element not found');
    }
    
  }
  scrollRight() {
    if (this.carousel) {
      console.log('Scrolling right');
      this.carousel.nativeElement.scrollBy({ left: 500, behavior: 'smooth' }); // แก้ไขที่นี่
    } else {
      console.error('Carousel element not found');
    }
  }
  
}
