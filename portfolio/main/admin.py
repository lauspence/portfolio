from django.contrib import admin
from .models import *
# Inline for multiple project images
class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 1

# Registering Project with inline images
class ProjectAdmin(admin.ModelAdmin):
    inlines = [ProjectImageInline]
    list_display = ('title', 'slug')
    prepopulated_fields = {"slug": ("title",)}  # Optional: auto-fill slug in admin

# Custom display for Technology model
class TechnologyAdmin(admin.ModelAdmin):
    list_display = ('name',)

# Register all models
admin.site.register(Project, ProjectAdmin)
admin.site.register(ProjectImage)
admin.site.register(BlogPost)
admin.site.register(Testimonial)
admin.site.register(Technology, TechnologyAdmin)
admin.site.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "message", "created_at")  # adjust fields as needed
    search_fields = ("name", "email", "message")
    list_filter = ("created_at",)