let input1 = document.getElementById("input1")
let audio_correct1 = document.getElementById("correct")

input1.addEventListener('keyup', (e) => {
    if (input1.value === 'am') {
        audio_correct1.play()
        input1.style.color = 'limegreen'
        check1.style.visibility = 'visible'
        input1.disabled = true
    }
}) 
input1.addEventListener('keyup', (e) => {
    if (input1.value === 'a') {
        input1.style.color = 'limegreen'
    }
}) 
input1.addEventListener('keyup', (e) => {
    if (input1.value === 'is') {
        input1.style.color = 'red'
        check1.style.visibility = 'hidden'
    }
}) 
input1.addEventListener('keyup', (e) => {
    if (input1.value === 'are') {
        input1.style.color = 'red'
        check1.style.visibility = 'hidden'
    }
}) 

//Question 2
let input2 = document.getElementById("input2")
let audio_correct2 = document.getElementById("correct")

input2.addEventListener('keyup', (e) => {
    if (input2.value === 'is') {
        audio_correct2.play()
        input2.style.color = 'limegreen'
        check2.style.visibility = 'visible'
        input2.disabled = true
    }
}) 
input2.addEventListener('keyup', (e) => {
    if (input2.value === 'i') {
        input2.style.color = 'limegreen'
    }
}) 
input2.addEventListener('keyup', (e) => {
    if (input2.value === 'am') {
        input2.style.color = 'red'
        check2.style.visibility = 'hidden'
    }
}) 
input2.addEventListener('keyup', (e) => {
    if (input2.value === 'are') {
        input2.style.color = 'red'
        check2.style.visibility = 'hidden'
    }
}) 


//Question 3
let input3 = document.getElementById("input3")
let audio_correct3 = document.getElementById("correct")

input3.addEventListener('keyup', (e) => {
    if (input3.value === 'are') {
        audio_correct3.play()
        input3.style.color = 'limegreen'
        check3.style.visibility = 'visible'
        input3.disabled = true
    }
}) 
input3.addEventListener('keyup', (e) => {
    if (input3.value === 'a') {
        input3.style.color = 'limegreen'
    }
}) 

input3.addEventListener('keyup', (e) => {
    if (input3.value === 'ar') {
        input3.style.color = 'limegreen'
    }
})
input3.addEventListener('keyup', (e) => {
    if (input3.value === 'i') {
        input3.style.color = 'red'
        check3.style.visibility = 'hidden'
    }
}) 

input3.addEventListener('keyup', (e) => {
    if (input3.value === 'is') {
        input3.style.color = 'red'
        check3.style.visibility = 'hidden'
    }
})
input3.addEventListener('keyup', (e) => {
    if (input3.value === 'am') {
        input3.style.color = 'red'
        check3.style.visibility = 'hidden'
    }
}) 