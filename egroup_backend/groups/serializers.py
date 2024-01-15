from rest_framework import serializers
from . import models
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = ('id', 'username', 'email')

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        
        # These are claims, you can add custom claims
        token['fullname'] = user.profile.fullname
        token['username'] = user.username
        token['email'] = user.email
        token['national_id'] = user.profile.national_id
        token['gender'] = user.profile.gender
        token['year_of_birth'] = user.profile.year_of_birth
        token['is_an_group_admin'] = user.profile.is_an_group_admin
        token['is_agripreneur'] = user.profile.is_agripreneur
        token['is_vendor'] = user.profile.is_vendor
        token['ward_id'] = user.profile.ward_id
        token['is_sys_admin'] = user.profile.is_sys_admin
        token['bio'] = user.profile.bio
        token['image'] = str(user.profile.profile_img)
        token['verified'] = user.profile.verified
        return token


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = models.User
        fields = ('email', 'username', 'password', 'password2')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        user = models.User.objects.create(
            username=validated_data['username'],
            email=validated_data['email']

        )

        user.set_password(validated_data['password'])
        user.save()

        return user




class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Vendor
        fields = '__all__'
        #fields = ['id','business_name', 'contact_person_name' ]
        depth=1

class VendorDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Vendor
        fields = '__all__'
        #fields = ['id','business_name', 'contact_person_name' ]
        depth=1


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Profile
        fields = '__all__'
        depth=1

class MemberDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Profile
        fields = '__all__'
        #fields = ['id','business_name', 'contact_person_name' ]
        depth=1



class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Group
        fields = '__all__'


class GroupMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.GroupMembers
        fields = '__all__'
        depth=1



class MemberTrainingSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.MemberTraining
        fields = '__all__'



class SavingsSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Saving
        fields = '__all__'


class VoucherSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Voucher
        fields = '__all__'


class LoanProductSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.LoanProduct
        fields = '__all__'
 

class LoanSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Loan
        fields = '__all__'
        depth=1

class LoanRepaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.LoanRepayment
        fields = '__all__'


class PenaltySerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Penalty
        fields = '__all__'

class GroupAnnouncementSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.GroupAnnouncement
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Product
        fields = '__all__'


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Article
        fields = '__all__'
