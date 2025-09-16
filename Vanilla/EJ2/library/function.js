"use strict"

let puntosTeamMarcos = [89,120,103]
let puntosTeamJuan = [116,94, 123]
let puntosTeamMaria = [97, 134, 105]

function showPoints (arrayPoints, team) {
    let line;
    for (let i = 0; arrayPoints.length; i++) {
        if (i < arrayPoints.length - 1) line = line + toString(arrayPoints[i] + "-")
        else line = line + toString(arrayPoints[i])
    } 
    return "Los puntos del equipo" + team + " son: " + line  
}

function average(match1, match2, match3) {
    if (!isNaN(match1) && !isNaN(match2) && !isNaN(match3))
        return (match1 + match2 + match3) / 2
    else return undefined
}

function compareAverage() {
    

    if (teamMarcos > teamJuan && teamMarcos > teamMaria) return ()

    return undefined
}
