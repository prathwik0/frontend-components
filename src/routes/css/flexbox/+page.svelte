<script lang="ts">
    import SelectCSSProperty from './SelectCSSProperty.svelte';

    let container = {
        display: 'flex',
        'flex-direction': {
            value: 'row',
            options: ['row', 'row-reverse', 'column', 'column-reverse'],
        },
        'flex-wrap': {
            value: 'nowrap',
            options: ['wrap', 'nowrap', 'wrap-reverse'],
        },
        'justify-content': {
            value: 'flex-start',
            options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'start', 'end', 'left', 'right'],
        },
        'align-items': {
            value: 'flex-start',
            options: ['flex-start', 'flex-end', 'center', 'stretch', 'baseline', 'first baseline', 'last baseline', 'start', 'end', 'self-start', 'self-end', 'safe center', 'unsafe center'],
        },
        'align-content': {
            value: 'flex-start',
            options: ['flex-start', 'flex-end', 'center', 'stretch', 'space-between', 'space-around', 'space-evenly', 'start', 'end', 'baseline', 'first baseline', 'last baseline', 'safe center', 'unsafe center'],
        },
        width: {
            value: 50,
            unit: 'vw',
            options: ['vw', 'vh', '%', 'px', 'em', 'rem', 'cm', 'mm', 'in', 'pt', 'pc', 'ex', 'ch', 'vmin', 'vmax'],
        },
        height: {
            value: 50,
            unit: 'vh',
            options: ['vw', 'vh', '%', 'px', 'em', 'rem', 'cm', 'mm', 'in', 'pt', 'pc', 'ex', 'ch', 'vmin', 'vmax'],
        },
        // padding: '10%',
        // border: '10px solid rgb(233, 156, 156)',
        // margin: '10%',
    };

    let item = {
        'flex-grow': 0,
        'flex-shrink': 1,
        'flex-basis': {
            value: 'auto',
            options: ['%'],
        },
        'align-self': {
            value: 'auto',
            options: ['auto', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline'], //'first baseline', 'last baseline', 'start', 'end', 'self-start', 'self-end', 'safe center', 'unsafe center'],
        },
        order: 0,
    };

    let count = 0;
</script>

<div class="flex justify-center p-3">
    <span>Number of Items : </span>
    <input type="number" bind:value={count} min="0" max="100" class="inline-block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
</div>

<div class="flex flex-wrap">
    <div class="w-1/3 inline-grid grid-cols-1">
        <label>
            <p class="text-xs max-w-fit sm:text-sm">Choose Width : {container.width.value + container.width.unit}</p>
            <input type="number" bind:value={container.width.value} min="0" max="100" class="inline-block p-2 text-xs sm:text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            <input type="range" bind:value={container.width.value} min="0" max="100" />
            <select bind:value={container.width.unit} class="inline-block w-full max-w-fit max p-2 mb-1 text-xs sm:text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {#each container.width.options as option}
                    <option value={option}>
                        {option}
                    </option>
                {/each}
            </select>
        </label>

        <label>
            <p class="text-xs max-w-fit sm:text-sm">Choose Height : {container.height.value + container.height.unit}</p>
            <input type="number" bind:value={container.height.value} min="0" max="100" class="inline-block p-2 text-xs sm:text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            <input type="range" bind:value={container.height.value} min="0" max="100" />
            <select bind:value={container.height.unit} class="inline-block w-full max-w-fit max p-2 mb-1 text-xs sm:text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {#each container.height.options as option}
                    <option value={option}>
                        {option}
                    </option>
                {/each}
            </select>
        </label>
    </div>

    <div class="inline-grid w-1/3 grid-cols-3">
        <SelectCSSProperty property="flex-direction" bind:info={container['flex-direction']} />
        <SelectCSSProperty property="flex-wrap" bind:info={container['flex-wrap']} />
        <SelectCSSProperty property="justify-content" bind:info={container['justify-content']} />
        <SelectCSSProperty property="align-items" bind:info={container['align-items']} />
        <SelectCSSProperty property="align-content" bind:info={container['align-content']} />
    </div>
</div>

<div
    class="container"
    style="display: {container.display}; 
            flex-direction: {container['flex-direction'].value};
            flex-wrap: {container['flex-wrap'].value};
            justify-content: {container['justify-content'].value};
            align-items: {container['align-items'].value};
            align-content:  {container['align-content'].value};
            width: {container.width.value + container.width.unit};
            height: {container.height.value + container.height.unit}"
>
    {#each { length: count } as _, i}
        <div class="item">asdf {i}</div>
    {/each}
</div>

<style lang="postcss">
    .container {
        margin: 10px;
        @apply border-2 border-black dark:border-white bg-gray-300 dark:bg-neutral-900;
        /*  padding: 10%; */
    }
    .item {
        @apply border-2 border-black dark:border-white;
        padding: 10px;
    }
</style>
