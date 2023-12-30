'use strict'

// Al hacer CLICK en burguer le ADD la clase active a burguermenu , burguermenuH2 & burguermenuLi
    // Al hacer CLICK en burguermenu__button le REMOVE la clase active a burguermenu , burguermenuH2 & burguermenuLi

const burguer = document.querySelector(".burguer")
const burguermenu = document.querySelector(".burguermenu")
const burguermenuH2 = document.querySelector(".burguermenu__h2")
const burguermenuUl = document.querySelector(".burguermenu__ul")
const burguermenuButton = document.querySelector(".burguermenu__button")
    console.log (burguer)
    console.log (burguermenu)
    console.log (burguermenuH2)
    console.log (burguermenuUl)
    console.log (burguermenuButton)

    burguer.addEventListener("click" , () => {
        burguermenu.classList.add("active")
        burguermenuH2.classList.add("active")
        burguermenuUl.classList.add("active")

    })

    burguermenuButton.addEventListener("click" , () => {
        burguermenu.classList.remove("active")
        burguermenuH2.classList.remove("active")
        burguermenuUl.classList.remove("active")
    })