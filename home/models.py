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
