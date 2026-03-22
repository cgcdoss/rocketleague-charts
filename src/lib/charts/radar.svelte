<script lang="ts">
    import { colors } from "$lib/colors";
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

<div>
    <Radar
        data={chartData}
        options={{
            responsive: true,
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
        }}
    />
</div>
