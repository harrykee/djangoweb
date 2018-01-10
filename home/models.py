from django.db import models

# Create your models here.
class dbook(models.Model):
    ISBN = models.CharField(max_length=100,null=True)
    bname = models.CharField(max_length=200,null=True)
    author = models.CharField(max_length=200,null=True)
    rate = models.CharField(max_length=100,null=True)
    press = models.CharField(max_length=200,null=True)
    pretime = models.CharField(max_length=200,null=True)
    score = models.CharField(max_length=200,null=True)
    prise = models.CharField(max_length=100,null=True)
    number = models.CharField(max_length=100,null=True)

    def __dtr__(self):
        return self.ISBN

class jmubook(models.Model):
    title = models.CharField(max_length = 100,null=True)
    author = models.CharField(max_length= 100,null=True)
    publisher_city = models.CharField(max_length=100,null=True)
    publisher = models.CharField(max_length = 100,null=True)
    publish_year = models.CharField(max_length = 100,null=True)
    price = models.CharField(max_length = 100,null = True)
    isbn = models.CharField(max_length = 100,null = True)
    titles = models.CharField(max_length = 200,null = True)
    authors = models.CharField(max_length = 100,null= True)
    tags = models.CharField(max_length = 100,null = True)
    associations = models.CharField(max_length = 100,null = True)
    total = models.CharField(max_length = 100,null = True)
    loan = models.CharField(max_length = 100,null = True)
    available = models.CharField(max_length = 100,null = True)
    frequence = models.CharField(max_length = 100,null = True)

    def __dtr__(self):
        return self.isbn
