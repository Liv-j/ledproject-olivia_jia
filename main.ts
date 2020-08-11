input.onButtonPressed(Button.A, function () {
    if (litList.length == 25) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        while (ledlit == litList[litList.indexOf(ledlit)]) {
            ledlit = randint(0, 24)
        }
        litList.push(ledlit)
        led.plot(ledlit / 5, ledlit % 5)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showString("RESET")
    litList = []
})
input.onButtonPressed(Button.B, function () {
    if (litList.length == 0) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        led.toggle(litList[0] / 5, litList[0] % 5)
        litList.shift()
    }
})
let ledlit = 0
let litList: number[] = []
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
litList = []
ledlit = randint(0, 24)
basic.forever(function () {
	
})
