import { Component, Input } from '@angular/core';
import { DiceStatusEnum } from 'src/app/models/dice-status.enum';
import { DiceGroup } from 'src/app/models/dice.interface';
import { DicesService } from 'src/app/services/dices.service';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss'],
})

export class DiceComponent {

  @Input() diceGroup!: DiceGroup

  opcionesSelect: number[];
  showResults: boolean = false;

  constructor(private dicesServices: DicesService) {
    this.opcionesSelect = this.arrayOpciones(1, 8);
  }

  /**
   * Modifica el valor de un solo dado
   */
  rollDice(i: number) {
    //obtener el nuevo valor de dado y modificar el valor del dado a REROOLLED
    // Dice si existe el objeto de dados? si existe pregunta si existe el objeto de dados con la posicion de i
    if (this.diceGroup.dices && this.diceGroup.dices[i]) {
      // le asigno del servicio el metodo para devolverle un numero random a los valores de los dados de la posicion i
      this.diceGroup.dices[i].value = this.dicesServices.getRandomNumber();
      // Si el estado de los dados de en la posicion i es igual a ROLLED o es igual a RERROLLED
      if (this.diceGroup.dices[i].status === DiceStatusEnum.ROLLED || this.diceGroup.dices[i].status === DiceStatusEnum.RERROLLED) {
        //El estado va a ser RERROLLED
        this.diceGroup.dices[i].status = DiceStatusEnum.RERROLLED;
      } else {
        //Sino va a ser RERROLLED_AND_MODIFIED
        this.diceGroup.dices[i].status = DiceStatusEnum.RERROLLED_AND_MODIFIED;
      }
      console.log(this.diceGroup.dices[i].status);
    }
    this.showResults = true;
  }

  //Modifico el valor del select a MODIFIED
  clickOpcionDice(i: number) {
    //Veo si existen dados y si existen dados con la posicion de i
    if (this.diceGroup.dices && this.diceGroup.dices[i]) {
      //Si el estado del dado es ROLLED o MODIFIED
      if (this.diceGroup.dices[i].status === DiceStatusEnum.ROLLED || this.diceGroup.dices[i].status === DiceStatusEnum.MODIFIED) {
        //Le asigno el valor del estado de MODIFIED
        this.diceGroup.dices[i].status = DiceStatusEnum.MODIFIED
        console.log(this.diceGroup.dices[i].status);
        //Si el estado no es igual a los estados anteriores, va a tomar el estado de RERROLLED_AND_MODIFIED
      } else {
        this.diceGroup.dices[i].status = DiceStatusEnum.RERROLLED_AND_MODIFIED
        console.log(this.diceGroup.dices[i].status);
      }
    }
  }

  //Metodo para la cantidad de opciones que tiene el select
  arrayOpciones(min: number, max: number) {
    let numeros = [];
    for (let i = min; i <= max; i++) {
      numeros.push(i);
    }
    return numeros;
  }
}