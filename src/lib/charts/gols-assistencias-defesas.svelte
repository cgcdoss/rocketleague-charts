<script lang="ts">
    import { colors, dataLabelsPlugins } from "$lib/utils";
    import type { ChartData } from "chart.js";
    import ChartDataLabels from "chartjs-plugin-datalabels";
    import { Bar } from "svelte-chartjs";

    let { result }: { result: PlayerStat[] } = $props();

    let chartData = $derived<ChartData<"bar", number[], string>>({
        labels: result.map((d) => d.Nome),
        datasets: [
            {
                label: "Gols",
                data: result.map((d) => d["Gols (Total)"]),
                backgroundColor: colors[0],
            },
            {
                label: "Assistências",
                data: result.map((d) => d["Assistências"]),
                backgroundColor: colors[1],
            },
            {
                label: "Defesas",
                data: result.map((d) => d["Defesas"]),
                backgroundColor: colors[2],
            },
        ],
    });
</script>

<div>
    <h3 class="title">Gols, Assistências e Defesas por Nome</h3>
    <Bar
        data={chartData}
        options={{ responsive: true, ...dataLabelsPlugins }}
        plugins={[ChartDataLabels]}
    />
</div>
