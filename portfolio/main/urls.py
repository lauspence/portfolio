from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
    path('project/', views.projects_list, name='projects_list'),
    path('projects/<slug:slug>/', views.project_detail, name='project_detail'),
    path('blog/', views.blog_list, name='blog'),
    path('blog/<slug:slug>/', views.blog_detail, name='blog_detail'),
    path('testimonials/', views.testimonials_view, name='testimonials'),


]
