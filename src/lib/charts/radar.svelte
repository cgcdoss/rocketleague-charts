<script lang="ts">
    import Card from "$lib/components/card.svelte";
    import { colors } from "$lib/utils/utils";
    import type { ChartData } from "chart.js";
    import { Radar } from "svelte-chartjs";

    let { result }: { result: PlayerStat[] } = $props();

    let chartData = $derived<ChartData<"radar", number[], string>>({
        labels: ["Gols", "Assistências", "Defesas"],
        datasets: result.map((d, i) => {
            return {
                label: d.Nome,
                data: [d["Gols (Total)"], d["Assistências"], d["Defesas"]],
                fill: true,
                backgroundColor: colors[i] + "50",
                borderColor: colors[i],
                pointBackgroundColor: colors[i],
            };
        }),
    });
</script>

<Card classname="flex flex-col h-90 md:h-full">
    <h3 class="title">Estatísticas por Jogador</h3>

    <div class="flex-1 min-h-0">
        <Radar
            data={chartData}
            options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        beginAtZero: true,
                    },
                },
                elements: {
                    line: {
                        borderWidth: 3,
                    },
                },
                plugins: {
                    datalabels: {
                        display: false,
                    },
                },
            }}
        />
    </div>
</Card>
