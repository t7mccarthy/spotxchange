# Generated by Django 2.2.3 on 2019-08-02 03:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('spots', '0004_auto_20190731_0239'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='spot',
            name='host',
        ),
    ]
