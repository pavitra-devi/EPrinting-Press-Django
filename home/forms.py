from django.forms import ModelForm
from .models import op

class orderform(ModelForm):
    class Meta:
        model=op
        exclude = ['name_of_pub','date','price','discount','payment','user_name']
    def __init__(self,*args,**kwargs):
        super(orderform,self).__init__(*args,**kwargs)
        self.fields['mobile'].widget.attrs.update({'class':'mob'})
        self.fields['no_of_copies'].widget.attrs.update({'class':'mob'})
        self.fields['no_of_pages'].widget.attrs.update({'class':'mob'})