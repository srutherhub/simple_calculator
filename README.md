<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Calculator</title>
    <link rel="stylesheet" href="calculator.css" />
  </head>
  <body>
    <table>
      <thead>
        <tr>
          <td colspan="4" id="display" >&nbsp;</td>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <th><button id="multiply" onclick="updateDisplay('*');summer('*')">*</button></th>
          <th><button id="divide" onclick="updateDisplay('/');summer('/')">/</button></th>
          <th><button id="power" onclick="updateDisplay('^');summer('^')">^</button></th>
          <th><button id="clear" onclick="clearDisplay()">clr</button></th>
        </tr>
        <tr>
          <th>
            <button id="one" value="1" onclick="updateDisplay(1);summer('1')">1</button>
          </th>
          <th>
            <button id="two" value="2" onclick="updateDisplay(2);summer('2')" >2</button>
          </th>
          <th>
            <button id="three" value="3" onclick="updateDisplay(3);summer('3')">3</button>
          </th>
          <th>
            <button id="plus" value="+" onclick="updateDisplay('+');summer('+')">+</button>
          </th>
        </tr>
        <tr>
          <th>
            <button id="four" value="4" onclick="updateDisplay(4);summer('4')">4</button>
          </th>
          <th>
            <button id="five" value="5" onclick="updateDisplay(5);summer('5')">5</button>
          </th>
          <th>
            <button id="six" value="6" onclick="updateDisplay(6);summer('6')">6</button>
          </th>
          <th>
            <button id="minus" value="-" onclick="updateDisplay('-');summer('-')">-</button>
          </th>
        </tr>
        <tr>
          <th>
            <button id="seven" value="7" onclick="updateDisplay(7);summer('7')">7</button>
          </th>
          <th>
            <button id="eight" value="8" onclick="updateDisplay(8);summer('8')">8</button>
          </th>
          <th>
            <button id="nine" value="9" onclick="updateDisplay(9);summer('9')">9</button>
          </th>
          <th >
            <button id="equal" value="=" onclick="calculate()">=</button>
          </th>
        </tr>
        <tr>
          <th><button id="parenthesis" onclick="updateDisplay(parenSwitch());summer(parenSwitch2())">()</button></th>
          <th>
            <button id="zero" value="0" onclick="updateDisplay(0);summer('0')">0</button>
          </th>
          <th><button id="decimal" value="." onclick="updateDisplay('.');summer('.')">.</button></th>
        </tr>
      </tbody>
    </table>
    <script src="calculator.js">
    </script>
  </body>
</html>
