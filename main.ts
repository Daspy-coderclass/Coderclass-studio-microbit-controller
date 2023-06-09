radio.onReceivedString(function (receivedString) {
    let waarde = ""
    if (receivedString.length == 12) {
        uur = waarde.substr(7, 2)
    } else if (receivedString.length == 11) {
        uur = waarde.substr(7, 1)
    }
    draaien = true
})
let keuze = 0
let draaien = false
let uur = ""
radio.setGroup(113)
basic.forever(function () {
    basic.clearScreen()
    basic.showString(uur)
    if (draaien) {
        if (parseFloat(uur) == 21) {
            keuze = 60
        } else if (parseFloat(uur) == 7) {
            keuze = 0
        }
    }
})
