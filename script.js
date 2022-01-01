// SOLUTION A
// const greyCard = document.querySelector('.grey-card-content')
// const btn = document.querySelector('.arrow')

// const displayGrey = () => {
//     greyCard.classList.toggle('show')
// }

// btn.addEventListener('click',displayGrey)



// SOLUTION B:
const greyCard = document.querySelector('.grey-card-content')
const btn = document.querySelector('.arrow')
const changeFilling = document.querySelector(".interior-arrow")

btn.addEventListener('click', ()=>{
    greyCard.classList.toggle('show');
    btn.classList.toggle('active');
    changeFilling.classList.toggle('actif');
})

