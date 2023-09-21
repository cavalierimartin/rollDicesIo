import { ColorsNameEnum } from "./colors-names.enum";
import { DiceStatusEnum } from "./dice-status.enum";

export interface DiceGroup {
    colorName: ColorsNameEnum,
    id: string,
    quantity: number,
    dices?: {
        value: number,
        status: DiceStatusEnum
    }[]
}
