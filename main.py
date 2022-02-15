def exp1():
    global random
    random = Math.random_boolean()
    while maqueen.ultrasonic(PingUnit.CENTIMETERS) >= 19:
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 255)
        break
    while maqueen.ultrasonic(PingUnit.CENTIMETERS) < 19:
        if random == True:
            maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, 95)
            basic.pause(400)
        elif random == False:
            maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 95)
            basic.pause(400)
        break
random = False
basic.show_icon(IconNames.SQUARE)

def on_forever():
    global random
    if maqueen.ultrasonic(PingUnit.CENTIMETERS) < 15:
        random = Math.random_boolean()
        if maqueen.ultrasonic(PingUnit.CENTIMETERS) != 0:
            if random == True:
                maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
            elif random == False:
                maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, 100)
        if maqueen.ultrasonic(PingUnit.CENTIMETERS) == 0:
            maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CCW, 100)
    else:
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 255)
    basic.pause(400)
basic.forever(on_forever)
