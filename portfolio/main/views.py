from django.shortcuts import render, get_object_or_404, redirect
from django.core.mail import send_mail
from .models import *
from django.contrib import messages
from .forms import *

# Create your views here.

def home(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Your message has been sent successfully!")
            return redirect('home')  # reload homepage
    else:
        form = ContactForm()
    
    return render(request, 'main/home.html', {'form': form})

def about(request):
    return render(request, 'main/about.html')

def contact(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            contact = form.save()

              # send email notification
            send_mail(
                subject=f"New Contact Form Submission from {contact.name}",
                message=f"Name: {contact.name}\nEmail: {contact.email}\n\nMessage:\n{contact.message}",
                from_email='yourgmail@gmail.com',
                recipient_list=['laurencemmarete@gmail.com'],  # your inbox
                fail_silently=False,
            )

            messages.success(request, "Your message has been sent successfully!")
            return redirect('contact')
    else:
        form = ContactForm()
    
    return render(request, "main/contact.html", {"form": form})

def projects_list(request):
    projects = Project.objects.all()
    return render(request, 'main/projects_list.html', {'projects': projects})

def project_detail(request, slug):
    project = get_object_or_404(Project, slug=slug)
    return render(request, 'main/project_detail.html', {'project': project})

def blog_list(request):
    posts = BlogPost.objects.order_by('-date_posted')
    return render(request, 'main/blog_list.html', {'posts': posts})

def blog_detail(request, slug):
    post = get_object_or_404(BlogPost, slug=slug)
    return render(request, 'main/blog_detail.html', {'post': post})

def testimonials_view(request):
    testimonials = Testimonial.objects.all()
    return render(request, 'main/testimonials.html', {'testimonials': testimonials})


    