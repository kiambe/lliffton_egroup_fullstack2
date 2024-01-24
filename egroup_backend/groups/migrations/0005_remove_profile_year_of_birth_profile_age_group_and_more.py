# Generated by Django 4.2.7 on 2024-01-24 11:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('groups', '0004_alter_profile_is_sys_admin'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='year_of_birth',
        ),
        migrations.AddField(
            model_name='profile',
            name='age_group',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='vendor',
            name='county',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='groups.county'),
        ),
        migrations.AddField(
            model_name='vendor',
            name='subcounty',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='groups.subcounty'),
        ),
        migrations.AddField(
            model_name='vendor',
            name='value_chain',
            field=models.CharField(blank=True, choices=[('POULTRY', 'Poultry'), ('TOMATO', 'tomato'), ('GROUNDNUTS', 'Groundnuts'), ('AFRICAN LEAFY VEGETABLE', 'African Leafy vegetable '), ('SOYABEAN', 'Soyabean')], default='PRODUCTION', max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='vendor',
            name='value_chain_level',
            field=models.CharField(blank=True, choices=[('POULTRY', 'Poultry'), ('TOMATO', 'tomato'), ('GROUNDNUTS', 'Groundnuts'), ('AFRICAN LEAFY VEGETABLE', 'African Leafy vegetable '), ('SOYABEAN', 'Soyabean')], max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='gender',
            field=models.CharField(blank=True, choices=[('MALE', 'Male'), ('FEMALE', 'Female')], max_length=10, null=True),
        ),
    ]