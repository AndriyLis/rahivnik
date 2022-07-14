function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand)
}
let a = ['ЩУКА', 'ЖАБА', 'МИША', 'МИЛО', 'РИБА', 'НОГА', 'ШИЛО', 'МОРЕ', 'ХАТА', 'РУКА', 'НОРА', 'ГУБИ', 'ВАЗА', 'РІКА', 'ВАТА',
 'ВУХО', 'МУХА', 'СОВА', 'ЗИМА', 'ВОДА', 'ВАГИ', 'ШАФА', 'ЛІКИ', 'СІНО', 'ЛІТО', 'ДИНЯ', 'КОРА', 'НЕБО', 'ВІНИК', 'КОМАР', 'ГАРАЖ', 
'ДИВАН', 'ЛІКАР', 'РОБОТ', 'ПІРАТ', 'КАБАН', 'КАВУН', 'СОКІЛ', 'ПАВУК', 'МОРЯК', 'ЛИМОН', 'ПЕНАЛ', 'КИНИК', 'ХОКЕЙ', 'БАРАН', 'КАЧУР',
 'ГОЛУБ', 'БОБЕР'];
let img = ['./img2/img1.jpg', './img2/img2.jpg', './img2/img3.jpg', './img2/img4.jpg', './img2/img5.jpg', './img2/img6.jpg',
 './img2/img7.jpg', './img2/img8.jpg', './img2/img9.jpg', './img2/img10.jpg', './img2/img11.jpg', './img2/img12.jpg', './img2/img13.jpg',
  './img2/img14.jpg', './img2/img15.jpg', './img2/img16.jpg', './img2/img17.jpg', './img2/img18.jpg', './img2/img19.jpg', './img2/img20.jpg',
   './img2/img21.jpg', './img2/img22.jpg', './img2/img23.jpg', './img2/img24.jpg', './img2/img25.jpg', './img2/img26.jpg', './img2/img27.jpg',
    './img2/img28.jpg', './img2/img29.jpg', './img2/img30.jpg', './img2/img31.jpg', './img2/img32.jpg', './img2/img33.jpg', './img2/img34.jpg', 
'./img2/img35.jpg', './img2/img36.jpg', './img2/img37.jpg', './img2/img38.jpg', './img2/img39.jpg', './img2/img40.jpg', './img2/img41.jpg', 
'./img2/img42.jpg', './img2/img43.jpg', './img2/img44.jpg', './img2/img45.jpg', './img2/img46.jpg', './img2/img47.jpg', './img2/img48.jpg'];
function start() {
    let numberImg = randomInteger(0, 47);
    document.querySelector('#slovo').innerHTML = a[numberImg];
   
// ---------------------------------------------------------------------------------------------------------------------

    let posicion
    posicion = randomInteger(1, 3);
    let q = '#img'
    let v = 'img'
    let posicionimg = `${q}${posicion}`
    document.querySelector(posicionimg).src = img[numberImg];
    // ----------------------------------------------------------------------------------------------------------
    let numberImg2;
    if (posicionimg == '#img2') {
        numberImg2 = randomInteger(0, 47);
    if (numberImg == numberImg2) {
        numberImg2 = randomInteger(0, 47);
        if (numberImg == numberImg2) {
            numberImg2 = randomInteger(0, 47);
            document.querySelector('#img1').src = img[numberImg2];
        }
        else {
            document.querySelector('#img1').src = img[numberImg2];
        };
        document.querySelector('#img1').src = img[numberImg2];
    }
    else {
            document.querySelector('#img1').src = img[numberImg2];
    };
    }
    else {
        numberImg2 = randomInteger(0, 47);
        if (numberImg == numberImg2) {
            numberImg2 = randomInteger(0, 47);
            if (numberImg == numberImg2) {
                numberImg2 = randomInteger(0, 47);
                document.querySelector('#img2').src = img[numberImg2];
            }
            else {
                document.querySelector('#img2').src = img[numberImg2];
            };
            document.querySelector('#img2').src = img[numberImg2];
        }
        else {
                document.querySelector('#img2').src = img[numberImg2];
        };
    }
// -----------------------------------------------------------------------------------------------------------------------
    let numberImg3
    if (posicionimg == '#img3'){
        numberImg3 = randomInteger(0, 47);
    if (numberImg3 == numberImg || numberImg3 == numberImg2) {
        numberImg3 = randomInteger(0, 47);
        if (numberImg3 == numberImg || numberImg3 == numberImg2) {
            numberImg3 = randomInteger(0, 47);
            document.querySelector('#img1').src = img[numberImg3];
        }
        else {
            document.querySelector('#img1').src = img[numberImg3];
        }
    }
    else {
        document.querySelector('#img1').src = img[numberImg3];
    }
    }
    else {
        numberImg3 = randomInteger(0, 47);
        if (numberImg3 == numberImg || numberImg3 == numberImg2) {
            numberImg3 = randomInteger(0, 47);
            if (numberImg3 == numberImg || numberImg3 == numberImg2) {
                numberImg3 = randomInteger(0, 47);
                document.querySelector('#img3').src = img[numberImg3];
            }
            else {
                document.querySelector('#img3').src = img[numberImg3];
            }
        }
        else {
            document.querySelector('#img3').src = img[numberImg3];
        }

    }
    console.log(posicionimg);
    posicionimg = `${v}${posicion}`
    document.querySelector('#img1').onclick = function() {
        p = document.querySelector('#img1').id;
        if (p == posicionimg) {
            document.querySelector('#img1').style.border = '20px ridge green'
            // alert('Правильно')
        }
        else {
            document.querySelector('#img1').style.border = '20px ridge red'
        }
    }
    document.querySelector('#img2').onclick = function() {
        o = document.querySelector('#img2').id;
        if (o == posicionimg) {
            document.querySelector('#img2').style.border = '20px ridge green'
        }
        else {
            document.querySelector('#img2').style.border = '20px ridge red'
        }
    }
    document.querySelector('#img3').onclick = function() {
        i = document.querySelector('#img3').id;
        if (i == posicionimg) {
            document.querySelector('#img3').style.border = '20px ridge green'
        }
        else {
            document.querySelector('#img3').style.border = '20px ridge red'
        }
    }
    
}
start()
document.querySelector('#button').onclick = () => {
    document.querySelector('#img1').style.border = '2px solid black'
    document.querySelector('#img2').style.border = '2px solid black'
    document.querySelector('#img3').style.border = '2px solid black'

start()
} 

