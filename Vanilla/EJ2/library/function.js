"use strict"

let puntosTeamMarcos = [89,120,103]
let puntosTeamJuan = [116,94, 123]
let puntosTeamMaria = [97, 134, 105]

function avarage(match1, match2, match3) {
    if (!isNaN(match1) && !isNaN(match2) && !isNaN(match3))
        return (match1 + match2 + match3) / 2
    else return undefined
}

function compareAvarage() {
    let teamMarcos = avarage(89, 120, 103)
    let teamJuan = avarage(116, 94, 123)
    let teamMaria = avarage(97, 134, 105)

    if (teamMarcos > teamJuan && teamMarcos > teamMaria) return ()

    return undefined
}
