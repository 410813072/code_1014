def on_forever():
    for degress in range(5):
        for degress2 in range(5):
            Y = 0
            X = 0
            led.plot(X, Y)
            basic.pause(200)
basic.forever(on_forever)
