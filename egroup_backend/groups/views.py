from django.shortcuts import render
from  rest_framework import generics, permissions, status
from .serializers import * 
from .models import *
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import Sum
from datetime import datetime

from django.http import JsonResponse
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth import authenticate, login,logout

from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from .utils import *
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

from .onboarding import *
# Get All Routes

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/register/',
        '/api/token/refresh/'
    ]
    return Response(routes)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def testEndPoint(request):
    if request.method == 'GET':
        data = f"Congratulation {request.user}, your API just responded to GET request"
        return Response({'response': data}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        text = "Hello"
        data = f'Congratulation your API responded to request with text: {text}'
        return Response({'response': data}, status=status.HTTP_200_OK)
    return Response({}, status.HTTP_400_BAD_REQUEST)





###..End swt




class StatsList(APIView):
    def get(self, request, format=None):        
            members_count = Profile.objects.all().count()
            agripreneur_count = Profile.objects.filter(is_agripreneur="Yes").count()
            no_of_loans = Loan.objects.all().count()
            total_loans_products = Loan.objects.all().count()
            total_groups = Group.objects.all().count()
            total_loan_amount = Loan.objects.aggregate(Sum('amount'))
            total_loan_amount_due = Loan.objects.aggregate(Sum('amount_due'))
            # return a dictionary as the response
            return Response({
              "members_count":members_count,
              "agripreneur_count":agripreneur_count,
              "no_of_loans":no_of_loans ,
              "total_loans_products":total_loans_products, 
              "total_groups":total_groups, 
              "total_loan_amount":total_loan_amount, 
              "total_loan_amount_due":total_loan_amount_due,
            },status=200)
       




class LoanProductViewSet(viewsets.ModelViewSet):
    serializer_class = LoanProductSerializer

    def get_queryset(self):
        return LoanProduct.objects.all()



class VendorList(generics.ListAPIView):
    queryset=Vendor.objects.all()
    serializer_class=VendorSerializer
    #permission_classes=[permissions.IsAuthenticated]


class VendorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=Vendor.objects.all()
    serializer_class=VendorDetailSerializer


class MemberList(generics.ListAPIView):
    queryset=Profile.objects.all()
    serializer_class=ProfileSerializer

class MemberDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=Profile.objects.all()
    serializer_class=MemberDetailSerializer



class GroupList(generics.ListAPIView):
    queryset=Group.objects.all()
    serializer_class=GroupSerializer

class GroupMemberList(generics.ListAPIView):
    queryset=GroupMembers.objects.all()
    serializer_class=GroupMemberSerializer


class MemberTrainingList(generics.ListAPIView):
    queryset=MemberTraining.objects.all()
    serializer_class=MemberTrainingSerializer

class SavingsList(generics.ListAPIView):
    queryset=Saving.objects.all()
    serializer_class=SavingsSerializer

class VoucherList(generics.ListAPIView):
    queryset=Voucher.objects.all()
    serializer_class=VoucherSerializer

class LoanProductsList(generics.ListCreateAPIView):
    queryset=LoanProduct.objects.all()
    serializer_class=LoanProductSerializer




class LoanList(generics.ListAPIView):
    queryset=Loan.objects.all()
    serializer_class=LoanSerializer

class LoanRepaymentList(generics.ListAPIView):
    queryset=LoanRepayment.objects.all()
    serializer_class=LoanRepaymentSerializer

class PenaltyList(generics.ListAPIView):
    queryset=Penalty.objects.all()
    serializer_class=PenaltySerializer

class GroupAnnouncementList(generics.ListAPIView):
    queryset=GroupAnnouncement.objects.all()
    serializer_class=GroupAnnouncementSerializer

class ProductList(generics.ListAPIView):
    queryset=Product.objects.all()
    serializer_class=ProductSerializer

class ArticleList(generics.ListAPIView):
    queryset=Article.objects.all()
    serializer_class=ArticleSerializer



class AuthenticationUser(ObtainAuthToken):


    def post(self, request):
        print(request.POST)
        # return Response("heheh")
        if request.user.is_authenticated:
            print("is authenticated")
            
            return Response({"message":"this user is already logged in"},status=status.HTTP_201_CREATED)
        # logout(request)
        else:
            
            if "username" in request.POST:
                username = request.POST["username"]
                password = request.POST["password"]
                
                print(request.POST["username"])
                print(request.data)

                user = authenticate(request, username=username, password=password)
                
                serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
                serializer.is_valid(raise_exception=True)
                user = serializer.validated_data['user']
                
                token, created = Token.objects.get_or_create(user=user)
               
                current_date = datetime.now()
                
                if user is not None:
                    # print(username.username)
                    # login(request, user)
                    u = User.objects.get(email=username)
                    # profile = Profile.objects.get(user=u)
                    
                    # print(u)
                    # print(userFound)
                    return Response({"message":"success","user":{
                        'token': token.key,
                        "username":u.username,"email":u.email,
                        # "username":u.username,"county_string":profile.county_string,
                        "time":current_date,
                        "expires":add_time(f"{current_date}",1)
                        }},status=status.HTTP_201_CREATED)
        
                else:
                    return Response({"message":f"Error! Username and password does not match"}, status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response({"message":"Username and password is required"},status=status.HTTP_400_BAD_REQUEST)       


# create_mentor_users()
# update_mentor_profile()
# create_mentor_vendor()
            
