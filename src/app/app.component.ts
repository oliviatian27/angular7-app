import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  choices = [
   '[Choice A]',
   '[Choice B]',
   '[Choice C]',
   '[Choice D]',
 ];

 drop(event: CdkDragDrop<string[]>) {
   moveItemInArray(this.choices, event.previousIndex, event.currentIndex);
 }

 handleAdd(){
   this.choices.push('[Add new choices]')
 }
 handleDelete(i){
   this.choices.splice(i,1)
 }
}
