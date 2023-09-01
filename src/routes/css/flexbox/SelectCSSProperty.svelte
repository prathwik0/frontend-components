<script lang="ts">
    export let property: string;
    export let info: {
        value: string;
        options: string[];
    };
</script>

<label class="flex flex-col w-full p-1">
    <p class="text-xs max-w-fit sm:text-sm">{property}</p>
    <select bind:value={info.value} class="inline-block w-full max-w-fit max p-2 mb-1 text-xs sm:text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        {#each info.options as option}
            <option value={option}>
                {option}
            </option>
        {/each}
    </select>
</label>
