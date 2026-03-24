<script lang="ts">
    import Card from "$lib/components/card.svelte";
    import { colors, dataLabelsPlugins } from "$lib/utils/utils";
    import type { ChartData } from "chart.js";
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

<Card classname="flex-1 flex flex-col min-h-0 max-sm:min-h-96">
    <h3 class="title">Gols, Assistências e Defesas por Jogador</h3>
    <div class="flex-1 min-h-0">
        <Bar
            data={chartData}
            options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    datalabels: {
                        ...dataLabelsPlugins.plugins.datalabels,
                        font: {
                            weight: "bold",
                            size: 14,
                        },
                    },
                },
            }}
        />
    </div>
</Card>
