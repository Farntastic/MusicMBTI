import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title: string = '';
  @Input() artist: string = '';
  @Input() imageUrl: string = '';

  @Output() albumClicked = new EventEmitter<string>(); // ส่งชื่ออัลบั้มเมื่อมีการคลิก

  // ฟังก์ชันที่จะส่งข้อมูลอัลบั้มกลับไปยังคอมโพเนนต์หลัก
  onCardClick() {
    this.albumClicked.emit(this.title); // ส่งชื่ออัลบั้มที่ถูกคลิก
  }
}
