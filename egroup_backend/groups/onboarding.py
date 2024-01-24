from django.contrib.auth.models import User
import pandas as pd
from .models import *

# user = User.objects.create_user("john", "lennon@thebeatles.com", "johnpassword")
# user.save()

df = pd.read_csv("/Users/agoya/Projects/Web/lliffton_egroup_fullstack2/egroup_backend/groups/mentors.csv")


# create users here

def create_mentor_users():
    i = 1
    while i<len(df)+1:
        
        # county_id = df.iloc[i,2]
        name = df.iloc[i,5]
        phone = df.iloc[i,9]

        # get the county object

        # county_object = County.objects.get(id=id)
        password = "password_!234"
        email = f"user_{phone}@mail.com"

        try:
            user = User.objects.create_user(name, email, password)
            user.save()
        except Exception as e:
            print(f"Error creating user {name} with email {email}")
        print(f"Created user {name} with email {email}")
        i+=1


def update_mentor_profile():
    i = 1

    while i<len(df)+1:
        county_id = df.iloc[i,2]
        scounty_id = df.iloc[i,3]
        value_chain = df.iloc[i,12]
        value_chain_level = df.iloc[i,14]
        business_type = df.iloc[i,18]


        gender = df.iloc[i,6]
        age_group = df.iloc[i,7]

        gender=gender.upper() if isinstance(gender, str) else gender


        value_chain=value_chain.upper() if isinstance(value_chain, str) else value_chain

        value_chain_level=value_chain_level.upper() if isinstance(value_chain_level, str) else value_chain_level
        business_type=business_type.upper() if isinstance(business_type, str) else business_type


        phone = df.iloc[i,9]
        name = df.iloc[i,5]
        print(f"county_id {county_id}")



        # get object of the user object

        email = f"user_{phone}@mail.com"

        

        try:
            user = User.objects.get(email=email,username=name)
            profile = Profile.objects.get(user=user)

            if profile != None:

                # update profule
                Profile.objects.filter(user=user).update(
                    fullname=name,primary_phone_number=phone,
                    gender=gender,age_group=age_group,is_vendor="YES",
                    verified=True
                )
            # vendor = Vendor(user=user,business_name=name, contact_person_name=name,contact_person_phone=phone,
            #                 county=county_object,subcounty=scounty_object,value_chain=value_chain,
            #                 value_chain_level=value_chain_level,business_type=business_type
            #                 )
            # vendor.save()
            
            print(f"Created VENDOR user {name} with email {email}")
        except Exception as e:
            print(f"Error {e}")
        

        print(f"Data is at {i+1}")
        i+=1


def create_mentor_vendor():
    i = 1

    while i<len(df)+1:
        county_id = df.iloc[i,2]
        scounty_id = df.iloc[i,3]
        value_chain = df.iloc[i,12]
        value_chain_level = df.iloc[i,14]
        business_type = df.iloc[i,18]

        value_chain=value_chain.upper() if isinstance(value_chain, str) else value_chain

        value_chain_level=value_chain_level.upper() if isinstance(value_chain_level, str) else value_chain_level
        business_type=business_type.upper() if isinstance(business_type, str) else business_type





        phone = df.iloc[i,9]
        name = df.iloc[i,5]
        print(f"county_id {county_id}")


        # get the county object
        county_object = County.objects.get(id=county_id)
        scounty_object = SubCounty.objects.get(id=scounty_id)

        # get object of the user object

        email = f"user_{phone}@mail.com"

        

        try:
            user = User.objects.get(email=email,username=name)

            # ADD VENDOR
            vendor = Vendor(user=user,business_name=name, contact_person_name=name,contact_person_phone=phone,
                            county=county_object,subcounty=scounty_object,value_chain=value_chain,
                            value_chain_level=value_chain_level,business_type=business_type
                            )
            vendor.save()
            
            print(f"Created VENDOR user {name} with email {email}")
        except Exception as e:
            print(f"Error {e}")
        

        print(f"Data is at {i+1}")
        i+=1