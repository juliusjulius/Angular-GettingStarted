import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number = 0;
  @Output() updateTitle: EventEmitter<string> = new EventEmitter();
  cropWidth: number = 75;


  ngOnChanges(): void {
    this.cropWidth = this.rating * 75 / 5;
  }

  emitRating(){
    this.updateTitle.emit(`The rating is ${this.rating}`);
  }
}
