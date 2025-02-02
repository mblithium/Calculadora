<script>
    import { globalState } from "../../shared.svelte";

    let props = $props();

    function updateExpression(value) {
        globalState.exp.push(String(value));
    }
</script>

<button class="numberbtn" onclick={ () => updateExpression(props.value) } >{props.value}</button>