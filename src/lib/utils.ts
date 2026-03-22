import type { Options } from "chartjs-plugin-datalabels/types/options";

export let colors = ["#3589f9", "#231e9a", "#e47141", "#6c0378"];

export let dataLabelsPlugins: { plugins: { datalabels: Options } } = {
  plugins: {
    datalabels: {
      anchor: "end",
      align: "start",
      color: "#fff",
      rotation: -90,
      font: {
        weight: "bold",
        size: 10,
      },
      formatter: function (value: any) {
        return value;
      },
    },
  }
};
