# main/apps.py
from django.apps import AppConfig
from django.db.models.signals import post_migrate
from django.contrib.auth import get_user_model

class MainConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'portfolio.main'

    def ready(self):
        post_migrate.connect(create_default_user, sender=self)

def create_default_user(sender, **kwargs):
    User = get_user_model()
    if not User.objects.filter(username='lau').exists():
        User.objects.create_superuser('lau', 'maretelau@gmail.com', 'Pass123')

