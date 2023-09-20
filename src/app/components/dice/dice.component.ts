import { Component, Input } from '@angular/core';
import { ColorsIdsEnum } from 'src/app/models/colors-ids.enum';
import { ColorsNameEnum } from 'src/app/models/colors-names.enum';
import { Dice } from 'src/app/models/dice.interface';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss'],
})
export class DiceComponent {
  @Input() dices!: {
    colorName: ColorsNameEnum;
    dicesValues: number[];
  };


  arrayOpciones(min: number, max: number) {
    let numeros = [];
    for (let i = min; i <= max; i++) {
      numeros.push(i);
    }
    return numeros;
  }
}
