import { Component, Input } from '@angular/core';
import { ColorsIdsEnum } from 'src/app/models/colors-ids.enum';
import { ColorsNameEnum } from 'src/app/models/colors-names.enum';

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
}
