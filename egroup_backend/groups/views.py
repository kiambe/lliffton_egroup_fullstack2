from django.shortcuts import render
from  rest_framework import generics, permissions, status
from .serializers import * 
from .models import *
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import Sum

from django.http import JsonResponse
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


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



