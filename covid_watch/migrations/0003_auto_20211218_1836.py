# Generated by Django 3.1.1 on 2021-12-18 18:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('covid_watch', '0002_auto_20211208_1528'),
    ]

    operations = [
        migrations.AlterField(
            model_name='questions',
            name='option2',
            field=models.CharField(blank=True, max_length=400),
        ),
        migrations.AlterField(
            model_name='questions',
            name='option3',
            field=models.CharField(blank=True, max_length=400),
        ),
    ]