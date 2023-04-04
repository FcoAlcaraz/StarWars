import { Component } from '@angular/core';
import { Character } from '../../../shared/Interfaces/characterInterface';
import { CharactersService } from '../../../shared/services/characters.service';

@Component({
  standalone: true,
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent {
  character: Character[];

  constructor(private characterService: CharactersService) {}

  getAllCharacters() {}

  getCharacterById(id: number) {
    this.characterService.getCharacter(id).subscribe((data: any) => {
      this.character = data;
    });
  }

  getCharacterByUrl(Url: string) {
    this.characterService.getCharacterByUrl(Url).subscribe((data: any) => {
      this.character = data;
    });
  }
}
