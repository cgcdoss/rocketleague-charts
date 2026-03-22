<script lang="ts">
    import { colors } from "$lib/utils";
    import type { ChartData } from "chart.js";
    import { Chart } from "svelte-chartjs";

    let { result }: { result: PlayerStat[] } = $props();

    let chartData = $derived<ChartData>({
        labels: result.map((d) => d.Nome),
        datasets: [
            {
                label: "Tempo de jogo (em h)",
                data: result.map((d) => d["Tempo de Jogo (em horas)"]),
                backgroundColor: colors[0],
                type: "bar",
                order: 1,
                datalabels: {
                    anchor: "center",
                    align: "top",
                    color: "#fff",
                    offset: 0,
                    formatter: (value) => `${value}h`,
                },
            },
            {
                label: "Anos jogando",
                data: result.map(
                    (d) =>
                        new Date().getFullYear() -
                        d["Início do jogo"].getFullYear(),
                ),
                backgroundColor: colors[1],
                borderColor: colors[1] + "80",
                type: "line",
                yAxisID: "y1",
                fill: false,
                order: 0,
                datalabels: {
                    anchor: "start",
                    align: "top",
                    color: "#000",
                    offset: 0,
                    formatter: (value) => `${value} anos`,
                },
            },
        ],
    });
</script>

<div>
    <h3 class="title">Tempo de Jogo e Anos Jogando por Nome</h3>
    <Chart
        type="bar"
        data={chartData}
        options={{
            responsive: true,
            scales: {
                y: {
                    type: "linear",
                    position: "left",
                    title: {
                        display: true,
                        text: "Tempo de jogo (em h)",
                    },
                },
                y1: {
                    type: "linear",
                    position: "right",
                    title: {
                        display: true,
                        text: "Anos jogando",
                    },
                    grid: {
                        drawOnChartArea: false, // evita sobreposição de grids
                    },
                },
            },
        }}
    />
</div>
