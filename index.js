let num1 = document.querySelector('.num1')
let num2 = document.querySelector('.num2')
let input = document.querySelector('input')
num1.innerHTML = Math.ceil(Math.random() * 10)
num2.innerHTML = Math.ceil(Math.random() * 10)
let score = document.querySelector('.score')
let count = 0

input.addEventListener('keypress', (event) => {
 
    if (event.key === 'Enter') {
        let response = parseInt(input.value)
    
        console.log(response)
        
        if((parseInt(num1.innerHTML) + parseInt(num2.innerHTML)) == response) {
            count++
            score.innerHTML = count
            num1.innerHTML = Math.ceil(Math.random() * 10)
            num2.innerHTML = Math.ceil(Math.random() * 10)
            input.value = ''
        } else {
            count--
            score.innerHTML = count
            input.value = ''
        }
    }
})