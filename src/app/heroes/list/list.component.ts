import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

public heroeNames: string[] = ['Spiderman','Ironan', 'Hulk', 'She Hulk', 'Thor'];
public deletedHero?: string;

borrarHeroe(): void {

  this.deletedHero = this.heroeNames.pop();
}

}
