from appuser.Utils.menus import *
def level7(custom_text,member_id,phone_number):
    if custom_text[-5] == '4':
        if custom_text[-1] == '1':
            return response_menu_inputs_voucher_generate_voucher(custom_text,member_id,phone_number)
        else:
            return response_decline_conditions(custom_text,msg="Cancelled loan transaction.")
    # if custom_text[-1] == '1':
    #     return response_menu_savings(custom_text)
    # if custom_text[-1] == '2':
    #     return response_menu_welfare(custom_text)
    # if custom_text[-1] == '3':
    #     return response_menu_penalties(custom_text)
    # if custom_text[-1] == '4':
    #     return response_menu_loan(custom_text)
    # if custom_text[-1] == '5':
    #     return response_menu_inputs(custom_text)
    # if custom_text[-1] == '6':
    #     return response_menu_market(custom_text)
        