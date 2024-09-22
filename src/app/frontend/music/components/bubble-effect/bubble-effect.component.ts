import { Component, OnInit, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-bubble-effect',
  templateUrl: './bubble-effect.component.html',
  styleUrls: ['./bubble-effect.component.css']
})
export class BubbleEffectComponent implements OnInit {
  bubbles: any[] = [];

  constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.createBubbles();
    }
  }

  createBubbles() {
    for (let i = 0; i < 50; i++) {
      const size = `${Math.random() * 5 + 2}px`; // ขนาดฟองน้ำ
      const top = `${Math.random() * 100}vh`; // ตำแหน่งเริ่มต้น Y
      const left = `${Math.random() * 100}vw`; // ตำแหน่งเริ่มต้น X

      this.bubbles.push({
        size,
        top,
        left,
        animationDuration: `${Math.random() * 12 + 5}s`, // ระยะเวลาแอนิเมชันสุ่ม
        animationDelay: `${Math.random() * 6}s`, // การหน่วงเวลาแอนิเมชันสุ่ม
        animationName: `float${i}` // ชื่อแอนิเมชันเฉพาะฟองน้ำ
      });

      this.addKeyframes(i, size); // เพิ่ม keyframes สำหรับแต่ละฟองน้ำ
    }
  }

  addKeyframes(index: number, size: string) {
    if (isPlatformBrowser(this.platformId)) {
      const styleSheet = document.styleSheets[0] as CSSStyleSheet;

      const keyframes = `
        @keyframes float${index} {
          0% {
            transform: translateY(0) scale(1);
            left: ${Math.random() * 100}vw;
            top: ${Math.random() * 100}vh;
          }
          50% {
            transform: translateY(${Math.random() * 50}px) scale(${Math.random() * 1.5 + 1});
            left: ${Math.random() * 100}vw;
            top: ${Math.random() * 100}vh;
          }
          100% {
            transform: translateY(0) scale(1);
            left: ${Math.random() * 100}vw;
            top: ${Math.random() * 100}vh;
          }
        }
      `;

      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    }
  }
}
