import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  currentItem:any;
  onDragStart(item:any){
    console.log('onDragStart');
    this.currentItem=item;

  }
  
  onDrop(event:any, status:string)
  {
    console.log('onDrop');
  }

  onDragOver(event:any){
    console.log('onDragOver');
    event.preventDefult();
  }
}
