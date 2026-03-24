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
                label: "Gols Aéreos",
                data: result.map((d) => d["Gols Aéreos"]),
                backgroundColor: colors[0],
            },
            {
                label: "Gols de Ré",
                data: result.map((d) => d["Gols de Ré"]),
                backgroundColor: colors[1],
            },
            {
                label: "Gols de Bicicleta",
                data: result.map((d) => d["Gols de Bicicleta"]),
                backgroundColor: colors[2],
            },
            {
                label: "Gols à Distância",
                data: result.map((d) => d["Gols à Distância"]),
                backgroundColor: colors[3],
            },
        ],
    });
</script>

<Card>
    <h3 class="title">Gols diferentes por Jogador</h3>
    <div class="h-60">
        <Bar
            data={chartData}
            options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    datalabels: {
                        ...dataLabelsPlugins.plugins.datalabels,
                        anchor: "end",
                        align: "end",
                        offset: -3,
                        color: "#000",
                        rotation: 0,
                        font: {
                            weight: "bold",
                            size: 12,
                        },
                    },
                },
            }}
        />
    </div>
</Card>
