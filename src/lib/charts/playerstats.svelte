<script lang="ts">
    import { colors, dataLabelsPlugins } from "$lib/utils";
    import type { ChartData } from "chart.js";
    import { Pie } from "svelte-chartjs";

    let { result, player }: { result: PlayerStat[]; player: string } = $props();

    let chartData = $derived<ChartData<"pie", number[], string>>({
        labels: ["Gols", "Assistências", "Defesas"],
        datasets: [
            {
                label: "",
                data: result.find((d) => d.Nome === player)
                    ? [
                          result.find((d) => d.Nome === player)?.[
                              "Gols (Total)"
                          ] || 0,
                          result.find((d) => d.Nome === player)?.[
                              "Assistências"
                          ] || 0,
                          result.find((d) => d.Nome === player)?.["Defesas"] ||
                              0,
                      ]
                    : [0, 0, 0],
                backgroundColor: colors,
            },
        ],
    });
</script>

<div>
    <h3 class="title">{player}</h3>
    <Pie
        data={chartData}
        options={{
            responsive: true,
            plugins: {
                datalabels: {
                    ...dataLabelsPlugins.plugins.datalabels,
                    rotation: 0,
                },
            },
        }}
    />
</div>
