from django.apps import AppConfig


class MainConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'portfolio.main'

    def ready(self):
        from django.contrib.auth import get_user_model
        User = get_user_model()
        if not User.objects.filter(username='lau').exists():
            User.objects.create_superuser(
                username='lau',
                email='maretelau@gmail.com',
                password='Pass123'
            )
            print("Superuser 'lau' created with password 'Pass123'")
