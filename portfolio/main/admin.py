from django.contrib import admin
from .models import Project, ProjectImage, BlogPost, Testimonial, Technology, ContactMessage

# Inline for multiple project images (using URLs)
class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 1
    fields = ('image', 'caption')  # Only show URL and caption
    readonly_fields = ()

# Register Project with inline ProjectImage
class ProjectAdmin(admin.ModelAdmin):
    inlines = [ProjectImageInline]
    list_display = ('title', 'slug')
    prepopulated_fields = {"slug": ("title",)}
    fields = ('title', 'slug', 'description', 'image', 'challenge', 'solution', 'role', 'tech', 'github', 'live_demo')
    filter_horizontal = ('tech',)  # Better UI for ManyToMany

# Technology Admin
class TechnologyAdmin(admin.ModelAdmin):
    list_display = ('name',)

# BlogPost Admin
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'date_posted')
    prepopulated_fields = {"slug": ("title",)}
    search_fields = ('title', 'author__username', 'category', 'tags')

# Testimonial Admin
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('name', 'role')
    fields = ('name', 'role', 'message', 'image')

# ContactMessage Admin
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "message", "created_at")
    search_fields = ("name", "email", "message")
    list_filter = ("created_at",)

# Register models
admin.site.register(Project, ProjectAdmin)
admin.site.register(ProjectImage)
admin.site.register(BlogPost, BlogPostAdmin)
admin.site.register(Testimonial, TestimonialAdmin)
admin.site.register(Technology, TechnologyAdmin)
admin.site.register(ContactMessage, ContactMessageAdmin)
