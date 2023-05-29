//Par convention on écrit les fonctions au début du code - Pour rendre l'ordre des portes aléatoire utiliser la fonction shuffleChildren

function shuffleChildren(parent) {                        //Fonctions éxécutées systématiquement:  shuffleChildren() - remove() - next()                  
    let children = parent.children
    let i = children.length, k, temp

    while (--i > 0) {

        k = Math.floor(Math.random() * (i + 1))
        temp = children[k]
        children[k] = children[i]
        parent.appendChild(temp)
    }
}

function remove() {                                      //Cette fonction permet de supprimer automatiquement au bout d'une seconde les éléments de la partie en cours

    setTimeout(function () {                             //setTimeout(function()){},1000); permet de déclencher une action à retardement suivant un delais 1000ms soit 1s
        board5.querySelectorAll(".door-open").forEach(function (validBox) {
            validBox.classList.remove("door-open")       //Supprime les images des portes ouvertes
        })
    }, 1000);

    setTimeout(function () {
        board5.querySelectorAll(".ganon").forEach(function (validBox) {
            validBox.classList.remove("ganon")           //Supprime les images des monstres
        })
    }, 1000);

    setTimeout(function () {
        board5.querySelectorAll(".princesse").forEach(function (validBox) {
            validBox.classList.remove("princesse")       //Supprime les images des princesses
        })
    }, 1000);
}                                                        //Après avoir créer le déroulement du jeu ci après celui-ci est inscrit dans la fonction next() 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function next() {                                        //CF Commentaires pour décrire cette fonction à voir plus bas là ou celle-ci à été créee                                   

    let box5 = document.createElement("div")
    box5.classList.add("door-close")
    let board5 = document.querySelector("#door")

    let nb = 1
    
    for (let i = 1; i <= 3; i++) {
        let newbox5 = box5.cloneNode()
        board5.appendChild(newbox5)

        newbox5.addEventListener("click", function () {
            console.log("Porte n°" + i + ", click!")

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

            //  Condition pour supprimer une vie lorsque le joueur tombe sur le monstre 

            if (i == 3) {
                board5.querySelectorAll(".door-close").forEach(function (validBox) {
                    validBox.classList.remove("door-close") //Permet supprimer les deux autres portes lorqsque l'image du monstre est affichée
                })
    
                let newbox = box.cloneNode()                  //Permet de faire disparaitre un coeur
                board.firstElementChild.remove(newbox)        //Faire disparaitre un coeur avec remove()
                
                
                if (heart == 1) {                            
                    alert("GAME OVER !")                     //Si les 3 coeurs disparaissent un message d'alerte GAME OVER ! s'affiche et le jeu reset
                    setTimeout(function () {                 
                        location.reload()                    
                    }, 2000);
                }
    
                else {
                    console.log(heart)                      //Vérifier dans la console si la décrémentation est valide
                    heart--                                 //Décrémente de 1 un coeur
                    remove()                                //remove() supprime automatiquement les éléements de la partie en cour au bout d'une seconde
                    setTimeout(function () {
                        next()                              //next() execute automatiquement la partie suivante au bout d'une seconde
                    }, 1000);
                }
    
            }

            //  Condition pour ajouter un succès en plus lorsque le joueur tombe sur la princesse

            if (i == 2) {
                board5.querySelectorAll(".door-close").forEach(function (validBox) {
                    validBox.classList.remove("door-close") //Permet supprimer les deux autres portes lorqsque l'image de la princesse est affichée
                })
    
                let newbox2 = box2.cloneNode()               //Permet de faire apparaitre une étoile
                board2.prepend(newbox2)                      //Faire apparaitre une étoile à gauche avec prepend() (append() à droite)
    
                if (star == 1) {
                    alert("BRAVO !")                         //Si les 3 étoiles apparaissent un message d'alerte BRAVO ! s'affiche et le jeu reset
                    setTimeout(function () {                 
                        location.reload()                    //location.reload() reset automatiquement le jeu au bout de deux secondes
                    }, 2000);
                }
    
                else {
                    console.log(star)                        //Vérifier dans la console si la décrémentation est valide
                    star--                                   //Décrémente de 1 une étoile
                    remove()                                 //remove() supprime automatiquement les éléements de la partie en cour au bout d'une seconde
                    setTimeout(function () {                 
                        next()                               //next() execute automatiquement la partie suivante au bout d'une seconde
                    }, 1000);
                }
            }
        })
    }
    shuffleChildren(board5)
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  ETAPE   1.1   Créer les 3 Vies (3 coeurs seront affichés au début du jeu et ceux ci doivent pouvoir disparaitre au cours du jeu)

let box = document.createElement("div")                 //Déclarer l'élément HTML "box" avec (const ou let) et l'instancier avec la fonction createElement
box.classList.add("heart")                              //Modifier sa propriété classList pour améliorer cet élément dans le CSS en lui ajoutant "box" attribuer une image coeur à l'élément
let board = document.querySelector("#life")             //Pour modifier cet élément dans le JavaScript on peut créer un selecteur de requête (mode plus dynamique)

let heart = 0                                           //Déclarer la variable heart initialisée à . et servira pour créer et gérer la condition (perdre une vie)

for (let i = 1; i <= 3; i++) {                          //Créer une boucle for pour incrémenter l'élément HTML board (heart)
    let newbox = box.cloneNode()                        //Pour générer 3 éléments du même type (newbox) automatiquement avec la fonction cloneNode() à savoir (3 coeurs)
    board.appendChild(newbox)                           //Pour afficher ces éléments HTML utiliser appendChild() visible au début du jeu

    if (i => heart) {                                   //Incrémente les 3 coeurs dans la console si i est supérieur à 0
        heart++
    }
    console.log(heart)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  ETAPE   1.2   Créer les 3 Succès ( une étoile apparaitra chaque fois que la princesse est trouvée, celles ci ne seront pas affichées au début du jeu)

let box2 = document.createElement("div")                //Déclarer l'élément HTML "box" avec (const ou let) et l'instancier avec la fonction createElement
box2.classList.add("star")                              //Modifier sa propriété classList pour améliorer cet élément dans le CSS en lui ajoutant "box" attribuer une image étoile à l'élément
let board2 = document.querySelector("#success")         //L'action de modifier l'élément dans le Javascript sera intégrée directement dans la condition "ajouter une étoile" ci dessous  

let star = 0                                            //Déclarer la variable heart initialisée à 0 et servira pour créer et gérer la condition (gagner un succès)

for (let i = 1; i <= 3; i++) {                          //Créer une boucle for pour incrémenter l'élément HTML board2 (star)
    
    //let newbox2 = box2.cloneNode()                    //Pour faire en sorte qu'une étoile soit générée à chaque fois que le joueur tombe sur la princesse
    //board2.prepend(newbox2)                           L'élément sera affiché au fur et à mesure si la variable et la fonction sont inscrites dans la condition B

    if (i => star) {                                    //Incrémente les 3 étoiles dans la console si i est supérieur à 0
        star++
    }
    console.log(star)
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  ETAPE   2   Créer les 3 Portes et le fonctionnement d'une partie (Déroulement du jeu)

//////////////////////////////////////////////////////////PRINCIPE DU JEU    Tomber soit sur une porte vide, soit sur la princesse soit sur le monstre

let box5 = document.createElement("div")                //Déclarer l'élément HTML "box" avec (const ou let) et l'instancier avec la fonction createElement
box5.classList.add("door-close")                        //Dans le CSS attribuer une image de porte fermée à l'élément
let board5 = document.querySelector("#door")            //Pour modifier cet élément dans le JavaScript créer un selecteur de requête (mode plus dynamique)

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

        //  Condition A pour supprimer une vie lorsque le joueur tombe sur le monstre 

        if (i == 3) {
            board5.querySelectorAll(".door-close").forEach(function (validBox) {
                validBox.classList.remove("door-close") //Permet supprimer les deux autres portes lorqsque l'image du monstre est affichée
            })

            let newbox = box.cloneNode()                  //Permet de faire disparaitre un coeur
            board.firstElementChild.remove(newbox)        //Faire disparaitre un coeur avec remove()
            
            
            if (heart == 1) {                            
                alert("GAME OVER !")                     //Si les 3 coeurs disparaissent un message d'alerte GAME OVER ! s'affiche et le jeu reset
                setTimeout(function () {                 
                    location.reload()                    
                }, 2000);
            }

            else {
                console.log(heart)                      //Vérifier dans la console si la décrémentation est valide
                heart--                                 //Décrémente de 1 un coeur
                remove()                                //remove() supprime automatiquement les éléments de la partie en cours au bout d'une seconde
                setTimeout(function () {
                    next()                              //next() execute automatiquement la partie suivante au bout d'une seconde
                }, 1000);
            }

        }

        //  Condition B pour ajouter un succès en plus lorsque le joueur tombe sur la princesse

        if (i == 2) {
            board5.querySelectorAll(".door-close").forEach(function (validBox) {
                validBox.classList.remove("door-close") //Permet supprimer les deux autres portes lorqsque l'image de la princesse est affichée
            })

            let newbox2 = box2.cloneNode()               //Permet de faire apparaitre une étoile au fur et à mesure 
            board2.prepend(newbox2)                      //Faire apparaitre une étoile à gauche avec prepend() (append() à droite)
        
            if (star == 1) {
                alert("BRAVO !")                         //Si les 3 étoiles apparaissent un message d'alerte BRAVO ! s'affiche et le jeu reset
                setTimeout(function () {                 
                    location.reload()                    //location.reload() reset automatiquement le jeu au bout de deux secondes
                }, 2000);
            }

            else {
                console.log(star)                        //Vérifier dans la console si la décrémentation est valide 
                star--                                   //Décrémente de 1 une étoile
                remove()                                 //remove() supprime automatiquement les éléements de la partie en cour au bout d'une seconde
                setTimeout(function () {                 
                    next()                               //next() execute automatiquement la partie suivante au bout d'une seconde
                }, 1000);
            }
        }
    })

    shuffleChildren(board5)                             //Permet de mélanger l'ordre des numéros de porte
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////