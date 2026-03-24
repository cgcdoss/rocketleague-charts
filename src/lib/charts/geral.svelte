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
                label: "Partidas",
                data: result.map((d) => d["Total de Partidas Jogadas"]),
                backgroundColor: colors[1],
            },
            {
                label: "Vitórias",
                data: result.map((d) => d.Vitórias),
                backgroundColor: "#006700",
            },
            {
                label: "Derrotas",
                data: result.map(
                    (d) => d["Total de Partidas Jogadas"] - d.Vitórias,
                ),
                backgroundColor: "#b30000",
            },
        ],
    });
</script>

<Card classname="flex-1 flex flex-col min-h-0 max-sm:min-h-86">
    <h3 class="title">Partidas, Vitórias e Derrotas por Jogador</h3>
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
