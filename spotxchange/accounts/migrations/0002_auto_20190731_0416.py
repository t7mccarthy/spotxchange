# Generated by Django 2.2.3 on 2019-07-31 04:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='balance',
            field=models.IntegerField(default=10),
        ),
    ]
