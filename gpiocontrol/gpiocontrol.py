from time import sleep
import RPi.GPIO as GPIO
import config
GPIO.setmode(GPIO.BOARD)
GPIO.setwarnings(False)
GPIO.setup(config.get("gpio_pin"), GPIO.OUT)

while(True):
    GPIO.output(config.get("gpio_pin"), GPIO.HIGH)
    sleep(0.1)
    GPIO.output(config.get("gpio_pin"), GPIO.LOW)
    sleep(config.get("updateInterval"))