# Generated by Django 2.2.3 on 2019-08-02 03:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('spots', '0005_remove_spot_host'),
    ]

    operations = [
        migrations.AddField(
            model_name='spot',
            name='host',
            field=models.CharField(default='tom', max_length=100),
            preserve_default=False,
        ),
    ]
