<script lang="ts">
    import Card from "$lib/components/card.svelte";
    import { colors, dataLabelsPlugins } from "$lib/utils";
    import type { ChartData } from "chart.js";
    import { Bar } from "svelte-chartjs";

    let { result }: { result: PlayerStat[] } = $props();

    let chartData = $derived<ChartData<"bar", number[], string>>({
        labels: result.map((d) => d.Nome),
        datasets: [
            {
                label: "MVPs",
                data: result.map((d) => d.MVPs),
                backgroundColor: colors[0],
            },
        ],
    });
</script>

<Card>
    <h3 class="title">MVPs por Jogador</h3>
    <div class="h-60">
        <Bar
            data={chartData}
            options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    datalabels: {
                        ...dataLabelsPlugins.plugins.datalabels,
                        rotation: 0,
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
