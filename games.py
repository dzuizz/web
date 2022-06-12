from random import randint

def remove_class(element, class_name):
    element.element.classList.remove(class_name)

def add_class(element, class_name):
    element.element.classList.add(class_name)

user_move = None
computer_move = None

result_text = Element("result-text")

# 1 -> rock
# 2 -> paper
# 3 -> scissors

def move(move):
    user_move = move

def start_round():
    computer_move = randint(1, 3)
    if user_move == 1: # Rock
        if computer_move == 1: # Rock
            result_text.innerHTML = "It's a tie!"
        elif computer_move == 2: # Paper
            result_text.innerHTML = "You lose!"
        else: # Scissors
            result_text.innerHTML = "You win!"
    elif user_move == 2: # Paper
        if computer_move == 1: # Rock
            result_text.innerHTML = "You win!"
        elif computer_move == 2: # Paper
            result_text.innerHTML = "It's a tie!"
        else: # Scissors
            result_text.innerHTML = "You lose!"
    else: # Scissors
        if computer_move == 1: # Rock
            result_text.innerHTML = "You lose!"
        elif computer_move == 2: # Paper
            result_text.innerHTML = "You win!"
        else: # Scissors
            result_text.innerHTML = "It's a tie!"
    