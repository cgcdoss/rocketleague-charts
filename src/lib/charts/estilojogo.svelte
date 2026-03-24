<script lang="ts">
    import Card from "$lib/components/card.svelte";
    import Playerstats from "./playerstats.svelte";

    let data: { result: PlayerStat[] } = $props();
</script>

<Card classname="flex-1 flex flex-col min-h-0">
    <h3 class="title">Estilo de jogo</h3>
    <div class="flex-1 min-h-0 grid grid-cols-2">
        {#each data.result as result}
            <Playerstats result={data.result} player={result.Nome} />
        {/each}
    </div>
</Card>
