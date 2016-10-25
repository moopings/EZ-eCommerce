from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from ecom.user.models import Customers
from ecom.include.api import request_get
import json

def customer_all(request):
    query = Customers.objects.all().exclude('password')
    return request_get(request, query)

def customer_username(request, username):
    query = Customers.objects(username=username).exclude('password')
    return request_get(request, query)

@csrf_exempt
def customer_create(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode())
        err = Customers.validation(data)
        if len(err) == 0:
            Customers.create_obj(data)
            return HttpResponse('Employee created', status=201)
        else:
            output = ''
            for e in err:
                output += e + '<br />'
            return HttpResponse(output)
    else:
        return HttpResponse('Method not allowed', status=405)

@csrf_exempt
def customer_delete(request, username):
    if request.method == 'DELETE':
        user = Customers.objects(username=username)
        if not user:
            return HttpResponse('This employee not exist', status=404)
        return HttpResponse('Employee removed')
    else:
        return HttpResponse('Method not allowed', status=405)

@csrf_exempt
def customer_update(request, username):
    if request.method == 'PUT':
        user = Customers.objects(username=username)

        if not user:
            return HttpResponse('This employee not exist', status=404)
        if not request.body:
            return HttpResponse('Request cannot empty', status=400)

        data = json.loads(request.body.decode())
        if not data:
            return HttpResponse('Data cannot empty', status=400)

        Customers.update_obj(username, data)
        return HttpResponse('Employee updated')
    else:
        return HttpResponse('Method not allowed', status=405)