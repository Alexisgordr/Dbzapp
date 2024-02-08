import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [];

  addCharacter(character: Character): void{
    const newCharacter: Character={id: uuid(), ...character };



    this.characters.push(newCharacter);



  }

  deleteCharacterById(id: string){
    this.characters = this.characters.filter(character => character.id !== id);
  }




}
