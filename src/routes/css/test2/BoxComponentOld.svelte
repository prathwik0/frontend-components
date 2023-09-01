<script lang="ts">
    import Box from './BoxComponentOld.svelte';
    import { type BoxInfo, type BoxInterface, defaultBox, defaultBoxInfo } from './box';
    import { boxAdjust, count } from './store';

    // export let boxAdjust: BoxInfo;
    // export let count: number;
    export let selected: boolean = false;
    export let stack: BoxInterface; //= structuredClone(defaultBox);

    let selectedChildren: boolean[] = new Array(stack.children.length).fill(false);

    $: if (selected) stack.boxInfo = $boxAdjust;

    /*
     * Adjust the number of children
     */
    $: {
        if (selected === true) {
            if (stack.children.length < $count) {
                stack.children = [...stack.children, structuredClone(defaultBox)];
                console.log('added a fucking child', $count, stack.children.length);
            } else if (stack.children.length > $count) {
                stack.children.pop();
                stack = stack;
            }
        }
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="container"
    style="display: {stack.boxInfo.display}; 
            flex-direction: {stack.boxInfo['flex-direction']};
            flex-wrap: {stack.boxInfo['flex-wrap']};
            justify-content: {stack.boxInfo['justify-content']};
            align-items: {stack.boxInfo['align-items']};
            align-content:  {stack.boxInfo['align-content']};
            width: {stack.boxInfo.width.value + stack.boxInfo.width.unit};
            height: {stack.boxInfo.height.value + stack.boxInfo.height.unit};
             "
>
    {#each { length: stack.children.length } as _, i}
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
            class="contents"
            on:keydown={() => {
                console.log('keydown');
            }}
            on:click|preventDefault={() => {
                selectedChildren = new Array(stack.children.length).fill(false);
                selected = false;
                count.set(0);
                boxAdjust.set(defaultBoxInfo);
                selectedChildren[i] = true;
                console.log('selected' + i);
            }}
        >
            <Box stack={structuredClone(defaultBox)} selected={selectedChildren[i]} />
            <!-- {$} {count} -->
            <!-- bind:stack={stack.children[i]} -->
        </div>
    {/each}
</div>

<!-- {selected ? 'background-color: #cc5c5c' : ''} -->

<style lang="postcss">
    .container {
        @apply border-2 border-black dark:border-white bg-black dark:bg-white bg-opacity-0 hover:bg-opacity-10;
        /*  padding: 10%; */
    }
</style>
