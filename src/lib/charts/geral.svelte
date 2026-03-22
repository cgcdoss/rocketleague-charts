<script lang="ts">
    import { colors, dataLabelsPlugins } from "$lib/utils";
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

<div>
    <h3 class="title">Partidas, Vitórias, Derrotas e MVPs por Nome</h3>
    <Bar
        data={chartData}
        options={{
            responsive: true,
            ...dataLabelsPlugins,
        }}
    />
</div>
