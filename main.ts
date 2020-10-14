input.onGesture(Gesture.LogoUp, function () {
    basic.showNumber(1)
    basic.pause(100)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(0)
    basic.pause(100)
    basic.clearScreen()
})
basic.forever(function () {
	
})
