import { CreditCard } from './credit-card';

export class Payment {
    value: number;
    creditCard: CreditCard;

    constructor() {
        this.creditCard = new CreditCard();
    }
}
