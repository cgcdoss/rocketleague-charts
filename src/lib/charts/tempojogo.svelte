<script lang="ts">
    import Card from "$lib/components/card.svelte";
    import { colors, differenceInYears } from "$lib/utils/utils";
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
                    font: {
                        weight: "bold",
                        size: 12,
                    },
                },
            },
            {
                label: "Anos jogando",
                data: result.map(
                    (d) =>
                        +differenceInYears(
                            new Date(),
                            d["Início do jogo"],
                        ).toFixed(1),
                ),
                backgroundColor: colors[1],
                borderColor: colors[1] + "80",
                pointBorderWidth: 4,
                type: "line",
                yAxisID: "y1",
                fill: false,
                order: 0,
                datalabels: {
                    anchor: "start",
                    align: "top",
                    color: colors[1],
                    offset: 0,
                    formatter: (value) =>
                        `${value.toString().replace(".", ",")} anos`,
                    font: {
                        weight: "bold",
                        size: 12,
                    },
                },
            },
        ],
    });
</script>

<Card classname="flex flex-col h-90 md:h-full">
    <h3 class="title">Tempo de Jogo e Anos Jogando por Jogador</h3>

    <div class="flex-1 min-h-0">
        <Chart
            type="bar"
            data={chartData}
            options={{
                responsive: true,
                maintainAspectRatio: false,
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
</Card>
