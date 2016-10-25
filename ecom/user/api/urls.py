from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.user_all),

    url(r'^role/', include('ecom.user.api.userrole.urls')),
    url(r'^customer/', include('ecom.user.api.customer.urls')),
    url(r'^employee/', include('ecom.user.api.employee.urls')),
]
