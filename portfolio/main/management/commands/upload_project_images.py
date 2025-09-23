from django.core.management.base import BaseCommand
from portfolio.main.models import *
from django.core.files import File
import os

class Command(BaseCommand):
    help = 'Upload local project images to Cloudinary'

    def handle(self, *args, **options):
        for project in Project.objects.all():
            self.stdout.write(f'Processing project: {project.title}')

            for img in project.images.all():
                # Skip if already on Cloudinary
                if "res.cloudinary.com" in img.image.url:
                    self.stdout.write(f"Image already uploaded: {img.image.url}")
                    continue

                local_path = img.image.path
                if os.path.exists(local_path):
                    with open(local_path, "rb") as f:
                        img.image.save(os.path.basename(local_path), File(f), save=True)
                    self.stdout.write(f"Uploaded {img.image.name} to Cloudinary.")
                else:
                    self.stdout.write(f"Local file not found: {local_path}")

        self.stdout.write(self.style.SUCCESS("All project images processed."))
