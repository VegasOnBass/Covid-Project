from django.urls import path

from . import views


urlpatterns = [    
    path("", views.index, name="index"),
    path("map", views.map, name="map"),
    path("info", views.info, name="info"),
    path("quiz", views.quiz, name="quiz"),
    path("quizQuestions", views.quizQuestions, name="quizQuestions"),
    path("emails", views.emails, name="emails")

]