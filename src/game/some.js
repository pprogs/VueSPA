

let smallStoneFurnace = {

    consume : [
        { res : "coal", baseVal : 1 }
    ]
}

let bigStoneFurnace = {
    consume : [
        { res : "coal", baseVal : 3 }
    ]
}


let coalDrill = {

    consume : [
        { res : "coal", baseVal : 1 }
    ],

    produce: [       
        { res : "polution", baseVal : 3 }
    ]

}

let electricDrill = {

    consume : [
        { res : "electricity", baseVal : 2 }
    ],

    produce: [
        { res : "coal", baseVal : 5 },
        { res : "polution", baseVal : 3 }
    ]
}