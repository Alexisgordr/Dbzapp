import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'add-character',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddCharacterComponent {
@Output()
 public  onNewCharacter: EventEmitter<Character> = new EventEmitter();

public character : Character = {
  name: '',
  power: 0
};

public add() {
  if (this.character.name.length === 0)  return;
  this.onNewCharacter.emit(this.character);
this.character = {name: '', power: 0}

  }
}
