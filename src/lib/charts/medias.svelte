<script lang="ts">
    import { colors } from "$lib/colors";
    import type { ChartData } from "chart.js";
    import { Bar } from "svelte-chartjs";

    let { result }: { result: PlayerStat[] } = $props();

    let chartData = $derived<ChartData<"bar", number[], string>>({
        labels: result.map((d) => d.Nome),
        datasets: [
            {
                label: "Gols",
                data: result.map(
                    (d) => d["Gols (Total)"] / d["Total de Partidas Jogadas"],
                ),
                backgroundColor: colors[0],
            },
            {
                label: "Assistências",
                data: result.map(
                    (d) => d["Assistências"] / d["Total de Partidas Jogadas"],
                ),
                backgroundColor: colors[1],
            },
            {
                label: "Defesas",
                data: result.map(
                    (d) => d["Defesas"] / d["Total de Partidas Jogadas"],
                ),
                backgroundColor: colors[2],
            },
        ],
    });
</script>

<div>
    <h3 class="title">Médias</h3>
    <Bar data={chartData} options={{ responsive: true }} />
</div>
