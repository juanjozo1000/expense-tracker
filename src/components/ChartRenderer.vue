<script>
import {dateFormat} from "../scripts/utils";

export default {
  props: ["nextPayments", "currentBalance"],

  data() {
    let series = [{data: []}];
    let dataArray = series[0].data;
    for (let i = 0; i < this.nextPayments.length; i++) {
      let el = this.nextPayments[i];
      let offset = i === 0 ? Math.round(this.currentBalance) : dataArray[i - 1].y[3];
      dataArray.push({x: i + 1, y: [offset, offset, offset + el.amount, offset + el.amount]})
    }

    // console.log(dataArray);
    return {
      series,
      chartOptions: {
        chart: {
          type: 'candlestick',
          height: 10000, // wtf does this do,
        },
        candlestick: {
          style: {
            display: "none"
          }
        },
        dataLabels: {
          enabled: true,
          // textAnchor: "start",
          style: {
            fontSize: '12px',
            fontWeight: 'bold',
          },
          background: {
            enabled: true,
            foreColor: '#000',
            borderRadius: 2,
            padding: 4,
            opacity: 0,
            borderWidth: 1,
            borderColor: '#00000000'
          },
        },
        title: {
          text: 'Future balance',
          align: 'left'
        },
        xaxis: {
          type: 'category',
          tooltip: {
            enabled: false
          },
          labels: {
            formatter: (val) => { // TODO this function runs way too much
              // console.log(val)
              if (!isNaN(val) && val) {
                // console.log()
                console.log(val)
                let index = Math.round(val)
                console.log(index)
                console.log(this.nextPayments)
                let currentElement = this.nextPayments[val - 1]
                return currentElement.name + ": " + dateFormat(currentElement.date);
              }
              return val;
            },
            hideOverlappingLabels: false,
            style: {
              cssClass: 'my-labels'
            },
            rotate: -45,
            rotateAlways: true
          }
        },
        yaxis: {
          min: -1500,
          max: 3000,
          // tooltip: {
          //   enabled: true
          // }
        },
        annotations: {
          yaxis: [
            {
              y: 0,
              borderColor: 'black',
              label: {
                borderColor: '#black',
                style: {
                  color: 'black',
                  background: 'black'
                },

              }
            }
          ]
        },
      }

    }

  }

}
</script>

<template>
  <apexchart type="candlestick" height="350" :options="chartOptions" :series="series"></apexchart>
</template>


