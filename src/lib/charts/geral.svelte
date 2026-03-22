<script lang="ts">
    import { colors } from "$lib/colors";
    import type { ChartData } from "chart.js";
    import { Bar } from "svelte-chartjs";

    let { result }: { result: PlayerStat[] } = $props();

    let chartData = $derived<ChartData<"bar", number[], string>>({
        labels: result.map((d) => d.Nome),
        datasets: [
            {
                label: "Partidas",
                data: result.map((d) => d["Total de Partidas Jogadas"]),
                backgroundColor: colors[0],
            },
            {
                label: "Vitórias",
                data: result.map((d) => d.Vitórias),
                backgroundColor: colors[1],
            },
            {
                label: "Derrotas",
                data: result.map(
                    (d) => d["Total de Partidas Jogadas"] - d.Vitórias,
                ),
                backgroundColor: colors[2],
            },
            {
                label: "MVPs",
                data: result.map((d) => d.MVPs),
                backgroundColor: colors[3],
            },
        ],
    });
</script>

<div class="w-full">
    <Bar data={chartData} options={{ responsive: true }} />
</div>
