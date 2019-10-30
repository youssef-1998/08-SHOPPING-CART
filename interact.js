const crois = document.querySelectorAll('.fa-times'); // converstoin arr mawjouda lota
const heart = Array.from(document.querySelectorAll('.fa-heart')); // Convert NodeList => heart to Array => heart
const plus = Array.from(document.querySelectorAll('.fa-plus-circle')); // Convert NodeList => plus to Array => plus

// arr quantity de pro
const nombres = Array.from(document.querySelectorAll('.nombre')); // Convert NodeList => nombre to Array => nombres 

const moins = Array.from(document.querySelectorAll('.fa-minus-circle')); // Convert NodeList => moins to Array => moins

// arr prixs de pro
const prixs = Array.from(document.querySelectorAll('.prix')); // Convert NodeList => prix to Array => prixs

const total = document.querySelector('.somme');

//*******************************************************************************************//

var allCrois = Array.from(crois)                        // Convert NodeList => crois to Array => allCrois
for (let i of allCrois) {                               // boucle pour parcourir tableau allCrois i === allCrois[i]
    i.addEventListener('click', function () {           // creation d'un event click sur btn crois === allCrois[i]                                     
        if (i.nextElementSibling.style.color !== 'red') // if eli ba3ed el i = crois , heart coler not red
            i.parentElement.parentElement.remove()      // supprimer parentelement = row product
    })
}

for (let i of heart) {                                 // boucle pour parcourir tableau allCrois i === allheart[i]
    i.addEventListener('click', function () {          // creation d'un event click sur btn heart === allheart[i]                                        
        if (i.style.color === 'red')                   // if color heart red
            i.style.color = 'black'                    // change color heart blak
        else i.style.color = 'red'                     // change color heart red
    })
}
for (let i of plus) {                          // boucle pour parcourir tableau plus i === plus[i]
    i.addEventListener('click', function () {  // creation d'un event click sur btn plus === plus[i]
        i.nextElementSibling.innerHTML++       // selection le elemnt p nxt (plus) & acside a la valeur de p par innerhtml & ajoote + 1 OU bien i.previousElementSibling.innerHTML = Number(i.previousElementSibling.innerHTML) - 1
        //**i.parentElement.nextElementSibling.querySelector('.prix')**// OU b1 //***  i.parentElement.nextElementSibling.children[0].innerHTML  ***//       
        total.innerHTML = (parseFloat(total.innerHTML) + parseFloat(i.parentElement.nextElementSibling.querySelector('.prix').innerHTML)) + ' €' 
    })
}

for (let i of moins) {                              // boucle pour parcourir tableau moins i === moins[i]
    i.addEventListener('click', function () {       // creation d'un event click sur btn plus === moins[i]
        if (i.previousElementSibling.innerHTML > 0) // condetoin sur la valeur de p > 0
            i.previousElementSibling.innerHTML--    // selection le elemnt p previous (moins) & acside a la valeur de p par innerhtml & enlever - 1
            
            total.innerHTML = (parseFloat(total.innerHTML) - parseFloat(i.parentElement.nextElementSibling.querySelector('.prix').innerHTML)) + ' €'
            if(parseFloat(total.innerHTML) <= 0){
                total.innerHTML = 0 + ' €'
            }
    })
}
