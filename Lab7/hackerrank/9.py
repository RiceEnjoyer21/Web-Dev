import re

def decode_matrix_script(matrix):
    transposed_text = ''.join([''.join(column) for column in zip(*matrix)])
    cleaned_text = re.sub(r'[^a-zA-Z0-9]+', ' ', transposed_text)
    print(cleaned_text)


rows, cols = map(int, input().split())
matrix = [input() for _ in range(rows)]

decode_matrix_script(matrix)