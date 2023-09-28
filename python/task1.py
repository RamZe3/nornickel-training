#заданный список чисел
numbers = [1, 2, 3, 4, 5, 6, 237, 8, 9, 10]

for number in numbers:
    if number % 2 == 0:
        print(number)
    
    if number == 237:
        break
