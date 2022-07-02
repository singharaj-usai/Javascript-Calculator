function load() {

    var btns = document.querySelectorAll('#calculator span');
    var operators = ['+', '-', 'x', '÷'];
    var inputScreen = document.querySelector('#screen');
    var btnValue;
    var input;

    for(var i=0; i< btns.length; i++) {

        var decimalAdded = false;

        btns[i].addEventListener('click', function () {

            btnValue = this.innerHTML;
            input = inputScreen.innerHTML;

            switch (btnValue) {
                case 'C':
                    inputScreen.innerHTML = '';
                    decimalAdded = false;
                    break;
                case '=':
                  // Last char of string
                  var lastChar = input[input.length - 1];
                
