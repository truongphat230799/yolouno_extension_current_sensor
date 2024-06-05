from machine import Pin, SoftI2C
from ina219 import INA219
from logging import INFO
import utime  # Nhập module utime để sử dụng hàm sleep

# SHUNT_OHMS = 0.1

ina = INA219(log_level=INFO)
ina.configure()

while True:
    print(ina.voltage())
    print(ina.current())
    print(ina.power())
    
    utime.sleep(5)
