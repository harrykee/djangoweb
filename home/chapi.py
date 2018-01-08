from django.http import HttpResponse,JsonResponse
from django.db import connection


def chart(res):
    if res.is_ajax():
        if res.method=="GET":
            ac = res.GET['ac']
            if ac=="aaa":
                return angle()
            elif ac=="bbb":
                return total()
            elif ac == "ccc":
                return publi()
def angle():
    cursor=connection.cursor()
    num=cursor.execute("select count(bname) as value,press as name from home_dbook group by press having count(bname)>30")
    if(num>1):
    	rows = dictfetchall(cursor)
    	return JsonResponse(rows, safe=False)
    else:
    	rows = cursor.fetchone()
    return HttpResponse("{}")

def total():
    cursor=connection.cursor()
    num=cursor.execute("select score ,rate ,bname from home_dbook where score*1>3000")
    if(num>1):
        rows=cursor.fetchall()
        return JsonResponse(rows,safe=False)
    else:
        rows=cursor.fetchone()
        return HttpResponse("{}")

def publi():
    cursor = connection.cursor()
    num =cursor.execute("select count(bname) as num,substring(pretime,1,4) as yy from home_dbook where pretime not like '%民%' and pretime!='' group by substring(pretime,1,4)")
    if(num>1):
        rows = dictfetchall(cursor)
        return JsonResponse(rows,safe=False)
    else:
        rows=cursor.fetchone()
        return HttpResponse("{}")


def dictfetchall(cursor):
    desc = cursor.description
    return [
        dict(zip([col[0] for col in desc], row))
        for row in cursor.fetchall()
    ]

