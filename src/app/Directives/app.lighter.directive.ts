import {
  Directive,
  Renderer2,
  ElementRef,
  OnInit,
  HostListener
} from "@angular/core";

@Directive({
  selector: "[lighter]"
})
export class Lighter implements OnInit {
  shades: string[] = ["red", "purple", "deep-purple", "cyan", "blue"];
  possibleColors = [
    "darksalmon",
    "hotpink",
    "lightskyblue",
    "goldenrod",
    "peachpuff",
    "mediumspringgreen",
    "cornflowerblue",
    "blanchedalmond",
    "lightslategrey"
  ];
  shade: string = "";
  constructor(private renderer: Renderer2, private el: ElementRef) {
    //setTimeout(() => {
    //this.pickShade();
    //}, 1000);
  }

  //@HostListener("mouseover") onClick() {

  //}

  //@HostListener("mouseenter") onMouseEnter() {
  //console.log("hello");
  //}

  @HostListener("click") onClick() {
    //setTimeout(() => {
    this.pickShade();
    //}, 1000);
  }
  ngOnInit() {}

  pickShade() {
    //console.log(Math.floor(Math.random() * this.shades.length));
    //setTimeout(function() {
    this.shade = this.possibleColors[
      Math.floor(Math.random() * this.possibleColors.length)
    ];
    this.renderer.setStyle(this.el.nativeElement, "border-color", this.shade);
    this.shade = this.possibleColors[
      Math.floor(Math.random() * this.possibleColors.length)
    ];
    this.renderer.setStyle(this.el.nativeElement, "color", this.shade);
    //}, 1000);
  }

  rollTheDiCe() {
    this.shade = this.possibleColors[
      Math.floor(Math.random() * this.possibleColors.length)
    ];
  }
}
