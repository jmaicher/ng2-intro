import { Directive, ElementRef, Input, Renderer } from '@angular/core';

const WATS: string[] = [
  'https://media.giphy.com/media/9ak1b5vudNnEI/giphy.gif',
  'https://media.giphy.com/media/12mPcp41D9a1i0/giphy.gif',
  'https://media.giphy.com/media/xThuW4BaAA2f7nRvoc/giphy.gif',
	'https://media.giphy.com/media/lT4sgCJwC7B4c/giphy.gif',
  'https://media.giphy.com/media/GFLcKd6MXid2M/giphy.gif'
];

@Directive({ selector: '[wat-gif]' })
export class WatGifDirective {
  constructor(el: ElementRef, renderer: Renderer) {
    let rndWat = WATS[Math.floor(Math.random() * WATS.length)];
    renderer.setElementAttribute(el.nativeElement, 'src', rndWat);
  }
}
