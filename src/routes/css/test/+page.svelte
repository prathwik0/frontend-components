<script lang="ts">
    import SelectCSSProperty from './SelectCSSProperty.svelte';
    import Box from './Box.svelte';
    import { BoxClass } from './box';

    let boxAdjust: BoxClass = new BoxClass();
</script>

<div class="flex justify-center p-3">
    <span>Number of Items : </span>
    <input type="number" bind:value={boxAdjust.count} min="0" max="100" class="inline-block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
</div>

<div class="flex flex-wrap">
    <div class="w-1/3 inline-grid grid-cols-1">
        <label>
            <p class="text-xs max-w-fit sm:text-sm">Choose Width : {boxAdjust.width.value + boxAdjust.width.unit}</p>
            <input type="number" bind:value={boxAdjust.width.value} min="0" max="100" class="inline-block p-2 text-xs sm:text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            <input type="range" bind:value={boxAdjust.width.value} min="0" max="100" />
            <select bind:value={boxAdjust.width.unit} class="inline-block w-full max-w-fit max p-2 mb-1 text-xs sm:text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {#each boxAdjust.width.options as option}
                    <option value={option}>
                        {option}
                    </option>
                {/each}
            </select>
        </label>

        <label>
            <p class="text-xs max-w-fit sm:text-sm">Choose Height : {boxAdjust.height.value + boxAdjust.height.unit}</p>
            <input type="number" bind:value={boxAdjust.height.value} min="0" max="100" class="inline-block p-2 text-xs sm:text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            <input type="range" bind:value={boxAdjust.height.value} min="0" max="100" />
            <select bind:value={boxAdjust.height.unit} class="inline-block w-full max-w-fit max p-2 mb-1 text-xs sm:text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {#each boxAdjust.height.options as option}
                    <option value={option}>
                        {option}
                    </option>
                {/each}
            </select>
        </label>
    </div>

    <div class="inline-grid w-1/3 grid-cols-3">
        <SelectCSSProperty property="flex-direction" bind:info={boxAdjust['flex-direction']} />
        <SelectCSSProperty property="flex-wrap" bind:info={boxAdjust['flex-wrap']} />
        <SelectCSSProperty property="justify-content" bind:info={boxAdjust['justify-content']} />
        <SelectCSSProperty property="align-items" bind:info={boxAdjust['align-items']} />
        <SelectCSSProperty property="align-content" bind:info={boxAdjust['align-content']} />
    </div>
</div>

<div style="width: 100vw; height: 100vh">
    <Box bind:boxAdjust />
</div>
