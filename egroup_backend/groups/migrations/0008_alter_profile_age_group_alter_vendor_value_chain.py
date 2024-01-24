# Generated by Django 4.2.7 on 2024-01-24 16:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('groups', '0007_vendor_business_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='age_group',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='vendor',
            name='value_chain',
            field=models.CharField(blank=True, choices=[('POULTRY', 'Poultry'), ('TOMATO', 'tomato'), ('GROUNDNUTS', 'Groundnuts '), ('AFRICAN LEAFY VEGETABLE', 'African Leafy vegetable '), ('SOYABEAN', 'Soyabean')], default='PRODUCTION', max_length=255, null=True),
        ),
    ]
