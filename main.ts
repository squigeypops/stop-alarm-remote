enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.AB, function () {
    radio.setGroup(72)
    radio.sendMessage(RadioMessage.message1)
    for (let index = 0; index < 4; index++) {
        basic.showString("FIRE ALARM STOPPED")
    }
    basic.pause(100)
    basic.clearScreen()
})
