from django.contrib import admin
from django.urls import path
from home import views

urlpatterns = [
    path('', views.index,name="index"),
    path('PageObjects', views.PageObjects,name="PageObjects"),
    path('confirm/',views.confirm,name="confirm"),
    path('prices/',views.prices,name="prices"),
    path('signup/',views.signup,name="signup"),
    path('login/',views.login,name="login"),
    path('order',views.order,name="order"),
    path('logouthand/',views.logouthand,name="logouthand"),
    path('history/',views.history,name="history"),
    path('prices/logouthand/',views.logouthand,name="logouthand"),
    path('prices/history/',views.history,name="history"),
    path('signuphandle',views.signuphandle,name="signuphandle"),
    path('loginhandle',views.loginhandle,name="loginhandle"),
    path('login/loginhandle/',views.loginhandle,name="loginhandle"),
    path('forgothandle',views.forgothandle,name="forgothandle"),
    path('forgot',views.forgot,name="forgot"),
    path('otpval',views.otpval,name="otpval")
]