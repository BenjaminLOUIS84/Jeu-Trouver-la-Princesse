function shuffleChildren(parent) {                      //Pour rendre l'ordre des portes aléatoire utiliser la fonction shuffleChildren
    let children = parent.children
    let i = children.length, k, temp

    while (--i > 0) {

        k = Math.floor(Math.random() * (i + 1))
        temp = children[k]
        children[k] = children[i]
        parent.appendChild(temp)
    }
}

function next() {                                       //Après avoir créer le déroulement du jeu ci après celui-ci est inscrit dans une fonction
    let box6 = document.createElement("div")            //Par convention on écrit les fonctions au début du code
    box6.classList.add("door-close")
    let board6 = document.querySelector("#door")
    let nb = 1

    for (let i = 1; i <= 3; i++) {
        let newbox6 = box6.cloneNode()
        board6.appendChild(newbox6)
        newbox6.addEventListener("click", function () {
            console.log("Porte n°" + i + ", click!")

            if (i => nb) {
                newbox6.classList.add("door-open")
                if (i == 1) {
                    newbox6.classList.add("door-open")
                }
                else if (i == 2) {
                    newbox6.classList.add("princesse")
                }
                else if (i == 3) {
                    newbox6.classList.add("ganon")
                }
                nb++
            }
            if (i == 3) {
                board6.querySelectorAll(".door-close").forEach(function (validBox) {
                    validBox.classList.remove("door-close")})
                board1.removeChild(box0)
            }
            if (i == 2) {
                board6.querySelectorAll(".door-close").forEach(function (validBox) {
                    validBox.classList.remove("door-close") })
                board2.appendChild(box3)
            }
        })
    }
    shuffleChildren(board6)
}

//  ETAPE   1.1   Créer les 3 Vies

const box = document.createElement("div")               //Déclarer l'élément HTML "box" avec (const ou let) et l'instancier avec la fonction createElement                                       
const box0 = document.createElement("div")
const box1 = document.createElement("div")

box.classList.add("heart")                              //Modifier sa propriété classList pour améliorer cet élément dans le CSS en lui ajoutant "box"
box0.classList.add("heart")                             //Dans le CSS attribuer une image coeur à l'élément
box1.classList.add("heart")

const board1 = document.querySelector("#life")          //Pour modifier cet élément dans le JavaScript on peut créer un selecteur de requête (mode plus dynamique)
board1.appendChild(box)                                 //Pour afficher les éléments HTML utiliser appendChild() 
board1.appendChild(box0)
board1.appendChild(box1)                                //3 Coeurs seront afficher au début du jeu ceux ci pourront disparaitre au cours du jeu

//  ETAPE   1.2   Créer les Succès (apparait chaque fois que la princesse est trouvée, ceux ci ne seront pas afficher au début du jeu)

const box2 = document.createElement("div")
const box3 = document.createElement("div")
const box4 = document.createElement("div")

box2.classList.add("star")                              //Dans le CSS attribuer une image étoile à l'élément
box3.classList.add("star")
box4.classList.add("star")

const board2 = document.querySelector("#success")

//  ETAPE   2   Créer les 3 Portes et le fonctionnement d'une partie (Déroulement du jeu)

//  PARTIE 1    Tomber soit sur une porte vide, soit sur la princesse soit sur le monstre

let box5 = document.createElement("div")                               
box5.classList.add("door-close")                        //Dans le CSS attribuer une image de porte fermée à l'élément
let board5 = document.querySelector("#door")
let nb = 1                                              //Déclarer la variable nb initialisée à 1 et servira pour créer et gérer des conditions

for (let i = 1; i <= 3; i++) {                          //Créer une boucle for pour afficher avec appendChild() l'élément HTML board5 (porte fermée)
    let newbox5 = box5.cloneNode()                      //pour générer 3 éléments du même type (newbox5) automatiquement avec la fonction cloneNode()
    board5.appendChild(newbox5)                         //Afficher les 3 portes
                                                
    newbox5.addEventListener("click", function () {     //Rendre les éléments de base cliquables en ajoutant un écouteur d'évènements avec la fonction addEventListener()
        console.log("Porte n°" + i + ", click!")        //Afficher dans la consôle pour vérifier si le click des 3 portes est opérationel

        if (i => nb) {                                  //Conditions pour orchestrer le jeu
            newbox5.classList.add("door-open")          //Au click si nb est supérieur ou égale à 1 modifier avec classList en transformant l'image de porte fermée en porte ouverte 
            if (i == 1) {                       
                newbox5.classList.add("door-open")      //Si nb == 1 alors on affichera une image de porte ouverte à la place de l'image de porte fermée
            }
            else if (i == 2) {                          
                newbox5.classList.add("princesse")      //Si nb == 2 alors on affichera une image de princesse
            }
            else if (i == 3) {
                newbox5.classList.add("ganon")          //Si nb == 3 alors on affichera une image de monstre
            }
            nb++
        }

        //Une vie en moins lorsque ganon est dernière la porte

        if (i == 3) {                                   
            board5.querySelectorAll(".door-close").forEach(function (validBox) {
                validBox.classList.remove("door-close") //Permet supprimer les deux autres portes lorqsque l'image du monstre est affichée
            })
            board1.removeChild(box)                     //Permet de faire disparaitre un coeur
        }

        //Un succès en plus lorsque princesse est dernière la porte

        if (i == 2) {
            board5.querySelectorAll(".door-close").forEach(function (validBox) {
                validBox.classList.remove("door-close")
            })
            board2.appendChild(box2)                    //Permet de faire apparaitre une étoile
        }
    })

    shuffleChildren(board5)                             //Permet de mélanger l'ordre des numéros de porte
}

//  ETAPE   3.1   Créer un bouton Reset

const box8 = document.createElement("div")
box8.classList.add("buttonR")
const board3 = document.querySelector("#reset")
board3.appendChild(box8)
box8.innerText = "RESET"                                //Pour inscrire du texte dans un noeud
box8.addEventListener("click", function () {
    location.reload()                                   //Fonction pour reset le jeu
})

///  ETAPE   3.2   Créer un bouton Next

const box9 = document.createElement("div")
box9.classList.add("buttonN")
const board4 = document.querySelector("#next")
board4.appendChild(box9)
box9.innerText = "NEXT"
box9.addEventListener("click", function () {
    next()                                             //Pour passer à la partie suivante : CF Fonction NEXT
})





//board5.remove("door-close")//Supprime toute les éléments
//board5.append(box5, box6, box7)//Ajoute tout les éléments

//board2.appendChild(box2)//Ajoute un élément
//board1.removeChild(box)//Supprime un élément


