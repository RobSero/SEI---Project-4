# Generated by Django 3.0.7 on 2020-06-04 18:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jwt_auth', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='experience',
            field=models.CharField(default=1, max_length=20),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='user',
            name='money',
            field=models.IntegerField(default='1'),
            preserve_default=False,
        ),
    ]
