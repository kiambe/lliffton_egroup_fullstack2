from django.db import models
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.core.validators import MaxValueValidator, MinValueValidator
from django.utils import timezone
length= 255
expiry_days= 255


# Create your models here.
BOOL_CHOICES = (
    ("NO", "No"),
    ("YES", "Yes")
)
class County(models.Model):    
  id = models.AutoField(primary_key=True)
  name = models.CharField(max_length=256, null=True) 
  code = models.CharField(max_length=3, null=True) 
  def __str__(self):
        return str(self.name)
      
 
class SubCounty(models.Model):
    id = models.CharField(max_length=100, primary_key=True)
    county_id = models.ForeignKey('County', on_delete=models.CASCADE)
    name = models.CharField(max_length=length, blank=True, null=True,)
    lat = models.CharField(max_length=length, blank=True, null=True,)
    lng = models.CharField(max_length=length, blank=True, null=True,)
    category = models.CharField(max_length=length, blank=True, null=True,)
    code = models.CharField(max_length=length, blank=True, null=True,)
    loccode = models.CharField(max_length=length, blank=True, null=True,)

    def __str__(self):
        return '%s' % self.name


class Ward(models.Model):
    county_id = models.ForeignKey('County', on_delete=models.CASCADE)
    subcounty_id = models.ForeignKey('SubCounty', on_delete=models.CASCADE)
    name = models.CharField(max_length=length, blank=True, null=True,)
    lat = models.CharField(max_length=length, blank=True, null=True,)
    lng = models.CharField(max_length=length, blank=True, null=True,)
    category = models.CharField(max_length=length, blank=True, null=True,)
    code = models.CharField(max_length=length, blank=True, null=True,)
    loccode = models.CharField(max_length=length, blank=True, null=True,)

    def __str__(self):
        return '%s' % self.name



class User(AbstractUser):
    username = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    def profile(self):
        profile = Profile.objects.get(user=self)
  


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE,null=True, blank=True)
    fullname = models.CharField(max_length=length,null=True, blank=True) 
    national_id = models.CharField(max_length=length,null=True, blank=True)
    bio = models.CharField(max_length=100,null=True, blank=True)  
    gender = models.CharField(max_length=10,null=True, blank=True)
    year_of_birth = models.IntegerField(null=True, blank=True, default=1990)
    is_an_group_admin = models.CharField(max_length=length,null=True, blank=True, choices=BOOL_CHOICES)
    is_agripreneur = models.CharField(max_length=length,null=True, blank=True, default="Yes", choices=BOOL_CHOICES)
    is_vendor = models.CharField(max_length=length,null=True, blank=True, default="No", choices=BOOL_CHOICES)
    physical_address = models.TextField(max_length=length,null=True, blank=True)    
    primary_phone_number = models.CharField(max_length=length,null=True, blank=True)
    primary_phone_number_provider = models.CharField(max_length=length,null=True, blank=True)
    alternative_phone_number = models.CharField(max_length=length,null=True, blank=True)
    alternative_phone_number_provider = models.CharField(max_length=length,null=True, blank=True)    
    ward_id = models.ForeignKey(Ward, on_delete=models.CASCADE,null=True, blank=True)
    profile_img = models.ImageField(upload_to='profile', default='default.png',null=True, blank=True)
    create_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now_add = True)
    is_sys_admin = models.CharField(max_length=length,null=True, blank=True, choices=BOOL_CHOICES, default="False")
    verified = models.BooleanField(default=False)

def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()

post_save.connect(create_user_profile, sender=User)
post_save.connect(save_user_profile, sender=User)

class Vendor(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE)
    ward_id = models.ForeignKey(Ward, on_delete=models.CASCADE,null=True, blank=True)
    business_name = models.CharField(max_length=length,null=True, blank=True, unique=True)
    shopping_centre_name = models.CharField(max_length=length,null=True, blank=True)
    contact_person_name = models.CharField(max_length=length,null=True, blank=True)
    contact_person_phone = models.CharField(max_length=length,null=True, blank=True)
    contact_person_password = models.CharField(max_length=length,null=True, blank=True)
    api_key = models.CharField(max_length=length,null=True, blank=True)
    create_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now_add = True)
    def __str__(self):
        return '%s' % self.user.username

class Group(models.Model):   
    name = models.CharField(max_length=length,null=True, blank=True, unique=True)
    special_code = models.CharField(max_length=4,null=True, blank=True)
    group_type = models.CharField(max_length=length, blank=True,null=True)
    ward_id = models.ForeignKey(Ward, on_delete=models.CASCADE,null=True, blank=True)
    business_activity = models.CharField(max_length=length,null=True, blank=True)
    bank_name = models.CharField(max_length=length,null=True, blank=True)
    bank_services = models.CharField(max_length=length,null=True, blank=True)
    mpesa_tillnumber = models.CharField(max_length=length,null=True, blank=True)
    mpesa_paybill_busines_number = models.CharField(max_length=length,null=True, blank=True)
    mpesa_paybill_account_number = models.CharField(max_length=length,null=True, blank=True)
    secretary_name = models.CharField(max_length=length,null=True, blank=True)
    secretary_phone = models.CharField(max_length=length,null=True, blank=True)
    opportunity = models.CharField(max_length=length,null=True, blank=True)
    create_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now_add = True)
    def __str__(self):
        return '%s' % self.name


class GroupMembers(models.Model):
    member = models.ForeignKey(Profile, on_delete=models.CASCADE,null=True, blank=True)
    group = models.ForeignKey(Group, on_delete=models.CASCADE,null=True, blank=True)
    create_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now_add = True)


class MemberTraining(models.Model):
    member = models.ForeignKey(Profile, on_delete=models.CASCADE)
    start_training_date = models.DateField(null=True, blank=True)
    completion_training_date = models.DateField(null=True, blank=True)
    topic_trained = models.CharField(max_length=length,null=True, blank=True)
    training_photo = models.ImageField(upload_to='training_photos/',null=True, blank=True)
    def _str_(self):
        return str(self.member)

class Saving(models.Model):
    member_id = models.ForeignKey(Profile, on_delete=models.CASCADE,null=True, blank=True)
    group_id = models.ForeignKey(Group, on_delete=models.CASCADE,null=True, blank=True)
    amount = models.FloatField( validators=[MinValueValidator(0.0), MaxValueValidator(999999999.0)], default=0.0)
    create_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return str(self.create_at)


class SavingLog(models.Model):
    savings_id = models.ForeignKey(Saving, on_delete=models.CASCADE,null=True, blank=True)
    amount = models.FloatField( validators=[MinValueValidator(0.0), MaxValueValidator(999999999.0)], default=0.0)
    transaction_phone = models.CharField(max_length=length,null=True, blank=True)
    transaction_id = models.CharField(max_length=length,null=True, blank=True)
    log_type = models.CharField(max_length=length,null=True, blank=True)
    create_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return '%s' % self.transaction_phone


class Voucher(models.Model):
    code = models.CharField(max_length=length,null=True, blank=True, unique=True)
    create_at = models.DateTimeField(auto_now_add = True)
    expiry =  models.TextField(null=True, blank=True, default=expiry_days)
    amount_equivalent = models.FloatField(null=True, blank=True, default=0.0)
    reviewed =models.BooleanField(null=True, blank=True, default=False)
    voucher_issued =models.BooleanField(null=True, blank=True, default=False)    
    product_issued =models.BooleanField(null=True, blank=True, default=False)
    cancelled =models.BooleanField(null=True, blank=True, default=False)  
    updated_at = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return '%s' % self.code




class LoanProduct(models.Model):
    name = models.CharField(max_length=length,null=True, blank=True)
    description =  models.TextField(null=True, blank=True)
    loan_duration_days = models.IntegerField(null=True, blank=True)
    penalty_rate = models.FloatField( validators=[MinValueValidator(0.0), MaxValueValidator(99.9)], default=0.0)
    interest_rate = models.FloatField( validators=[MinValueValidator(0.0), MaxValueValidator(99.9)], default=0.0)
    product_type = models.CharField(max_length=length,null=True, blank=True)
    borrowing_percentage = models.FloatField( validators=[MinValueValidator(0.0), MaxValueValidator(99.9)], default=0.0)
    borrowing_times = models.IntegerField(null=True, blank=True)
    create_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now_add = True)
    

    def __str__(self):
        return '%s' % self.name





class Loan(models.Model):
    group_id = models.ForeignKey(Group, on_delete=models.CASCADE,null=True, blank=True)
    group_member_id =models.ForeignKey(Profile, on_delete=models.CASCADE,null=True, blank=True)
    loan_product_id = models.ForeignKey(LoanProduct, on_delete=models.CASCADE,null=True, blank=True)
    amount = models.FloatField( validators=[MinValueValidator(0.0), MaxValueValidator(999999999.9)], default=0.0)
    amount_due = models.FloatField( validators=[MinValueValidator(0.0), MaxValueValidator(999999999.9)], default=0.0)
    duration_days = models.IntegerField(null=True, blank=True)
    penalty_rate = models.FloatField( validators=[MinValueValidator(0.0), MaxValueValidator(99.9)], default=0.0)
    interest = models.FloatField( validators=[MinValueValidator(0.0), MaxValueValidator(99.9)], default=0.0)
    interest_rate = models.FloatField( validators=[MinValueValidator(0.0), MaxValueValidator(99.9)], default=0.0)
    loan_type = models.CharField(max_length=length,null=True, blank=True)
    voucher = models.ForeignKey(Voucher, on_delete=models.CASCADE,null=True, blank=True)
    borrowing_percentage = models.FloatField( validators=[MinValueValidator(0.0), MaxValueValidator(99.9)], default=0.0)
    borrowing_times = models.IntegerField(null=True, blank=True)
    approved_date = models.DateField(null=True, blank=True)
    due_date = models.DateField(max_length=length,null=True, blank=True)
    purpose = models.CharField(max_length=length,null=True, blank=True)
    approved = models.CharField(max_length=length,null=True, blank=True, default="Not Approved")
    status = models.CharField(max_length=length,null=True, blank=True, default="ACTIVE")
    create_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return '%s' % self.loan_type



class LoanRepayment(models.Model):
    loan_id = models.ForeignKey(Loan, on_delete=models.CASCADE,null=True, blank=True)
    amount = models.FloatField( validators=[MinValueValidator(0.0), MaxValueValidator(999999999.9)], default=0.0)
    payment_type = models.CharField(max_length=length,null=True, blank=True)
    transaction_code = models.CharField(max_length=length,null=True, blank=True)
    create_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return '%s' % self.loan_id


class Penalty(models.Model):
    member_id = models.ForeignKey(Profile, on_delete=models.CASCADE,null=True, blank=True)
    purpose = models.CharField(max_length=length,null=True, blank=True)
    amount = models.FloatField( validators=[MinValueValidator(0.0), MaxValueValidator(999999999.9)], default=0.0)
    status = models.CharField(max_length=length,null=True, blank=True, default="ACTIVE")
    create_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return '%s' % self.member_id





class Email(models.Model):
    email_address =models.CharField(max_length=length,null=True, blank=True)
    subject = models.CharField(max_length=length,null=True, blank=True)
    body = models.TextField(null=True, blank=True)
    sent = models.CharField(max_length=length,null=True, blank=True)
    create_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return '%s' % self.email_address


class GroupAnnouncement(models.Model):
    group_id = models.ForeignKey(Group, on_delete=models.CASCADE,null=True, blank=True)
    announce_at = models.DateField(null=True, blank=True)
    message = models.TextField(null=True, blank=True)
    announced = models.CharField(max_length=length,null=True, blank=True)
    create_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return '%s' % self.message


class LoanReminder(models.Model):
    group_id = models.ForeignKey(GroupAnnouncement, on_delete=models.CASCADE,null=True, blank=True)
    member_id = models.ForeignKey(Profile, on_delete=models.CASCADE,null=True, blank=True)
    phone = models.CharField(max_length=length,null=True, blank=True)
    message = models.TextField(null=True, blank=True)
    send_at = models.DateTimeField(null=True, blank=True)
    sent = models.CharField(max_length=10,null=True, blank=True)
    create_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return '%s' % self.phone






class Product(models.Model):
    vendor_id = models.ForeignKey(Vendor, on_delete=models.CASCADE,null=True, blank=True)
    name = models.CharField(max_length=length,null=True, blank=True)
    category = models.CharField(max_length=length,null=True, blank=True)
    retail_price = models.FloatField( validators=[MinValueValidator(0.0), MaxValueValidator(99999999.9)], default=0.0)
    wholesale_price = models.FloatField( validators=[MinValueValidator(0.0), MaxValueValidator(999999999.9)], default=0.0)
    photo = models.ImageField(upload_to='Products', default='default.png',null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    create_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return '%s' % self.name
    
    

    

class Article(models.Model):
    title = models.CharField(max_length=200)
    author = models.ForeignKey(User, on_delete=models.CASCADE, default=None)  # Set default to None or your preferred default user
    publish_date = models.DateTimeField(auto_now_add=True)
    content = models.TextField()
    document = models.FileField(upload_to='articles/', blank=True, null=True)

    def __str__(self):
        return self.title