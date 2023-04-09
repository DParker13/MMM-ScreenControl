import inspect
import os
import json
import sys
import platform

_platform = platform.uname()[4]
path_to_file = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))

CONFIG = json.loads(sys.argv[1]);

def get(key):
    return CONFIG[key]