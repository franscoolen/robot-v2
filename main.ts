let afst1 = 0
let afst2 = 0
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 20 && maqueen.Ultrasonic(PingUnit.Centimeters) != 0) {
        afst1 = maqueen.Ultrasonic(PingUnit.Centimeters)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
        basic.pause(25)
        afst2 = maqueen.Ultrasonic(PingUnit.Centimeters)
        if (afst1 - afst2 <= 0) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
            basic.pause(50)
        } else {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            basic.pause(75)
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
})
