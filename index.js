//Log in button event handler
const submit = document.querySelector('.submit')

submit.addEventListener('click', function() {
    const form = document.getElementById('form')
    form.style.display = 'none'

    const bankPage = document.getElementById('inside-bank')
    bankPage.style.display = 'block'
})

// diposite button event handler
const dipositeBtn = document.getElementById('diposite-btn')
dipositeBtn.addEventListener('click', function() {
    const dipositeNumber = getInputId('diposite-ammount')

    updateSpan('diposite-amount',dipositeNumber)
    updateSpan('total-amount', dipositeNumber)

    document.getElementById('diposite-ammount').value = ''
})

// withdraw button event handler
const withdrawBtn = document.getElementById('withdraw-btn')
withdrawBtn.addEventListener('click', function() {
    const withdrawNumber = getInputId('withdraw-ammount')

    updateSpan('withdraw-amount', withdrawNumber)
    updateSpan('total-amount', -1 * withdrawNumber)

    document.getElementById('withdraw-ammount').value = ''
})

function getInputId(id) {
    const withdrawAmount = document.getElementById(id).value
    const withdrawNumber = parseFloat(withdrawAmount)
    return withdrawNumber
}



function updateSpan(id,dipositeNumber) {
    const currentAmount = document.getElementById(id).innerText
    const currentNumber = parseFloat(currentAmount)
    const total = (dipositeNumber + currentNumber)
    document.getElementById(id).innerText = total
}

// class Person {
//     constructor(name) {
//         this.name = name
//         console.log(this.name)
//     }
//     static staticMethod() {
//         console.log('static method')
//     }
//     personGreet() {
//         console.log(this.name, 'hello')
//     }
// }

// const p = new Person('rafi')
// Person.staticMethod()
// p.personGreet()