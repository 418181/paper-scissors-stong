input.onButtonPressed(Button.A, function () {
    if (我 == 0) {
        我 = 1
        basic.showIcon(IconNames.Scissors)
        radio.sendValue("c", 1)
    }
})
function 設定初值 () {
    basic.showIcon(IconNames.Chessboard)
    我 = 0
    你 = 0
    他 = 0
}
function 比輸贏 () {
    if (我 == 你 && 你 == 他) {
        basic.showIcon(IconNames.Duck)
    } else if (我 != 你 && 你 != 他 && 他 != 你) {
        basic.showIcon(IconNames.Duck)
    } else if (我 == 1 && (你 == 3 && 他 == 3)) {
        basic.showIcon(IconNames.Happy)
    } else if (我 == 1 && (你 == 1 && 他 == 3)) {
        basic.showIcon(IconNames.Happy)
    } else if (我 == 1 && (你 == 3 && 他 == 1)) {
        basic.showIcon(IconNames.Happy)
    } else if (我 == 2 && (你 == 1 && 他 == 1)) {
        basic.showIcon(IconNames.Happy)
    } else if (我 == 2 && (你 == 2 && 他 == 1)) {
        basic.showIcon(IconNames.Happy)
    } else if (我 == 2 && (你 == 1 && 他 == 2)) {
        basic.showIcon(IconNames.Happy)
    } else if (我 == 3 && (你 == 2 && 他 == 2)) {
        basic.showIcon(IconNames.Happy)
    } else if (我 == 3 && (你 == 3 && 他 == 2)) {
        basic.showIcon(IconNames.Happy)
    } else if (我 == 3 && (你 == 2 && 他 == 3)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
}
input.onButtonPressed(Button.AB, function () {
    if (我 == 0) {
        我 = 3
        basic.showIcon(IconNames.Square)
        radio.sendValue("c", 3)
    }
})
input.onButtonPressed(Button.B, function () {
    if (我 == 0) {
        我 = 2
        basic.showIcon(IconNames.SmallDiamond)
        radio.sendValue("c", 2)
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "a") {
        你 = value
    }
    if (name == "b") {
        他 = value
    }
    basic.pause(1000)
    if (我 != 0 && (你 != 0 && 他 != 0)) {
        比輸贏()
        basic.pause(5000)
        設定初值()
    }
})
let 他 = 0
let 你 = 0
let 我 = 0
radio.setGroup(69)
設定初值()
