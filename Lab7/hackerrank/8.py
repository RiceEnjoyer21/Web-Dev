def merge_the_tools(s, k):
    for i in range(0, len(s), k):  
        substring = s[i:i + k]  
        unique_chars = ""
        for char in substring:
            if char not in unique_chars:
                unique_chars += char
        print(unique_chars)

s = "AABCAAADA"
k = 3
merge_the_tools(s, k)