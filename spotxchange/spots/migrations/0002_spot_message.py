# Generated by Django 2.2.3 on 2019-07-29 04:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('spots', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='spot',
            name='message',
            field=models.CharField(default=None, max_length=500),
            preserve_default=False,
        ),
    ]
