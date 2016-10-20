from django.http import HttpResponse
from product.models import Product

# Create your views here.

def product_all(request):
    response_data = Product.objects.all().to_json()
    return HttpResponse(response_data, content_type="application/json")

def product_name(request, name):
    print(name)
    response_data = Product.objects(prodname=name).to_json()
    return HttpResponse(response_data, content_type="application/json")