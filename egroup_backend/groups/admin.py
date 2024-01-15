from django.contrib import admin

# Register your models here.
from import_export.admin import ImportExportModelAdmin
# Register your models here.
from .models import *

class ProfileAdmin(ImportExportModelAdmin):
    list_display = ("id", "national_id", "fullname", "user","gender", "is_agripreneur", "is_vendor", "verified")
    list_editable=[ 'fullname', 'is_agripreneur', 'is_vendor', 'verified']
    pass
admin.site.register(Profile, ProfileAdmin)


class UserAdmin(ImportExportModelAdmin):
    list_display = ("id", "username", "email")
    pass
admin.site.register(User, UserAdmin)


class VendorAdmin(ImportExportModelAdmin):
    list_display = ("id", "business_name","ward_id")
    pass
admin.site.register(Vendor, VendorAdmin)


class GroupMembersAdmin(ImportExportModelAdmin):
    list_display = ("id", "member","group")
    pass
admin.site.register(GroupMembers, GroupMembersAdmin)

class MemberTrainingAdmin(ImportExportModelAdmin):
    list_display = ("id","member","completion_training_date","topic_trained")
    pass
admin.site.register(MemberTraining, MemberTrainingAdmin)


class GroupAdmin(ImportExportModelAdmin):
    list_display = ("id", "name","special_code", "ward_id")
    pass
admin.site.register(Group, GroupAdmin)

class CountyAdmin(ImportExportModelAdmin):
    list_display = ("id", "name","code")
    pass
admin.site.register(County, CountyAdmin)

class SubCountyAdmin(ImportExportModelAdmin):
    list_display = ("id", "name","code")
    pass
admin.site.register(SubCounty, SubCountyAdmin)

class WardAdmin(ImportExportModelAdmin):
    list_display = ("id", "name","code")
    pass
admin.site.register(Ward, WardAdmin)



class SavingAdmin(ImportExportModelAdmin):
    list_display = ("id", "member_id","group_id", "amount")
    pass
admin.site.register(Saving, SavingAdmin)


class SavingLogAdmin(ImportExportModelAdmin):
    list_display = ("id", "savings_id","transaction_phone")
    pass
admin.site.register(SavingLog, SavingLogAdmin)

class LoanProductAdmin(ImportExportModelAdmin):
    list_display = ("id", "name","description")
    pass
admin.site.register(LoanProduct, LoanProductAdmin)


class LoanAdmin(ImportExportModelAdmin):
    list_display = ("id", "group_id","group_member_id", "amount", "status")
    pass
admin.site.register(Loan, LoanAdmin)

class LoanRepaymentAdmin(ImportExportModelAdmin):
    list_display = ("id", "loan_id","amount", "payment_type")
    pass
admin.site.register(LoanRepayment, LoanRepaymentAdmin)

class PenaltyAdmin(ImportExportModelAdmin):
    list_display = ("id", "member_id","purpose", "amount")
    pass
admin.site.register(Penalty, PenaltyAdmin)

class GroupAnnouncementAdmin(ImportExportModelAdmin):
    list_display = ("id", "group_id", "announce_at","message")
    pass
admin.site.register(GroupAnnouncement, GroupAnnouncementAdmin)



class LoanReminderAdmin(ImportExportModelAdmin):
    list_display = ("id", "group_id","phone", "message")
    pass
admin.site.register(LoanReminder, LoanReminderAdmin)





class ProductAdmin(ImportExportModelAdmin):
    list_display = ("id", "vendor_id","name", "category", "retail_price", "wholesale_price")
    pass
admin.site.register(Product, ProductAdmin)


class EmailAdmin(ImportExportModelAdmin):
    list_display = ("id", "email_address","subject")
    pass
admin.site.register(Email, EmailAdmin)


class VoucherAdmin(ImportExportModelAdmin):
    list_display = ("id", "code","create_at")
    pass
admin.site.register(Voucher, VoucherAdmin)

