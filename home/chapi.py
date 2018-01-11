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
            elif ac == "ddd":
            	return mosts()
            elif ac == "eee":
            	return cloud()
            elif ac == "fff":
                return borrow()
def angle():
    cursor=connection.cursor()
    cursor.execute("select count(bname) as value,press as name from home_dbook group by press having count(bname)>30")
    rows = dictfetchall(cursor)
    cur = connection.cursor()
    cur.execute("select count(ISBN) as value,rate as name from home_dbook group by rate")
    rows1 = dictfetchall(cur)
    result="{\"prelist\":["
    for i in range(len(rows)):
        result+="{\"value\":\""+str(rows[i]['value'])+"\","
        result+="\"name\":\""+str(rows[i]['name'])+"\"}"
        if i<(len(rows)-1):
            result+=","
    result+="],\"ratelist\":["
    for i in range(len(rows1)):
        result+="{\"value\":\""+str(rows1[i]['value'])+"\","
        result+="\"name\":\"评分"+str(rows1[i]['name'])+"\"}"
        if i<(len(rows1)-1):
            result+=","
    result+="]}"
    return HttpResponse(result)

def total():
    cursor=connection.cursor()
    num=cursor.execute("select score ,rate ,bname from home_dbook where score*1>3000")
    if(num>1):
        rows=cursor.fetchall()
        return JsonResponse(rows,safe=False)
    else:
        rows=cursor.fetchone()
        return JsonResponse(rows,safe=False)

def publi():
    cursor = connection.cursor()
    cursor.execute("select count(bname) as num,substring(pretime,1,4) as yy from home_dbook where pretime not like '%民%' and pretime!='' group by substring(pretime,1,4)")
    rows = dictfetchall(cursor)
    return JsonResponse(rows,safe=False)


def mosts():

    cur = connection.cursor()
    cur.execute("select rate,author,press,bname from home_dbook order by rate desc limit 10")
    rows1= dictfetchall(cur)
    
    curs = connection.cursor()
    count = curs.execute("select score,bname,author,press from home_dbook order by score*1 desc limit 10")
    rows2 = dictfetchall(curs) 
    result="{\"list\":["
    for i in range(len(rows1)):
        result+="{\"rate\":\""+str(rows1[i]['rate'])+"\","
        result+="\"author\":\""+str(rows1[i]['author'])+"\","
        result+="\"press\":\""+str(rows1[i]['press'])+"\","
        result+="\"bookn\":\""+str(rows1[i]['bname'])+"\"}"
        if i<(len(rows1)-1):
            result+=","
    result+="],\"sclist\":["
    for i in range(len(rows2)):
        result+="{\"score\":\""+str(rows2[i]['score'])+"\","
        result+="\"author\":\""+str(rows2[i]['author'])+"\","
        result+="\"press\":\""+str(rows2[i]['press'])+"\","
        result+="\"bookn\":\""+str(rows2[i]['bname'])+"\"}"
        if i<(len(rows2)-1):
            result+=","
    result+="]}"
    return HttpResponse(result)


def cloud():
    cur = connection.cursor()
    cur.execute("select count(ISBN) as value,author as name from home_dbook group by author")
    rows = dictfetchall(cur)
    return JsonResponse(rows,safe=False)

def borrow():
    cursor=connection.cursor()
    cursor.execute("select sum(value*1) as value,city as name from books_pub group by city")
    rows = dictfetchall(cursor)
    cursor=connection.cursor()
    cursor.execute("select * from books_pub")
    rows1 = dictfetchall(cursor)

    result="{\"citylist\":["
    for i in range(len(rows)):
        result+="{\"value\":\""+str(rows[i]['value'])+"\","
        result+="\"name\":\""+str(rows[i]['name'])+"\"}"
        if i<(len(rows)-1):
            result+=","
    result+="],\"publist\":["
    for i in range(len(rows1)):
        result+="{\"value\":\""+str(rows1[i]['value'])+"\","
        result+="\"name\":\""+str(rows1[i]['publisher'])+"\"}"
        if i<(len(rows1)-1):
            result+=","
    result+="]}"
    return HttpResponse(result)

# def apite(req):
#     return HttpResponse("{}")

def dictfetchall(cursor):
    desc = cursor.description
    return [
        dict(zip([col[0] for col in desc], row))
        for row in cursor.fetchall()
    ]

