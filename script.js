const adviceEl = document.querySelector('.text')
const dice = document.querySelector('.dice')
const number = document.querySelector('.number')

dice.addEventListener('click',function(){
    const advice = async function(){
       try{
        const res = await fetch('https://api.adviceslip.com/advice')
        const data = await res.json()
    
        const perAdvice = data.slip.advice
        adviceEl.innerHTML = perAdvice
       }catch(err){
        console.error('Cannot fetch data');
       }
    }
    advice()
})

