
document.getElementById('text').addEventListener('input', function() {
    let input = this.value;
    let para = document.querySelector('.para');

    para.innerHTML = `
        <p id="Number"> <img src="img/1.png" alt="" id="img"> 1 Number (0-9)</p>
        <p id="Letter"> <img src="img/1.png" alt="" id="img1"> 12 Letter</p>
        <p id="Special"> <img src="img/1.png" alt="" id="img2"> 1 Special Character</p>
        <p id="Uppercase"> <img src="img/1.png" alt="" id="img3"> 1 Uppercase Letter</p>
        <p id="Lowercase"> <img src="img/1.png" alt="" id="img4"> 1 Lowercase Letter</p>
    `;

    let number = false;
    let letter = false;
    let special = false;
    let uppercase = false;
    let lowercase = false;


    for (const x of input) {
        
    
        let herry = x;
        if (!isNaN(herry) && herry !== ' ') {
            number = true;
        } else if (/[a-zA-Z]/.test(herry)) {
            letter = true;
            if (herry === herry.toUpperCase()) {
                uppercase = true;
            } else if (herry === herry.toLowerCase()) {
                lowercase = true;
            }
        } else if (/[^a-zA-Z0-9]/.test(herry)) {
            special = true;
        }
    }

    if (number) {
        document.getElementById('Number').style.color = 'white';
        document.getElementById('img').src="img/2.png" 
        document.getElementById('Number').style.background = 'blue';

    }
    if (letter) {
        document.getElementById('Letter').style.color = 'white';
        document.getElementById('Letter').style.background = 'blue';
        document.getElementById('img1').src="img/2.png" 


    }
    if (special) {
        document.getElementById('Special').style.color = 'white';
        document.getElementById('Special').style.background = 'blue';
        document.getElementById('img2').src="img/2.png" 
        
    }
    if (uppercase) {
        document.getElementById('Uppercase').style.color = 'white';
        document.getElementById('Uppercase').style.background = 'blue';
        document.getElementById('img3').src="img/2.png" 
        
    }
    if (lowercase) {
        document.getElementById('Lowercase').style.color = 'white';
        document.getElementById('Lowercase').style.background = 'blue';
        document.getElementById('img4').src="img/2.png" 
        
    }
});












// Mdn example .test() method

// const str = "hello world!";
// const result = /^hello/.test(str);

// console.log(result); // true



