<script lang="ts">
    let { classname, children }: { classname?: string; children: () => any } =
        $props();
</script>

<div
    class={(classname || "") +
        " shadow-xl p-4 rounded-lg border border-gray-300 bg-white"}
>
    {@render children()}
</div>
