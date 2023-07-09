#!/bin/python3

lst = [2, 4]
try:
    print(lst[6])
except Exception as err:
    print("Error occured: ", err.__class__.__dict__)


