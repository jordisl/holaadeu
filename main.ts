input.onButtonPressed(Button.A, function () {
    basic.showString("Hola")
    basic.pause(100)
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("adeu")
    basic.pause(100)
    basic.showIcon(IconNames.Sad)
})
basic.clearScreen()
basic.forever(function () {
	
})
