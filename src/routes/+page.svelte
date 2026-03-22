<script lang="ts">
    import {
        BarElement,
        CategoryScale,
        Chart as ChartJS,
        Legend,
        LineElement,
        LinearScale,
        PointElement,
        Title,
        Tooltip,
        type ChartData,
    } from "chart.js";
    import { Bar } from "svelte-chartjs";
    import type { PageProps } from "./$types";
    import Geral from "$lib/charts/geral.svelte";
    import GolsAssistenciasDefesas from "$lib/charts/gols-assistencias-defesas.svelte";

    ChartJS.register(
        Title,
        Tooltip,
        Legend,
        LineElement,
        LinearScale,
        BarElement,
        PointElement,
        CategoryScale,
    );

    let { data }: PageProps = $props();
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
    <Geral result={data.result} />
    <GolsAssistenciasDefesas result={data.result} />
</div>
