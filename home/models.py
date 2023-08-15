
from django.db import models
from django.contrib import admin

class op(models.Model):
    user_name=models.CharField(max_length=20,default="")
    order_id=models.AutoField
    name=models.CharField(max_length=50)
    email=models.EmailField()
    mobile=models.BigIntegerField()
    street_no=models.CharField(max_length=50)
    colony_choic=[
        ('Ongole','Ongole'),
        ('Pernametta','Pernametta'),
        ('Santhanuthalapadu','Santhanuthalapadu'),
        ('marripaadu','marripaadu'),
        ('rajampet','rajampet'),
        ('rajupalem','rajupalem'),
        ('kamalapuram','kamalapuram'),
        ('Cheemakurthi','Cheemakurthi'),
        ('Podili','Podili'),
        ('mylavaram','mylavaram'),
        ('duvuur','duvvur')
    ]
    colony=models.CharField(max_length=50,choices=colony_choic)
    name_of_pub=models.CharField(max_length=50)
    date=models.DateTimeField(null=True)
    no_of_pages=models.PositiveIntegerField(default=1)
    no_of_copies=models.PositiveIntegerField(default=1)
    type_choi=[
        ('black and white',"balck and white"),
        ('colur',"colour"),
    ]
    paper_choi=[
        ('a4','a4'),
        ('pic','pic'),
        ('book','book'),
    ]
    sides_choi=[
        ('one side','one side'),
        ('two side','two side'),
    ]
    type=models.CharField(max_length=20,choices=type_choi,default="colour")
    paper=models.CharField(max_length=10,choices=paper_choi,default="")
    sides=models.CharField(max_length=10,choices=sides_choi,default="")
    price=models.IntegerField(default=0)
    discount=models.IntegerField(default=0)
    payment=models.IntegerField(default=0)
    file=models.FileField(upload_to="",null=True,blank=True)

    def __str__(self):
        return self.name
