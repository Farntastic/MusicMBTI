import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-albumartist',
  templateUrl: './albumartist.component.html',
  styleUrls: ['./albumartist.component.css']
})
export class AlbumartistComponent implements OnInit {
  albumName: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // ดึงชื่ออัลบั้มจากพารามิเตอร์ของเส้นทาง
    this.albumName = this.route.snapshot.paramMap.get('albumName');
    console.log(this.albumName); // ตรวจสอบว่าชื่ออัลบั้มถูกดึงมาอย่างถูกต้อง
  }
}
