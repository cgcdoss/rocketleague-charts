<script lang="ts">
    import Geral from "$lib/charts/geral.svelte";
    import GolsAssistenciasDefesas from "$lib/charts/gols-assistencias-defesas.svelte";
    import {
        ArcElement,
        BarElement,
        CategoryScale,
        Chart as ChartJS,
        Legend,
        LineController,
        LineElement,
        LinearScale,
        PointElement,
        RadialLinearScale,
        Title,
        Tooltip,
        registerables,
    } from "chart.js";
    import type { PageProps } from "./$types";
    import Playerstats from "$lib/charts/playerstats.svelte";
    import Medias from "$lib/charts/medias.svelte";
    import Tempojogo from "$lib/charts/tempojogo.svelte";
    import Radar from "$lib/charts/radar.svelte";

    ChartJS.register(...registerables);

    let { data }: PageProps = $props();
</script>

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
