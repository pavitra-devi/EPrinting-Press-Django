# Generated by Django 4.2 on 2023-05-04 08:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_alter_op_mobile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='op',
            name='colony',
            field=models.CharField(choices=[('Ongole', 'Ongole'), ('Pernametta', 'Pernametta'), ('Santhanuthalapadu', 'Santhanuthalapadu'), ('marripaadu', 'marripaadu'), ('rajampet', 'rajampet'), ('rajupalem', 'rajupalem'), ('kamalapuram', 'kamalapuram'), ('Cheemakurthi', 'Cheemakurthi'), ('Podili', 'Podili'), ('mylavaram', 'mylavaram'), ('duvuur', 'duvvur')], max_length=50),
        ),
    ]
