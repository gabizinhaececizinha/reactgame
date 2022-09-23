input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showString("vamos jogar, pussi")
    basic.clearScreen()
    basic.pause(randint(1000, 10000))
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showLeds(`
        . . # # #
        . . # # #
        . . # # #
        . . . # #
        . . . # #
        `)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        # # # . .
        # # # . .
        # # # . .
        # # . . .
        # # . . .
        `)
})
basic.forever(function () {
	
})
