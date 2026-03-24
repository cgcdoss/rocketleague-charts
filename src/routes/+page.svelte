<script lang="ts">
    import Estilojogo from "$lib/charts/estilojogo.svelte";
    import Geral from "$lib/charts/geral.svelte";
    import GolsAssistenciasDefesas from "$lib/charts/gols-assistencias-defesas.svelte";
    import Medias from "$lib/charts/medias.svelte";
    import Mvps from "$lib/charts/mvps.svelte";
    import Radar from "$lib/charts/radar.svelte";
    import Tempojogo from "$lib/charts/tempojogo.svelte";
    import Dashboard from "$lib/components/dashboard.svelte";
    import { Chart as ChartJS, registerables } from "chart.js";
    import ChartDataLabels from "chartjs-plugin-datalabels";
    import type { PageProps } from "./$types";

    ChartJS.register(...registerables, ChartDataLabels);

    let { data }: PageProps = $props();
</script>

<div class="mb-3">
    <Dashboard result={data.result} />
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
    <div class="flex flex-col gap-3">
        <Geral result={data.result} />
        <GolsAssistenciasDefesas result={data.result} />
    </div>
    <Estilojogo result={data.result} />
    <Mvps result={data.result} />
    <Medias result={data.result} />
    <Tempojogo result={data.result} />
    <Radar result={data.result} />
</div>
