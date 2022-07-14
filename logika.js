function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand)
    
}
function lichilnik() {
    lich++;
    document.querySelector('#lich').innerHTML = lich;
}
function lichilnikminus() {
    lich--;
    document.querySelector('#lich').innerHTML = lich;
}
const gifmasb = ['min1.gif', 'min2.gif', 'min3.gif', 'min4.gif', 'min5.gif', 'min6.gif', 'min7.gif', 'min8.gif', 'min9.gif', 'min10.gif', 'min11.gif', 'min12.gif'];
const gifmasl = ['minl1.gif', 'minl2.gif', 'minl3.gif', 'minl4.gif', 'minl5.gif', 'minl6.gif', 'minl7.gif', 'minl8.gif', 'minl9.gif', 'minl10.gif', 'minl11.gif', 'minl12.gif'];
// let a1 = 0
// let b1 = 0
let c = 0
let znak = 1
let lich = 0;

function start() {
    console.log(this);
    const a = document.querySelector('#argumentone');
    const b = document.querySelector('#argumenttwo');
    const symbol = document.querySelector('#symbol');
    const result =  document.querySelector('#result');
    document.querySelector('#gifka').style.display = 'none';
    result.classList.remove('result_error');
    result.classList.remove('result_done');

 //   znak = Math.random() < 0.5 ? -1 : 1;
 //   symbol.innerHTML = znak === -1 ? '-' : '+';
    a.innerHTML = randomInteger(1, 15);
    b.innerHTML = randomInteger(1, 15);
    if (Number(a.textContent) >= Number(b.textContent)) {
        znak = Math.random() < 0.5 ? -1 : 1;
        symbol.innerHTML = znak === -1 ? '-' : '+';
        
    }
    else {
        znak = 1;
        symbol.innerHTML = znak === -1 ? '-' : '+';
        
    }
    
 //   if (Number(a.textContent) >= Number(b.textContent)) {
 //       symbol.innerHTML = znak === -1 ? '-' : '+';
 //   }
 //   else {
 //       symbol.innerHTML = znak === 1 ? '+' : '+';
 //   }
// document.querySelector('.result_error').background = 'background: white';
 document.querySelector('#gifka').src = '';
    document.querySelector('#result').innerHTML = '';
    document.querySelector('#vidpovid').value = '';
    // document.querySelector('#vidpovid').innerHTML = a.value;
    document.querySelector('button').onclick = start;
    document.querySelector('#vidpravit').onclick =  () => {
        let c = document.querySelector('#vidpovid').value;

        const isSum = checkSum(Number(a.textContent),Number(b.textContent), Number(c));

            if (isSum) {
                // alert('Відповідь правильна')
                result.classList.add('result_done');
                result.classList.remove('result_error');
                let x = randomInteger(0, 11);
                let v = gifmasl[x];
                document.querySelector('#gifka').style.display = 'flex';
                document.querySelector('#gifka').src = v;
                lichilnik();
                setTimeout(start, 5000);
            }
            else {
                // alert('Відповідь не вірна!')
                result.classList.add('result_error');
                result.classList.remove('result_done');
                let x = randomInteger(0, 11);
                let v = gifmasb[x];
                document.querySelector('#gifka').style.display = 'flex';
                document.querySelector('#gifka').src = v;
                lichilnikminus();
            }
        }

        function checkSum(a, b, c) {
            const sum = a + (znak * b);
           result.innerHTML = c;
            return sum === c;
        };
        
        
            
}
   start();

 //   document.querySelector('#vidpravit').onsubmit = function() {
   //     let c = document.querySelector('#vidpovid').value;
   //     if a + b === c {
   //         alert('Відповідь правильна')
   //     }
  //      else {
   //         alert('Відповідь не вірна!')
   //     }

  //  }
//});






