import json
from django.shortcuts import render
from django.http import JsonResponse
from django.core.exceptions import ObjectDoesNotExist


from .models import *

# Create your views here.

def index(request):
    return render(request, "covid_watch/index.html")

def emails(request):
    if request.method == "POST":

        data = json.loads(request.body)

        name = data.get("name", "")
        email = data.get("email", "")
        subject = data.get("subject", "")
        body = data.get("body", "")

        email = Emails(name=name, email=email, subject=subject, body=body)
        email.save()
        return JsonResponse({"message": "Email sent successfully."}, status=201)

def map(request):
    return render(request, "covid_watch/map.html")

def info(request):
    return render(request, "covid_watch/info.html")

def quiz(request):
    return render(request, "covid_watch/quiz.html")

def quizQuestions(request):

    try:
        questions = Questions.objects.all()
    except ObjectDoesNotExist:
        return JsonResponse({"error": "Page not found"}, status=404)


    return JsonResponse([question.serialize() for question in questions], safe=False)