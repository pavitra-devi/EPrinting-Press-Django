from .models import op
from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate,login as log,logout
from .forms import orderform
import datetime,random
from math import floor
from django.core.mail import send_mail,EmailMessage

# Create your views here.
def index(request):
    return render(request,"index.html")
def prices(request):
    return render(request,"prices.html")
def signup(request):
    return render(request,"user/login-sign.html")
def login(request):
    return render(request,"user/login.html")
def loginhandle(request):
    if request.method=='POST':
        login_uname=request.POST['login_uname']
        login_password=request.POST['password']
        user=authenticate(username=login_uname,password=login_password)

        if user is not None:
            log(request,user)
            form=orderform()
            return render(request,"order/order.html",{"form":form})
        else:
            mydict={"msg":"Invalid credentials"}
            return render(request,'user/login.html',context=mydict)




def signuphandle(request):
    if request.method=='POST':
        name=request.POST['name']
        password1=request.POST['password1']
        password2=request.POST['password2']
        email=request.POST['email']
        mobile=request.POST['mobile']
        fname=request.POST['fName']
        lname=request.POST['lName']
        l,u,p,d=0,0,0,0
        if(len(password1)>=8):
                 for i in password1:
                    if i.islower():
                        l+=1
                    if i.isupper():
                        u+=1
                    if i.isdigit():
                        d+=1
                    if i=='@' or i=='$' or i=='_' or i=='-':
                        p+=1
        if User.objects.filter(username=name).exists():
            messages.error(request,"Username already exists,Enter unique username ")
            return render(request,"user/login-sign.html")
        elif(not len(name)>4 ):
            messages.error(request,"user name should be of length atleast 4")
        elif(not len(fname)>1  or not(fname.isalpha())):
            messages.error(request,"Enter valid first name")
            return render(request,"user/login-sign.html")
        elif(not len(lname)>1 or not(lname.isalpha())):
            messages.error(request,"Enter valid last name")
            return render(request,"user/login-sign.html")
          
        elif(not len(str(mobile))==10):
            messages.error(request,"Enter valid mobile no")
            return render(request,"user/login-sign.html")
        elif(l<=1 or u<=0 or p<=0 or d<=0):
            messages.error(request,"password should be of length 8 and include one capital letter,small letter,special char,digit")
            return render(request,"user/login-sign.html")
        elif(password1!=password2):
           messages.error(request,"passwords didn't match")
           return render(request,"user/login-sign.html")
        else:
            myuser=User.objects.create_user(name,email,password1)
            myuser.fname=fname
            myuser.lname=lname
            myuser.save()
            log(request,myuser)
            return render(request,'index.html',{"var":"Account Created Successfully"})
    else:
        return render(request,"user/login-sign.html")

def PageObjects(request):
    if request.method=='POST':
        form=orderform(request.POST,request.FILES)
        if form.is_valid():
            if(len(form.cleaned_data['name'])<1 or not form.cleaned_data['name'].isalpha() ):
                return render(request,'order/order.html',{"form":orderform(),"var":"Enter valid name"})
            if(len(str(form.cleaned_data['mobile']))!=10):
                return render(request,'order/order.html',{"form":orderform(),"var":"Enter valid mobile"})
            if(len(str(form.cleaned_data['street_no']))==0):
                return render(request,'order/order.html',{"form":orderform(),"var":"Enter valid street no"})        
            if(len(request.FILES)==0):
                return render(request,'order/order.html',{"form":orderform(),"var":"Upload document"})
            
            new_author = form.save(commit=False)
            name=form.cleaned_data['colony']
            if(name in ['Ongole','Pernametta','Santhanuthalapadu','Cheemakurthi']):
                new_author.name_of_pub="Pavitra -9121363286"
            elif(name in ['marripaadu','rajampet','rajupalem','kamalapuram']):
                 new_author.name_of_pub="Pravallika -9392075861"
            else:
                new_author.name_of_pub="silpa -83281299444"
            col=form.cleaned_data['type']
            if col=="balck and white":
                col_p=3
            else:
                col_p=10
            pap=form.cleaned_data['paper']
            if pap=="a4" or pap=="book":
                pap_p=1
            else :
                pap_p=6
            price=col_p * pap_p * form.cleaned_data['no_of_pages'] * form.cleaned_data['no_of_copies']
            new_author.price=price
            new_author.user_name=request.user.id
            new_author.discount=price*0.3
            new_author.payment=price-floor(price*0.3)
            new_author.date=datetime.datetime.now()
            new_author.save()
            order_id=new_author.order_id
            nam=form.cleaned_data['name']
            email=form.cleaned_data['email']
            mobile=form.cleaned_data['mobile']
            st_no=form.cleaned_data['street_no']
            colony=form.cleaned_data['colony']
            name_of_pub=new_author.name_of_pub
            date=new_author.date
            no_of_pages=new_author.no_of_pages
            no_of_copies=new_author.no_of_copies
            type=new_author.type
            paper=new_author.paper
            sides=new_author.sides
            pric=new_author.price
            discount=new_author.discount
            payment=new_author.payment
            filename=new_author.file.name
            path=new_author.file.path
            dict={"order_id":order_id,"name":nam,"email":email,
            "mobile":mobile,"address":st_no+" "+colony,"no_of_pages":no_of_pages,
            "no_of_copies":no_of_copies,"type":type,"paper":paper,
            "sides":sides,"Price":pric,"Discount":discount,"amount":payment,
            "file":filename
            }
            msg="Name\t:\t"+nam+"\nEmail\t:\t"+email+"\nMobile\t:\t"+str(mobile)+"\nAddress\t:\t"+st_no+" "+colony+"\nDate\t:\t"+str(date)+"\nNo of pages\t:\t"+str(no_of_pages)+"\nNo of copies\t:\t"+str(no_of_copies)+"\nType\t:\t"+type+"\nPaper Type\t:\t"+paper+"\nSides\t:\t"+sides+"\nPrice\t:\t"+str(pric)+"\nDiscount\t:\t"+str(discount)+"\nAmount\t:\t"+str(payment)
            if(name_of_pub=="Pavitra"):
                to_add="o170907@rguktong.ac.in"
            elif(name_of_pub=="Pravallika"):
                to_add="o170877@rguktong.ac.in"
            else:
                to_add="o170815@rguktong.ac.in"
            em_msg=EmailMessage("Order Received",msg,"printingpressapp@gmail.com",[to_add])
            em_msg.attach_file(path)
            em_msg.send()
            with open('msg.txt', 'w') as file:
                file.write(msg)
            return render(request,"order/confirmation.html",dict)

    else:
        form=orderform()
        return render(request,"order/order.html",{"form":form})

    


def confirm(request):
    
    return render(request,"index.html",{"var":"Order palced successfully"})

def logouthand(request):
    logout(request)
    return redirect('/')

def history(request):
    u_name=request.user.id
    data=op.objects.filter(user_name=u_name).values()
    return render(request,"user/history.html",{"dict":data})
def forgot(request):
    return render(request,'user/forgot.html')
def forgothandle(request):
    if User.objects.filter(username=request.POST['user']).exists():
        usr=User.objects.get(username=request.POST['user'])
        otp = random.randint(111111, 999999)
        send_mail(
            "OTP verification",
            "ur otp for the password change is "+str(otp),
            "printingpressapp@gmail.com",
            [usr.email],

        )
        with open('secureOtp.txt', 'w') as file:
         file.write(str(otp))
        with open('uname.txt', 'w') as file:
         file.write(request.POST['user'])
        return render(request,'user/otpval.html')
    else:
        return render(request,'user/forgot.html',{"error":"invalid username"})
def otpval(request):
    with open('secureOtp.txt', 'r') as file:
        actOTP = file.read()
    if request.method=="POST":
        if request.POST['otp'] == actOTP:
            with open('uname.txt', 'r') as file:
                name = file.read()
                l,u,p,d=0,0,0,0
                if(len(request.POST['pass1'])>=8):
                    for i in request.POST['pass1']:
                            if i.islower():
                                l+=1
                            if i.isupper():
                                u+=1
                            if i.isdigit():
                                d+=1
                            if i=='@' or i=='$' or i=='_' or i=='-':
                                p+=1
                if(l<=1 or u<=0 or p<=0 or d<=0):
                    return render(request,'user/otpval.html',{"error":"Enter valid password"})
                if(request.POST['pass1']!=request.POST['pass2']):
                    return render(request,'user/otpval.html',{"error":"passwords didn't match"})
                
                usr=User.objects.get(username=name)
                usr.set_password(request.POST['pass1'])
                usr.save()
                return render(request,'user/login.html',{"msg":"password changed successfully"})
        else:
            return render(request,'user/otpval.html',{"error":"invalid otp"})
    else:
        return render(request,'user/otpval.html',{"error":"Enter Details"})

def order(request):
    form=orderform()
    return render(request,"order/order.html",{"form":form})
