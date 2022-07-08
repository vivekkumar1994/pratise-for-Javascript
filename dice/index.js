const firstrandom = Math.floor(Math.random() * 6) +1

const firstdiceimage = 'Asserts/dice' + firstrandom +'.png';


document.querySelectorAll('img')[0].setAttribute('src',firstdiceimage)



const secondrandom = Math.floor(Math.random() * 6) +1

const seconddiceimage = 'Asserts/dice' + secondrandom +'.png';


document.querySelectorAll('img')[1].setAttribute('src',seconddiceimage)

if(firstrandom > secondrandom){
    if(false){
        document.getElementById("user1").innerHTML = 'the winner of user1'  
    }
    else{
        document.getElementById("user1").innerHTML = 'loose the match' 
        
    }
}

else if(firstrandom < secondrandom){
    document.getElementById("user2").innerHTML = 'the winner of user2'
}
else{
    document.getElementById("user3").innerHTML = 'tie'
    
}