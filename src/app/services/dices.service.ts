import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DicesService {


  constructor() { }

  /**
   * @returns Devuelve un número random entre 1 y 8
   */
  getRandomNumber(): number {
    return Math.floor(Math.random() * 8) + 1;
  }

  /**
   * Devuelve un array de números random
   * @param quantityOfDicesToRoll Cantidad de números random que se obtendrán
   * @returns array de números random
   */
  getRandomValues(quantityOfDicesToRoll: number): number[] {
    //obtengo un número random para cada dado
    let results = [];
    for (let i = 0; i < quantityOfDicesToRoll; i++) {
      results.push(this.getRandomNumber());
    }
    // retorno todos los dados con valores random;
    return results;
  }
}
