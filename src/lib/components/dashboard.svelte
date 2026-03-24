<script lang="ts">
    import Card from "./card.svelte";
    import gamepad from "$lib/assets/icons/gamepad.svg";
    import trophy from "$lib/assets/icons/trophy.svg";
    import ball from "$lib/assets/icons/ball.svg";
    import star from "$lib/assets/icons/star.svg";

    let { result }: { result: PlayerStat[] } = $props();

    let items = $derived([
        {
            title: "Partidas",
            value: result.reduce(
                (acc, stat) => acc + stat["Total de Partidas Jogadas"],
                0,
            ),
            icon: gamepad,
        },
        {
            title: "Vitórias",
            value: result.reduce((acc, stat) => acc + stat["Vitórias"], 0),
            icon: trophy,
        },
        {
            title: "Gols",
            value: result.reduce((acc, stat) => acc + stat["Gols (Total)"], 0),
            icon: ball,
        },
        {
            title: "MVPs",
            value: result.reduce((acc, stat) => acc + stat["MVPs"], 0),
            icon: star,
        },
    ]);
</script>

<div class="grid grid-cols-2 md:grid-cols-4 gap-3">
    {#each items as item}
        <Card classname="flex gap-4">
            <img src={item.icon} alt={item.title} width="60" height="60" />
            <div>
                <h3 class="title">
                    {item.value}
                </h3>
                <p>{item.title}</p>
            </div>
        </Card>
    {/each}
</div>

<style>
    @reference "../../routes/layout.css";

    .title {
        @apply mb-0;
    }

    .title + p {
        @apply text-gray-500;
    }
</style>
