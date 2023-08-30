import { Injectable } from '@angular/core';
import { Drink } from '../_models/drinks.model';

@Injectable()
export class DrinksService {
  drinkList: Drink[] = [
    new Drink('Drip Coffee', '3.50'),
    new Drink('Cafe Au Lait', '4'),
    new Drink('Cold Brew', '4'),
    new Drink('Espresso', '', ['single 2', 'Double 2.50']),
    new Drink('Macciato', '3.25'),
    new Drink('Americano', '3.75'),
    new Drink('Cappuccino', '3.75'),
    new Drink('Latte', '4.25'),
    new Drink('Mocha', '4.50'),
    new Drink('Spaniard', '4.75'),
    new Drink('Hot Chocolate', '4.75'),
    new Drink('Milk', '3.50'),
    new Drink('Chai Latte', '4.50'),
    new Drink('Matcha Latte', '5'),
    new Drink('Premium Loose Leaf Tea', '4.50'),
    new Drink('Sweet Tea', ' 4'),
    new Drink('Arnold Palmer', '4'),
    new Drink('Soda', '3', ['Coke', 'Ginger Ale', 'Root Beer', 'Black Cherry Coke']),
  ];
  constructor() { }

}
