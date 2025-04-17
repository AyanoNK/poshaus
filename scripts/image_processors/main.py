import os
from PIL import Image


# take all files and resize them to have a max width or height of 300px
# maintain aspect ratio
# suppose all images are webp
illustrations_directory = "../../public/img/illustrations"


def resize_image(image_path, max_size=300):
    with Image.open(image_path) as img:
        # create new file

        new_image_filename = os.path.splitext(image_path)[0] + f"_{max_size}.webp"
        if os.path.exists(new_image_filename):
            print(f"Image {new_image_filename} already exists. Skipping.")
            return

        # check if the image is already the right size
        if img.size[0] <= max_size and img.size[1] <= max_size:
            print(f"Image {image_path} is already the right size. Skipping.")
            return

        # resize image
        print(f"Resizing image {image_path} to {max_size}px")
        sizes = (max_size, max_size)
        new_image = img.copy()
        new_image.thumbnail(sizes, Image.Resampling.LANCZOS)
        new_image.save(new_image_filename, format="webp", quality=100)


def resize_images_in_directory(directory):
    for filename in os.listdir(directory):
        # find images that do not have a size 300 already
        if filename.endswith(".webp"):
            image_path = os.path.join(directory, filename)
            resize_image(image_path)


if __name__ == "__main__":
    resize_images_in_directory(illustrations_directory)
    print("All images resized.")
