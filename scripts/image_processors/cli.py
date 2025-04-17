"""ClI parser for the integration tests."""

import argparse
from const import ImageResizingSizes

parser = argparse.ArgumentParser(prog="image_processors_parser")


parser.add_argument(
    "--max-size",
    "-ms",
    help="Max size the resized images will take.",
    choices=ImageResizingSizes.__list__(),
    type=str,
    required=True,
)
