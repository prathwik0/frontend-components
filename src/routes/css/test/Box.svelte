<script lang="ts">
    import Box from './Box.svelte';
    import { BoxClass } from './box';

    export let boxAdjust: BoxClass;

    let boxInfo = new BoxClass();
    let selected: number = -1; /* indicates which child is selected */
    let childClick: boolean = false; /* indicates whether child has to be unselected or not */

    /*
     * Choose the box to adjust - parent or child
     */
    $: {
        if (selected === 0) {
            boxInfo = boxAdjust;
        } else {
            boxInfo.children[selected - 1] = boxAdjust;
        }
    }

    /*
     * Adjust the number of children
     */
    $: {
        if (selected === 0) {
            while (boxInfo.children.length < boxAdjust.count) {
                boxInfo.children = [...boxInfo.children, new BoxClass()];
            }
            while (boxInfo.children.length > boxAdjust.count) {
                boxInfo.children.pop();
                boxInfo.children = boxInfo.children;
            }
        } else {
            while (boxInfo.children[selected - 1].children.length < boxAdjust.count) {
                boxInfo.children[selected - 1].children = [...boxInfo.children[selected - 1].children, new BoxClass()];
            }
            while (boxInfo.children[selected - 1].children.length > boxAdjust.count) {
                boxInfo.children[selected - 1].children.pop();
                boxInfo.children[selected - 1].children = boxInfo.children[selected - 1].children;
            }
        }
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    on:keydown={() => {
        console.log('keydown');
    }}
    on:click={() => {
        if (childClick === false) {
            selected = 0;
            boxAdjust = boxInfo;
        } else {
            childClick = false;
        }
    }}
    class="container"
    style="display: {boxInfo.display}; 
            flex-direction: {boxInfo['flex-direction'].value};
            flex-wrap: {boxInfo['flex-wrap'].value};
            justify-content: {boxInfo['justify-content'].value};
            align-items: {boxInfo['align-items'].value};
            align-content:  {boxInfo['align-content'].value};
            width: {boxInfo.width.value + boxInfo.width.unit};
            height: {boxInfo.height.value + boxInfo.height.unit}"
>
    {#each { length: boxInfo.children.length } as _, i}
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
            style="display: contents;"
            on:keydown={() => {
                console.log('keydown');
            }}
            on:click={() => {
                childClick = true;
                if (selected !== i + 1) {
                    selected = i + 1;
                    boxAdjust = boxInfo.children[i];
                } else {
                    selected = 0;
                    boxAdjust = boxInfo;
                }
            }}
        >
            <Box bind:boxAdjust={boxInfo.children[i]} />
        </div>
    {/each}
</div>

<style lang="postcss">
    .container {
        @apply border-2 border-black dark:border-white bg-black dark:bg-white bg-opacity-0 hover:bg-opacity-10;
        /*  padding: 10%; */
    }
</style>
