export class Payment {
  constructor(name, date, amount, income = true) {
    this.name = name;
    this.date = new Date(date);
    this.amount = amount;
    this.income = income;
  }
}
