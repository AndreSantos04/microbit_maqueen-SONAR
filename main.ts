function exp1 () {
    random = Math.randomBoolean()
    while (maqueen.Ultrasonic(PingUnit.Centimeters) >= 19) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        break;
    }
    while (maqueen.Ultrasonic(PingUnit.Centimeters) < 19) {
        if (random == true) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 95)
            basic.pause(400)
        } else if (random == false) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 95)
            basic.pause(400)
        }
        break;
    }
}
let random = false
basic.showIcon(IconNames.Square)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 15) {
        random = Math.randomBoolean()
        if (maqueen.Ultrasonic(PingUnit.Centimeters) != 0) {
            if (random == true) {
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
            } else if (random == false) {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 100)
            }
        }
        if (maqueen.Ultrasonic(PingUnit.Centimeters) == 0) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 100)
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
    basic.pause(400)
})
