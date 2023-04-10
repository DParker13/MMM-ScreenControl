from time import sleep
import RPi.GPIO as GPIO
import config
import time
GPIO.setmode(GPIO.BOARD)
GPIO.setwarnings(False)
GPIO.setup(config.get("gpio_pin"), GPIO.OUT)
isOn = True

def toggle():
    GPIO.output(config.get("gpio_pin"), GPIO.HIGH)
    sleep(1)
    GPIO.output(config.get("gpio_pin"), GPIO.LOW)

while(True):
    t = time.localtime()
    current_time = time.strftime("%H%M", t)
    
    #Turn screen on
    if config.get("off_time") > str(current_time) > config.get("on_time") and isOn is False:
        toggle()
        isOn = True

    #Turn screen off
    if str(current_time) > config.get("off_time") and isOn:
        toggle()
        isOn = False
    
    sleep(config.get("updateInterval") * 60)