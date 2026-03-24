<script lang="ts">
    import Card from "$lib/components/card.svelte";
    import { colors, dataLabelsPlugins } from "$lib/utils/utils";
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

<div class="flex flex-col min-h-0 item">
    <h4 class="font-bold">{player}</h4>
    <div class="flex-1 min-h-0">
        <Pie
            data={chartData}
            options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    datalabels: {
                        ...dataLabelsPlugins.plugins.datalabels,
                        rotation: 0,
                        font: {
                            size: 12,
                            weight: "bold",
                        },
                    },
                },
            }}
        />
    </div>
</div>

<style>
    @reference "../../routes/layout.css";
    .item {
        @apply p-2 border-b border-gray-300;
    }

    .item:last-child,
    .item:nth-last-child(2):nth-child(odd) {
        @apply border-b-0;
    }

    .item:nth-child(odd) {
        @apply border-r border-gray-300;
    }
</style>
