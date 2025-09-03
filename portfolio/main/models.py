from django.db import models
from django.utils.text import slugify
from django.contrib.auth.models import User
from ckeditor.fields import RichTextField


class Technology(models.Model):
    name = models.CharField(max_length=100)
    icon = models.ImageField(upload_to='tech_icons/', blank=True, null=True)  

    def __str__(self):
        return self.name


class Project(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField(unique=True, blank=True)
    description = models.TextField()
    challenge = models.TextField(blank=True, null=True)
    solution = models.TextField(blank=True, null=True)
    role = models.CharField(max_length=100, blank=True, null=True)

    tech = models.ManyToManyField(Technology, related_name='projects')
    github = models.URLField(blank=True, null=True)
    live_demo = models.URLField(blank=True, null=True)
    image = models.ImageField(upload_to='project_images/', blank=True, null=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title


    
class ProjectImage(models.Model):
    project = models.ForeignKey('Project', on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='project_images/')
    caption = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return f"{self.project.title} - Image"


class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, blank=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    content = RichTextField()
    image = models.ImageField(upload_to='blog_images/', blank=True, null=True)
    category = models.CharField(max_length=100, blank=True, null=True)
    tags = models.CharField(max_length=200, blank=True, null=True)
    date_posted = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.title} by {self.author}"
    
class Testimonial(models.Model):
    name = models.CharField(max_length=100)
    message = models.TextField()
    role = models.CharField(max_length=100, blank=True)
    image = models.ImageField(upload_to='testimonials/', blank=True, null=True)

    def __str__(self):
        return f"{self.name} - {self.role}"
    
class ContactMessage(models.Model):
    name = models.CharField(max_length=150)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name} ({self.email})"