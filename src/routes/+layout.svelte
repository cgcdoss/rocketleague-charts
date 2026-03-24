<script lang="ts">
    import { resolve } from "$app/paths";
    import favicon from "$lib/assets/favicon.ico";
    import rocket from "$lib/assets/rocket.png";
    import { Chart } from "chart.js";
    import "./layout.css";

    let { children } = $props();
    let showLabels = $state(true);

    function toggleLabels() {
        showLabels = !showLabels;
        Chart.defaults.plugins.datalabels!.display = showLabels;
        Object.values(Chart.instances).forEach((chart) => chart.update());
    }
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    <title>Rocket League Charts</title>
</svelte:head>

<header class="py-2 px-4 bg-gray-700 text-white mb-4">
    <div class="flex items-center justify-between container mx-auto">
        <div class="flex gap-4">
            <a href={resolve("/")}>
                <img src={rocket} alt="Logo" width="32" height="32" />
            </a>
            <nav
                class="flex items-center gap-3 *:text-white *:hover:bg-gray-400 *:py-1 *:px-2"
            >
                <a href={resolve("/")}>Home</a>
                <a href={resolve("/json")}>JSON</a>
            </nav>
        </div>

        <div>
            <button
                onclick={toggleLabels}
                class="flex items-center gap-2 px-3 py-1 rounded-lg bg-gray-700 transition cursor-pointer"
            >
                <span class="text-xs text-white">Labels</span>

                <div
                    class="w-10 h-4 flex items-center rounded-full p-1"
                    class:bg-green-500={showLabels}
                    class:bg-gray-500={!showLabels}
                >
                    <div
                        class="bg-white w-3 h-3 rounded-full shadow-md transform transition"
                        class:translate-x-5={showLabels}
                    ></div>
                </div>
            </button>
        </div>
    </div>
</header>
<main class="container mx-auto px-2">
    {@render children()}
</main>
