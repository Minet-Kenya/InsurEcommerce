
from django.core.management.base import BaseCommand
import subprocess
import sys

class Command(BaseCommand):
    help = "Watch SCSS files and compile them using sass"
    def handle(self, *args, **options):
        scss_input_path = "./base/static/base/scss/custom.scss"
        css_output_path = "./base/static/base/css/bootstrap.custom.min.css"
        # Run the sass command
        sass_process = subprocess.Popen(
            [
                "sass",
                "--watch",
                scss_input_path,
                css_output_path,
                "--style",
                "compressed",
            ]
        )
        try:
            # Wait for the sass process to finish (Ctrl-C will raise KeyboardInterrupt)
            sass_process.wait()
        except KeyboardInterrupt:
            self.stdout.write(self.style.SUCCESS("Sass compilation stopped manually."))
            # Terminate the sass process
            sass_process.terminate()
            sys.exit(0)