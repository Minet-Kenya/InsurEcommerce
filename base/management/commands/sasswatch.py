from django.core.management.base import BaseCommand
import os

class Command(BaseCommand):
    help = "Watch SCSS files and compile them using sass. Ensure sass is installed globally through 'npm install -g sass'"

    def handle(self, *args, **options):
        scss_input_path = "./base/static/base/scss/custom.scss"
        css_output_path = "./base/static/base/css/custom.css"

        # Define the command to compile SCSS using node-sass
        compile_command = f"sass --watch {scss_input_path} {css_output_path} --style compressed"

        try:
            # Execute the compile command
            os.system(compile_command)
        except KeyboardInterrupt:
            self.stdout.write(self.style.SUCCESS("Sass compilation stopped manually."))
