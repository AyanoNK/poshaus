from enum import Enum


class ImageResizingSizes(Enum):
    """
    Enum for image resizing sizing options.
    """

    SM = 640
    MD = 768
    LG = 1024
    XL = 1280
    XXL = 1536

    @staticmethod
    def __list__():
        """
        Returns a list of all enum members.
        """
        return [e.name for e in ImageResizingSizes]
