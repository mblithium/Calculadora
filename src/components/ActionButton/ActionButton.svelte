<script>
    import { globalState } from "../../shared.svelte";

    let props = $props();

    function action(act) {
        switch(act) {
            case "clear":
                globalState.exp.splice(0);
                break;
            case "division":
                globalState.exp.push("/");
                break;
            case "multiplication":
                globalState.exp.push("*");
                break;
            case "subtraction":
                globalState.exp.push("-");
                break;
            case "addition":
                globalState.exp.push("+");
                break;
            case "openParenthesis":
                globalState.exp.push("(");
                break;
            case "closeParenthesis":
                globalState.exp.push(")");
                break;
            case "backspace":
                globalState.exp.pop();
                break;
        }
    }
</script>

<button class="actionBtn" onclick={ () => action(String(props.act)) }>
    {props.actionName}
</button>