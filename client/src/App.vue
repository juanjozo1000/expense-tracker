<script>
import { Payment } from "./classes/Payment";
import ChartRenderer from "./components/ChartRenderer.vue";

export default {
  components: {ChartRenderer},
  data() {
    return {
      currentBalances: {
        bank: 1225,
        busking: 20,
        cash: 5,
      },
      nextPayments: [
        // LAVORO
        new Payment("salary w extra", "2024-10-01", 2392),
        new Payment("salary", "2024-11-10", 2080),
        new Payment("salary", "2024-12-7", 2080),
        new Payment("salary", "2025-01-7", 2080),

        //SPESE FORTI
        new Payment("Taxes", "2024-10-21", -1339),
        new Payment("Peluquero", "2024-10-10", -90),
        new Payment("Taxes advance", "2024-12-10", -1152),
        new Payment("Gaby", "2025-01-31", -1000),


        // SPECIAL INCOMES
        new Payment("Giacomo", "2024-10-01", 40),

        // SPESE MENSILI
        new Payment("Rent", "2024-10-01", -810),
        new Payment("Electricity", "2024-10-01", -91),
        new Payment("Arturo", "2024-10-09", 450),
        new Payment("ABO", "2024-10-01", -49),
        new Payment("Gym", "2024-10-01", -24),
        new Payment("Spotify", "2024-10-01", -11),
        new Payment("Prime", "2024-10-01", -9),
        new Payment("Cibo", "2024-10-15", -200),
        new Payment("Ozio", "2024-10-15", -200),

        new Payment("Rent", "2024-11-01", -810),
        new Payment("Electricity", "2024-11-01", -91),
        new Payment("Arturo", "2024-11-09", 450),
        new Payment("ABO", "2024-11-01", -49),
        new Payment("Gym", "2024-11-01", -24),
        new Payment("Spotify", "2024-11-01", -11),
        new Payment("Prime", "2024-11-01", -9),
        new Payment("Cibo", "2024-11-15", -200),
        new Payment("Ozio", "2024-11-15", -200),

        new Payment("Rent", "2024-12-01", -810),
        new Payment("Electricity", "2024-12-01", -91),
        new Payment("Arturo", "2024-12-09", 450),
        new Payment("ABO", "2024-12-01", -49),
        new Payment("Gym", "2024-12-01", -24),
        new Payment("Spotify", "2024-12-01", -11),
        new Payment("Prime", "2024-12-01", -9),
        new Payment("Cibo", "2024-12-15", -200),
        new Payment("Ozio", "2024-12-15", -200),

        new Payment("Rent", "2025-01-01", -810),
        new Payment("Electricity", "2025-01-01", -91),
        new Payment("Arturo", "2025-01-09", 450),
        new Payment("ABO", "2025-01-01", -49),
        new Payment("Gym", "2025-01-01", -24),
        new Payment("Spotify", "2025-01-01", -11),
        new Payment("Prime", "2025-01-01", -9),
        new Payment("Cibo", "2025-01-15", -200),
        new Payment("Ozio", "2025-01-15", -200),


        // BUSKING 2 times A WEEK
        // new Payment("Busking", "2024-02-13", 60 * 2),
        // new Payment("Busking", "2024-02-20", 60 * 2),
        // new Payment("Busking", "2024-02-27", 60 * 2),
        // new Payment("Busking", "2024-03-06", 60 * 2),

        // BUSKING 1 TIME A WEEK
        // new Payment("Busking", "2024-02-13", 60 * 1),
        // new Payment("Busking", "2024-02-20", 60 * 1),
        // new Payment("Busking", "2024-02-27", 60 * 1),
        // new Payment("Busking", "2024-03-06", 60 * 1),
        // new Payment("Busking", "2024-03-13", 60 * 1),
        // new Payment("Busking", "2024-03-20", 60 * 1),
        // new Payment("Busking", "2024-03-27", 60 * 1),
        // new Payment("Busking", "2024-04-03", 60 * 1),
        // new Payment("Busking", "2024-04-10", 60 * 1),
        // new Payment("Busking", "2024-04-17", 60 * 1),
        // new Payment("Busking", "2024-02-20", 60 * 1),
        // new Payment("Busking", "2024-02-27", 60 * 1),
        // new Payment("Busking", "2024-03-06", 60 * 1),
        // new Payment("Busking", "2024-03-13", 60 * 1),
        // new Payment("Busking", "2024-03-20", 60 * 1),
        // new Payment("Busking", "2024-03-27", 60 * 1),
        // new Payment("Busking", "2024-04-03", 60 * 1),
        // new Payment("Busking", "2024-04-10", 60 * 1),
        // new Payment("Busking", "2024-04-17", 60 * 1),

        // LONG TERM

        // new Payment('Debt', "2024-07-04",1831, false),
        // new Payment('Debt', "2024-07-04",1831, false),
        // new Payment('Debt', "2024-07-04",1831, false),
      ],
      // nextExpenses: [
      //
      // ],
    };
  },

  computed: {
    sortedNextPayments() {
      let sortedPayments = [...this.nextPayments].sort((a, b) => (a.date > b.date ? 1 : -1));
      // let counter = 1;
      // let firstDupDate;
      // for (let i = 0; i < sortedPayments.length - 1; i++) {
      //   if (firstDupDate === undefined) { // if we are not yet counting
      //     if (sortedPayments[i].date.toString() === sortedPayments[i+1].date.toString()) { // check counting condition
      //       firstDupDate = sortedPayments[i].date;
      //       sortedPayments[i+1].date.setSeconds(firstDupDate.getSeconds() + counter++); // add 1 second
      //     }
      //   } else { // if we are already counting
      //     if (firstDupDate.toString() === sortedPayments[i+1].date.toString()) { // check condition to keep counting
      //       sortedPayments[i+1].date.setSeconds(firstDupDate.getSeconds() + counter++); // add 1 second
      //     } else { // stop counting, reset values
      //       firstDupDate = undefined;
      //       counter = 1;
      //     }
      //   }
      // }
      return sortedPayments;
    },

    currentBalance() {
      return Math.round(Object.values(this.currentBalances).reduce((acc, amount) => acc + amount, 0) * 100) / 100; // sum all of the values in currrentBalances
    },

    totalBalance() {
      let totalPayments = this.nextPayments.reduce((acc, currentPayment) => acc + currentPayment.amount, this.currentBalance);
      return Math.round(totalPayments * 100) / 100;
    },
  },
  methods: {},
};
</script>

<template>
  <div class="container mt-5" id="main-container">
  <ChartRenderer :nextPayments="sortedNextPayments" :currentBalance="currentBalance"/>
  <h1>End balance: {{ totalBalance }}</h1>
    <hr>
    <table class="table mt-3" style="">
      <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Day</th>
        <th scope="col">Amount</th>
      </tr>
      </thead>
      <tbody>
      <template v-for="nextPayment in sortedNextPayments" :key="nextPayment">
      <tr>
        <td>{{ nextPayment.name}}</td>
        <td> {{nextPayment.date.toDateString() }} </td>
        <td>{{nextPayment.amount }}</td>
      </tr>
      </template>
      </tbody>
    </table>


  </div>
</template>

<style></style>
