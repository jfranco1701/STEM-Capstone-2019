from django.apps import AppConfig

class AppConfig(AppConfig):
    name = 'app'

    def ready(self):
        from app.signals.signals import log_user_logged_in_failed, log_user_logged_in_success
