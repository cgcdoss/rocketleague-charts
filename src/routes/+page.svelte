<script lang="ts">
    import Geral from "$lib/charts/geral.svelte";
    import GolsAssistenciasDefesas from "$lib/charts/gols-assistencias-defesas.svelte";
    import Medias from "$lib/charts/medias.svelte";
    import Playerstats from "$lib/charts/playerstats.svelte";
    import Radar from "$lib/charts/radar.svelte";
    import Tempojogo from "$lib/charts/tempojogo.svelte";
    import { Chart as ChartJS, registerables } from "chart.js";
    import ChartDataLabels from "chartjs-plugin-datalabels";
    import type { PageProps } from "./$types";

    ChartJS.register(...registerables, ChartDataLabels);

    let { data }: PageProps = $props();
</script>

<main class="container mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Geral result={data.result} />
        <GolsAssistenciasDefesas result={data.result} />
        <div class="flex flex-col gap-3">
            <Medias result={data.result} />
            <Tempojogo result={data.result} />
        </div>
        <div class="grid grid-cols-2 gap-4">
            <Playerstats result={data.result} player="Gabriel" />
            <Playerstats result={data.result} player="Michel" />
            <Playerstats result={data.result} player="Dudu" />
            <Playerstats result={data.result} player="Leandro" />
        </div>
        <Radar result={data.result} />
    </div>
</main>
