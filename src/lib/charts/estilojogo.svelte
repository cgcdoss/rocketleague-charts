<script lang="ts">
    import Card from "$lib/components/card.svelte";
    import Playerstats from "./playerstats.svelte";

    let data: { result: PlayerStat[] } = $props();
</script>

<Card>
    <h3 class="title">Estilo de jogo</h3>
    <div class="grid grid-cols-2 h-[80vh] md:h-[60vh]">
        {#each data.result as result}
            <Playerstats result={data.result} player={result.Nome} />
        {/each}
    </div>
</Card>
