import os
from PIL import Image


# maintain aspect ratio
# suppose all images are webp
illustrations_directory = "../../public/img/illustrations"


accepted_sizes = [640, 768, 1024, 1280, 1536]


def resize_image(image_path, max_size):
    with Image.open(image_path) as img:
        # create new file

        new_image_filename = os.path.splitext(image_path)[0] + f"_{max_size}.webp"
        if os.path.exists(new_image_filename):
            print(
                f"Original image {image_path} already resized to {max_size}. Skipping."
            )
            return

        # check if the image is already the right size
        # if img.size[0] <= max_size:
        #     print(f"Image {image_path} is already the right size. Skipping.")
        #     return

        # resize image
        print(f"Resizing image {image_path} to {max_size}px")
        sizes = (max_size, max_size)
        new_image = img.copy()
        new_image.thumbnail(sizes, Image.Resampling.LANCZOS)
        new_image.save(new_image_filename, format="webp")


def resize_images_in_directory(directory, max_size):
    for filename in os.listdir(directory):
        if not filename.endswith(".webp"):
            print("Skipping non-webp file:", filename)
            continue

        if any(str(size) in filename for size in accepted_sizes):
            print(f"Image {filename} already resized previously. Skipping.")
            continue

        # get absolute path of the image
        image_path = os.path.join(directory, filename)

        resize_image(image_path, max_size)


if __name__ == "__main__":
    resize_images_in_directory(illustrations_directory, max_size=1536)
    print("All images resized.")
