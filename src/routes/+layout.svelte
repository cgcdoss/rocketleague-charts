<script lang="ts">
    import "./layout.css";
    import favicon from "$lib/assets/favicon.ico";
    import rocket from "$lib/assets/rocket.png";

    let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<header class=" py-2 px-4 bg-gray-700 text-white mb-4">
    <div class="flex items-center gap-4 container mx-auto">
        <a href="/">
            <img src={rocket} alt="Logo" width="32" height="32" />
        </a>
        <nav
            class="flex items-center gap-3 *:text-white *:hover:bg-gray-400 *:py-1 *:px-2"
        >
            <a href="/">Home</a>
            <a href="/json">JSON</a>
        </nav>
    </div>
</header>
<main class="container mx-auto px-2">
    {@render children()}
</main>
