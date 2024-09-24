<script>
import { Payment } from "./classes/Payment";
import ChartRenderer from "./components/ChartRenderer.vue";

export default {
  components: {ChartRenderer},
  data() { // WHAT ARE PROXYS
    return {
      currentBalances: {
        bank: 123,
        busking: 0,
        cash: 15,
      },
      nextPayments: [
        // LAVORO
        new Payment("GPT", "2023-03-17", 400), // END OF COLLABORAZIONE+
        new Payment("Docenza mattina", "2023-04-17", 2080),
        new Payment("Nello", "2023-03-27", 80),
        new Payment("Nello", "2023-04-03", 100),
        new Payment("Nello", "2023-04-10", 100),

        //SPESE FORTI
        new Payment("Debt", "2023-04-27", -1831),

        // SPESE MENSILI

        new Payment("ABO", "2023-04-01", -29),
        new Payment("Gym", "2023-04-01", -24),
        new Payment("Cibo", "2023-04-15", -150),
        new Payment("Ozio", "2023-04-15", -200),


        new Payment("ABO", "2023-04-01", -29),
        new Payment("ABO", "2023-04-01", -29),
        new Payment("Gym", "2023-04-01", -24),
        new Payment("Cibo", "2023-04-15", -150),
        new Payment("Ozio", "2023-04-15", -200),

        // BUSKING 2 times A WEEK
        // new Payment("Busking", "2023-02-13", 60 * 2),
        // new Payment("Busking", "2023-02-20", 60 * 2),
        // new Payment("Busking", "2023-02-27", 60 * 2),
        // new Payment("Busking", "2023-03-06", 60 * 2),

        // BUSKING 1 TIME A WEEK
        // new Payment("Busking", "2023-02-13", 60 * 1),
        // new Payment("Busking", "2023-02-20", 60 * 1),
        // new Payment("Busking", "2023-02-27", 60 * 1),
        // new Payment("Busking", "2023-03-06", 60 * 1),
        // new Payment("Busking", "2023-03-13", 60 * 1),
        // new Payment("Busking", "2023-03-20", 60 * 1),
        // new Payment("Busking", "2023-03-27", 60 * 1),
        // new Payment("Busking", "2023-04-03", 60 * 1),
        // new Payment("Busking", "2023-04-10", 60 * 1),
        // new Payment("Busking", "2023-04-17", 60 * 1),
        // new Payment("Busking", "2023-02-20", 60 * 1),
        // new Payment("Busking", "2023-02-27", 60 * 1),
        // new Payment("Busking", "2023-03-06", 60 * 1),
        // new Payment("Busking", "2023-03-13", 60 * 1),
        // new Payment("Busking", "2023-03-20", 60 * 1),
        // new Payment("Busking", "2023-03-27", 60 * 1),
        // new Payment("Busking", "2023-04-03", 60 * 1),
        // new Payment("Busking", "2023-04-10", 60 * 1),
        // new Payment("Busking", "2023-04-17", 60 * 1),

        // LONG TERM

        // new Payment('Debt', "2023-07-04",1831, false),
        // new Payment('Debt', "2023-07-04",1831, false),
        // new Payment('Debt', "2023-07-04",1831, false),
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
