from django.db import models

# Create your models here.

class Questions(models.Model):
    question = models.CharField(max_length=400)
    option1 = models.CharField(max_length=400)
    option2 = models.CharField(max_length=400)
    option3 = models.CharField(max_length=400, blank=True)
    option4 = models.CharField(max_length=400,blank=True)
    answer = models.CharField(max_length=400)

    def serialize(self):
        return {
            "question": self.question,
            "option1": self.option1,
            "option2": self.option2,
            "option3": self.option3,
            "option4": self.option4,
            "answer": self.answer
        }

class Emails(models.Model):
    name = models.CharField(max_length=200, null=True)
    email = models.CharField(max_length=200, null=True)
    subject = models.CharField(max_length=200, null=True)
    body = models.TextField(max_length=1000, null=True)
