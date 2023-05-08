//  ETAPE   4   Créer les fonctions

//Pour rendre l'ordre des portes aléatoire

function shuffleChildren(parent) {
    let children = parent.children
    let i = children.length, k, temp
    while (--i > 0) {

        k = Math.floor(Math.random() * (i + 1))
        temp = children[k]
        children[k] = children[i]
        parent.appendChild(temp)
    }
}

//  ETAPE   1.1   Créer les 3 Vies

const box = document.createElement("div")
const box0 = document.createElement("div")
const box1 = document.createElement("div")

box.classList.add("heart")
box0.classList.add("heart")
box1.classList.add("heart")

const board1 = document.querySelector("#life")
board1.appendChild(box)
board1.appendChild(box0)
board1.appendChild(box1)

//  ETAPE   1.2   Créer les Succès (apparait chaque fois que la princesse est trouvée)

const box2 = document.createElement("div")
const box3 = document.createElement("div")
const box4 = document.createElement("div")

box2.classList.add("star")
box3.classList.add("star")
box4.classList.add("star")

const board2 = document.querySelector("#success")

//  ETAPE   2   Créer les 3 Portes

const box5 = document.createElement("div")
const box6 = document.createElement("div")
const box7 = document.createElement("div")

box5.classList.add("door-close")
box6.classList.add("door-close")
box7.classList.add("door-close")

const board5 = document.querySelector("#door")

let nb = 1

for (let i = 1; i <= 3; i++) {
    const newbox5 = box5.cloneNode()
    board5.appendChild(newbox5)

    newbox5.addEventListener("click", function () {
        console.log("Porte n°" + i + ", click!")

        //Pour ouvrir les portes dans n'importe quel ordre
        //et tomber au hasard sur une porte vide, la princesse ou ganon

        if (i => nb) {
            newbox5.classList.add("door-open")
            if (i == 1) {
                newbox5.classList.add("door-open")
            }
            else if (i == 2) {
                newbox5.classList.add("princesse")
            }
            else if (i == 3) {
                newbox5.classList.add("ganon")
            }
            nb++
        }

        //Une vie en moins lorsque ganon est dernière la porte

        if (i == 3) {

            board5.querySelectorAll(".door-close").forEach(function (validBox) {
                validBox.classList.remove("door-close")
            })

            board1.removeChild(box)

        }

        //Un succès en plus lorsque princesse est dernière la porte

        if (i == 2) {

            board5.querySelectorAll(".door-close").forEach(function (validBox) {
                validBox.classList.remove("door-close")
            })

            board2.appendChild(box2)

        }

    })

}


//  ETAPE   3   Créer un bouton Reset

const box8 = document.createElement("div")

box8.classList.add("button")

const board3 = document.querySelector("#reset")

board3.appendChild(box8)

box8.innerText = 1/////////////////////////////////////////////Comment mettre du texte?

box8.addEventListener("click", function () {
    console.log("Bouton" + "click!")


    
    //board5.remove("door-close")//Supprime toute les éléments
    //board5.append(box5, box6, box7)//Ajoute tout les éléments

    //board2.appendChild(box2)//Ajoute un élément
    //board1.removeChild(box)//Supprime un élément

})

//  ETAPE   5   Matérialiser les fonctions

shuffleChildren(board5)

