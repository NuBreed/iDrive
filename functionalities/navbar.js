//nav bar toggling
const navbar = document.querySelector('.navbar')
const toggleBtn = document.querySelector('.fa-bars')
const closeBtn = document.querySelector('.fa-times-circle')

toggleBtn.addEventListener('click', function() {
    navbar.classList.add('show')
    toggleBtn.style.display = 'none'
    closeBtn.style.display = 'inline'
})
closeBtn.addEventListener('click', function() {
    navbar.classList.remove('show')
    toggleBtn.style.display = 'inline'
    closeBtn.style.display = 'none'
})

// //nav bar togggling
// const navbar = document.querySelector('.navbar')
// const toggleBtn = document.querySelector('.fa-bars')
// const closeBtn = document.querySelector('.fa-times-circle')

// toggleBtn.addEventListener('click', function () {
//   navbar.classList.add('show')
//   toggleBtn.style.display = 'none'
//   closeBtn.style.display = 'inline'
// })
// closeBtn.addEventListener('click', function () {
//   navbar.classList.remove('show')
//   toggleBtn.style.display = 'inline'
//   closeBtn.style.display = 'none'
// })

const nextReview = document.querySelector('.next-btn')
const prevReview = document.querySelector('.prev-btn')

const reviewCard = document.querySelectorAll('.card-center')
console.log(reviewCard)
let index = 1
reviewCard[index].style.display = 'block'
    // nextReview.addEventListener('click', function() {
    //     console.log('next')
    //     for (let i = 0; i < reviewCard.length; i++) {
    //         reviewCard[i].style.display = 'none'
    //     }
    //     reviewCard[index + 1].style.display = 'inline'
    // })
    // prevReview.addEventListener('click', function() {
    //     console.log('prev')

//     reviewCard[--index].style.display = 'inline'
// })
// nextReview.addEventListener('click', function() {
//     reviewCard[index].style.display = 'none'
//     reviewCard[index + 1].style.display = 'block'

//     index++
// })
// prevReview.addEventListener('click', function() {
//     reviewCard[index].style.display = 'none'
//     reviewCard[index - 1].style.display = 'block'
//     index--
// })
nextReview.addEventListener('click', function() {
    if ((index = reviewCard.length)) {
        alert('done')
        return
    }
    // Show current
    reviewCard[index].style.display = 'block'
        // if i is 0 don't try to hide previous since it doesn't exist
    if (i != 0) {
        qlist[i - 1].style.display = 'none'
    }
    // Add one to i
    i++
})
prevReview.addEventListener('click', function() {
    reviewCard[index].style.display = 'none'
    reviewCard[index - 1].style.display = 'block'
    index--
})
prevReview.addEventListener('click', function() {
    console.log('deji')
    if (index === 0) {
        reviewCard[reviewCard.length - 1].style.display = 'block'
    }
    index--
})