<script lang="ts">
    import type { PageProps } from "./$types";

    let { data }: PageProps = $props();
</script>

<pre class="bg-gray-300 overflow-auto font-mono m-0 p-3">
{JSON.stringify(data.result, null, 2).trim()}
</pre>
