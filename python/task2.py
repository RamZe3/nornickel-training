number = float(input("Введите произвольное число: "))

borderline = float(input("Введите пограничное число: "))

if number < borderline:
    print("Первое число меньше пограничного.")
elif number > borderline:
    print("Первое число больше пограничного.")

    if number > borderline * 3:
        print("Первое число больше пограничного более, чем в 3 раза.")