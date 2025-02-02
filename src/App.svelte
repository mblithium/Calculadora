<script module lang="js">
  import NumberButton from './components/NumberButton/NumberButton.svelte';
  import ActionButton from './components/ActionButton/ActionButton.svelte';
  import { globalState } from './shared.svelte';

  function evaluateExpression() {
    try {
          let exp = eval(globalState.exp.join("")) 
          return exp;
    } catch (e) { 
          console.log(e) 
    }
  }

  function reasignExp(target) {
    globalState.exp = target.value.replaceAll(" ", "&").split("&");
  }

</script>

<main>

  <div id="display-area">
    <div id="resultScreen"> { evaluateExpression() } </div>
    <input type="text" on:change={ (e) => reasignExp(e.target) } id="display" value="{globalState.exp.join("")}" />
  </div>

  <div id="btn-area">
    <NumberButton value="1" />
    <NumberButton value="2" />
    <NumberButton value="3" />
    <NumberButton value="4" />
    <NumberButton value="5" />
    <NumberButton value="6" />
    <NumberButton value="7" />
    <NumberButton value="8" />
    <NumberButton value="9" />
    <NumberButton value="0" />

    <ActionButton act="division" actionName="/" />
    <ActionButton act="multiplication" actionName="*" />
    <ActionButton act="subtraction" actionName="-" />
    <ActionButton act="addition" actionName="+" />
    <ActionButton act="openParenthesis" actionName="(" />
    <ActionButton act="closeParenthesis" actionName=")" />

    <ActionButton act="backspace" actionName="<" />
    <ActionButton act="clear" actionName="Apagar" />
  </div>
</main>
