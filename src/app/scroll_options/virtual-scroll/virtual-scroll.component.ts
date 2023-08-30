import { Component, OnInit,ChangeDetectionStrategy,AfterViewInit, ViewChild, NgZone } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { timer } from 'rxjs';
import { pairwise, map, filter, throttleTime } from 'rxjs/operators'

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class VirtualScrollComponent implements OnInit, AfterViewInit {
  @ViewChild(CdkVirtualScrollViewport) scroller!: CdkVirtualScrollViewport;
  title = 'scrollingOptions';
  listItems:any[] = [];
  loading:boolean = false;
constructor(private ngZone: NgZone){}
  ngOnInit(){
    this.fetchMore();
  }

  ngAfterViewInit(){
    this.scroller.elementScrolled().pipe(
      map(()=> this.scroller.measureScrollOffset("bottom")),
      pairwise(),
      filter(([y1,y2])=>(y2<y1) && (y2 < 140)),
      throttleTime(200)
    )
    .subscribe(()=>{
      this.ngZone.run(()=>{
        this.fetchMore()
      })
    })
  }
  fetchMore():void{
    const images = [
      'IuLgi9PWETU',
      'fIq0tET611w',
      'xcBWeU4ybqs',
      'YW3F-C5e8SE',
      'H900Af2TFqng'];

      const newItems:any[] = [];
      for(let i = 0; i < 400; i++){
        const randomListNumber = Math.round(Math.random() * 100)
        const randomPhotoId = Math.round(Math.random()*4);
        newItems.push({
          title:`List Item${randomListNumber}`,
          content:
          'This is some description of the list - item # ' + randomListNumber,
          image: `https://source.unsplash.com/${images[randomPhotoId]}/50x50`,
        });
      }
      this.loading = true;
      timer(1000).subscribe(()=>{
        this.loading = false;
        this.listItems = [...this.listItems, ...newItems];
      })
  }
}
