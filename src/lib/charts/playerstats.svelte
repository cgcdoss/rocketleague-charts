<script lang="ts">
    import Card from "$lib/components/card.svelte";
    import { colors, dataLabelsPlugins } from "$lib/utils/utils";
    import type { ChartData } from "chart.js";
    import { Pie } from "svelte-chartjs";

    let { result, player }: { result: PlayerStat[]; player: string } = $props();
    let gols = $derived(
        result.find((d) => d.Nome === player)?.["Gols (Total)"] || 0,
    );
    let assistencias = $derived(
        result.find((d) => d.Nome === player)?.["Assistências"] || 0,
    );
    let defesas = $derived(
        result.find((d) => d.Nome === player)?.["Defesas"] || 0,
    );

    let chartData = $derived<ChartData<"pie", number[], string>>({
        labels: ["Gols", "Assistências", "Defesas"],
        datasets: [
            {
                label: "",
                data: result.find((d) => d.Nome === player)
                    ? [gols, assistencias, defesas]
                    : [0, 0, 0],
                backgroundColor: colors,
            },
        ],
    });
</script>

<div class="item">
    <h4 class="font-bold">{player}</h4>
    <div class="h-66">
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
                        formatter: (value) =>
                            value > 0
                                ? `${value} \n${((value / (gols + assistencias + defesas)) * 100).toFixed(0)}%`
                                : "",
                    },
                },
            }}
        />
    </div>
</div>

<style>
    @reference "../../routes/layout.css";
    .item {
        @apply border-b border-gray-300;

        &:nth-child(1) {
            @apply pr-2 pb-2;
        }

        &:nth-child(2) {
            @apply pl-2 pb-2;
        }

        &:nth-child(3) {
            @apply pt-2 pr-2;
        }

        &:nth-child(4) {
            @apply pt-2 pl-2;
        }
    }

    .item:last-child,
    .item:nth-last-child(2):nth-child(odd) {
        @apply border-b-0;
    }

    .item:nth-child(odd) {
        @apply border-r border-gray-300;
    }
</style>
