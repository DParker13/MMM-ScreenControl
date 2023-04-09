from time import sleep
import RPi.GPIO as GPIO
import config


def flipSwitch():
    GPIO.output(config.get("gpio_pin"), GPIO.LOW)
    sleep(0.1)
    GPIO.output(config.get("gpio_pin"), GPIO.HIGH)