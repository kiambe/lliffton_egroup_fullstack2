from django.urls import path, include
from . import views
from django.contrib.auth import views as auth_views
from rest_framework.urlpatterns import format_suffix_patterns
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import viewsets
from rest_framework import routers
from .viewsets import *


from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

#from .routers import router
router = routers.DefaultRouter()
router.register(r'loan_products', LoanProductViewSet, basename='loan_products')
router.register(r'loans', LoanViewSet, basename='loans')
router.register(r'groups', GroupViewSet, basename='groups')
router.register(r'group_members', GroupMembersViewSet, basename='group_members')
router.register(r'members', ProfileViewSet, basename='members')



urlpatterns = [
    
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('test/', views.testEndPoint, name='test'),
    path('', views.getRoutes),
    path('stats/', views.StatsList.as_view(), name='stats'),
    #path('vendor/<int:pk>/', views.VendorDetail.as_view(), name='vendor_details'),
    #path('list_members/', views.MemberList.as_view(), name='list_members'),
    #path('member/<int:pk>/', views.MemberDetail.as_view(), name='member_details'),
    #path('list_agripreneurs/', views.AgripreneurList.as_view(), name='list_agripreneurs'),
    #path('agripreneur/<int:pk>/', views.AgripreneurDetail.as_view(), name='agripreneur_details'),
    #path('list_management/', views.ManagementList.as_view(), name='list_management'),
    #path('management/<int:pk>/', views.ManagementDetail.as_view(), name='management_details'),
 
    #path('list_groups/', views.GroupList.as_view(), name='list_groups'),
    #path('list_groupmembers/', views.GroupMemberList.as_view(), name='list_group_members'),
    #path('list_member_trainings/', views.MemberTrainingList.as_view(), name='list_member_trainings'),
    #path('list_agripreneur_trainings/', views.AgripreneurTrainingList.as_view(), name='list_agripreneur_trainings'),
    #path('list_savings/', views.SavingsList.as_view(), name='list_savings'),
    #path('list_vouchers/', views.VoucherList.as_view(), name='list_vouchers'),
    #path('list_loan_products/', views.LoanProductsList.as_view(), name='list_loan_products'),
    #path('list_loan/', views.LoanList.as_view(), name='list_loan'),
    #path('list_loan_repayments/', views.LoanRepaymentList.as_view(), name='list_loan_repayments'),
    #path('list_penalties/', views.PenaltyList.as_view(), name='list_penalties'),
    #path('list_group_announcements/', views.GroupAnnouncementList.as_view(), name='list_group_announcements'),
    #path('list_products/', views.ProductList.as_view(), name='list_products'),
    #path('list_articles/', views.ArticleList.as_view(), name='list_articles'),
    
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)

urlpatterns += router.urls




