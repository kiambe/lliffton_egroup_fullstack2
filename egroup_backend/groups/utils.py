from datetime import datetime,timedelta

time_hours=18

def replace_string(_string,_string_to_replace, _value):
    x = _string.replace(_string_to_replace,_value)
    
    return x


def add_time(d="2023-01-04T09:00:00.999Z",hrs=None):
    
    time_to_add = time_hours
    
    if hrs != None:
        time_to_add = hrs
    
    d=replace_string(d,"T"," ")

    d = replace_string(d,"Z","")

    dt = datetime.strptime(d, '%Y-%m-%d %H:%M:%S.%f')
    result_1 = dt + timedelta(hours=time_to_add)
    print(result_1)
    print("***********")
    
    
    result_1 = replace_string(f"{result_1}"," ","T")
    
    return result_1
    