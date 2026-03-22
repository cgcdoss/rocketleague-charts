<script lang="ts">
    import { colors } from "$lib/colors";
    import type { ChartData } from "chart.js";
    import { Bar, Chart } from "svelte-chartjs";

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
            },
            {
                label: "Anos jogando",
                data: result.map(
                    (d) =>
                        new Date().getFullYear() -
                        d["Início do jogo"].getFullYear(),
                ),
                backgroundColor: colors[1],
                type: "line",
                fill: false,
                order: 0,
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
        }}
    />
</div>
