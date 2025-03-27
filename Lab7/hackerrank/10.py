import re

regex_integer_in_range = r"^[1-9][0-9]{5}$"
regex_alternating_repetitive_digit_pair = r"(?=(\d).\1)"

def is_valid_postal_code(P):
    return (bool(re.match(regex_integer_in_range, P)) and 
            len(re.findall(regex_alternating_repetitive_digit_pair, P)) < 2)

P = input().strip()
print(is_valid_postal_code(P))