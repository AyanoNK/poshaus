import os
from PIL import Image
from cli import parser
from const import ImageResizingSizes

# maintain aspect ratio
# suppose all images are webp
ILLUSTRATIONS_DIRECTORY = "public/img/illustrations"


ACCEPTED_SIZES = [640, 768, 1024, 1280, 1536]


def resize_image(image_path: str, image_max_size: int) -> None:
    """Take an image path and resize the image to the max size
    and save it as a webp image into the same folder as the original image.

    Args:
        image_path (str): the path to the image
        max_size (int): the max size of the image
    """
    with Image.open(image_path) as img:
        # create new file

        new_image_filename = os.path.splitext(image_path)[0] + f"_{image_max_size}.webp"
        if os.path.exists(new_image_filename):
            print(
                "Original image {image_path} already resized to {max_size}. Skipping."
            )
            return

        # check if the image is already the right size
        # if img.size[0] <= max_size:
        #     print(f"Image {image_path} is already the right size. Skipping.")
        #     return

        # resize image
        print(f"Resizing image {image_path} to {image_max_size}px")
        sizes = (image_max_size, image_max_size)
        new_image = img.copy()
        new_image.thumbnail(sizes, Image.Resampling.LANCZOS)
        new_image.save(new_image_filename, format="webp")


def resize_images_in_directory(directory: str, image_max_size: int) -> None:
    """Resize all images in a directory to the max size
    and save them as webp images into the same folder as the original image.
    The new images will have the same name as the original image
    but with the max size appended to the filename.
    The original images will not be deleted.

    Args:
        directory (str): the path to the directory where the images are
        max_size (int): the max size of the resulting resized images
    """
    for filename in os.listdir(directory):
        if not filename.endswith(".webp"):
            print("Skipping non-webp file:", filename)
            continue

        if any(str(size) in filename for size in ACCEPTED_SIZES):
            print(f"Image {filename} already resized previously. Skipping.")
            continue

        # get absolute path of the image
        image_path = os.path.join(directory, filename)

        resize_image(image_path, image_max_size)


if __name__ == "__main__":
    args = parser.parse_args()
    max_size = args.max_size
    max_size = ImageResizingSizes[max_size].value

    resize_images_in_directory(ILLUSTRATIONS_DIRECTORY, image_max_size=max_size)
    print("All images resized.")
