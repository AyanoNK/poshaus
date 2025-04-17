import os
from PIL import Image


# take all files and resize them to have a max width or height of 300px
# maintain aspect ratio
# suppose all images are webp
illustrations_directory = "../../public/img/illustrations"


def rename_original_image(image_path):
    # take the original image and rename it to have a _original suffix
    # check if the image is already renamed
    original_image_filename = os.path.splitext(image_path)[0] + "_original.webp"
    print(f"Renaming image {image_path} to {original_image_filename}")
    # examine specific path
    if "original" in image_path:
        print(f"Image {original_image_filename} already exists. Skipping.")
        return

    os.rename(image_path, original_image_filename)
    print(f"Renamed image {image_path} to {original_image_filename}")


def resize_image(image_path, max_size):
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


def resize_images_in_directory(directory, max_size):
    for filename in os.listdir(directory):
        if not filename.endswith(".webp"):
            print("Skipping non-webp file:", filename)
            continue

        if str(max_size) in filename:
            print(f"Image {filename} already resized. Skipping.")
            continue

        # get absolute path of the image
        image_path = os.path.join(directory, filename)

        resize_image(image_path, max_size)
        rename_original_image(image_path)


if __name__ == "__main__":
    resize_images_in_directory(illustrations_directory, max_size=300)
    print("All images resized.")
