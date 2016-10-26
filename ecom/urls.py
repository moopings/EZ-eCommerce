"""ecom URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', admin.site.urls),

    # app url
    url(r'^product/', include('ecom.product.urls')),
    url(r'^user/', include('ecom.user.urls')),
    # url(r'^order/', include('order.urls')),

    # api url
    url(r'^api/product/', include('ecom.product.api.urls')),
    url(r'^api/user/', include('ecom.user.api.urls')),
    url(r'^api/promotion/', include('ecom.promotion.api.urls'))
    # url(r'^api/order/', include('order.api.urls')),
]
