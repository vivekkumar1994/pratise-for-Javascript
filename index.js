const firstrandom = Math.floor(Math.random() * 6) +1

const firstdiceimage = 'Asserts/dice' + firstrandom +'.png';


document.querySelectorAll('img')[0].setAttribute('src',firstdiceimage)