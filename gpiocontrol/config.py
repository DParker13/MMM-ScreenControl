import inspect
import os
import json
import sys
import platform

CONFIG = json.loads(sys.argv[0]);

def get(key):
    return CONFIG[key]