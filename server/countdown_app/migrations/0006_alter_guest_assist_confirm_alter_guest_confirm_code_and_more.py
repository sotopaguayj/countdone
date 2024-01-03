# Generated by Django 5.0 on 2024-01-03 00:12

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('countdown_app', '0005_guest_event_id_alter_event_id_alter_guest_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='guest',
            name='assist_confirm',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='guest',
            name='confirm_code',
            field=models.IntegerField(default=391889, editable=False),
        ),
        migrations.AlterField(
            model_name='guest',
            name='event_id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='countdown_app.event'),
        ),
    ]
