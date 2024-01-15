from rest_framework import viewsets
from .models import *
from .serializers import *

class LoanProductViewSet(viewsets.ModelViewSet):
    serializer_class = LoanProductSerializer

    def get_queryset(self):
        return LoanProduct.objects.all()
    

class LoanViewSet(viewsets.ModelViewSet):
    serializer_class = LoanSerializer

    def get_queryset(self):
        return Loan.objects.all()
    

class GroupViewSet(viewsets.ModelViewSet):
    serializer_class = GroupSerializer

    def get_queryset(self):
        return Group.objects.all()
    

class GroupMembersViewSet(viewsets.ModelViewSet):
    serializer_class = GroupMemberSerializer

    def get_queryset(self):
        return GroupMembers.objects.all()
    
class ProfileViewSet(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer

    def get_queryset(self):
        return Profile.objects.all()
    
