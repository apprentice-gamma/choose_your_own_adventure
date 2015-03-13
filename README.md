Choose Your Own Adventure!

##1. My Brain Is Running In Circles (Loops)

###Exercise 1: Harmonic Sum

Write a program to compute the sum of a harmonic series, as shown below, where n=50000. Calculate the sum from left-to-right, and then from right-to-left.

```
Harmonic(n) = 1 + 1/2 + 1/3 + 1/4 + .... + 1/n
```

###Exercise 2: Fibonacci Sequence
Each new number in the Fibonacci sequence is calculated by adding the previous two numbers. By considering the terms in the Fibonacci sequence whose values do not exceed 4 million, write a program to find the sum of the even-valued terms.

###Exercise 3: Multiplication Tables

Write a program that calculates the multiplication table from 1 to 9 and displays its output exactly as depicted below.
```
1 2 3 4 5 6 7 8 9
2 4 6 8 10 12 14 16 18
3 6 9 12 15 18 21 24 27
4 8 12 16 20 24 28 32 36
5 10 15 20 25 30 35 40 45
6 12 18 24 30 36 42 48 54
7 14 21 28 35 42 49 56 63
8 16 24 32 40 48 56 64 72
9 18 27 36 45 54 63 72 81
```


##2. Fork All Of This (Git)

Choose any (2) exercises that sounds interesting to you. For each exercise, complete the following steps:

  * Create a new project
  * Initialize it as a local repository
  * Create a matching repository on Github

Use "git remote add origin" to link your repositories together.

Practice committing every few lines of code, writing descriptive commit messages, undoing changes to uncommitted files, and pushing up to your Github account.

Remember to check `git status` frequently.


##3. What Even Is An Array? (Collections)

###Exercise 1: Weekly Calendar
Write a program that manages a weekly planner. Your program should allow a user to:
*view all the events listed in the planner
*search for an event by name
*search for an event by date
*add an event to a particular day
*delete an event from a particular day.

###Exercise 2: To-Do List
Write a program that manages a To-Do List. Each item on the to-do list should have a description and a state (To-Do, In Progress, or Done). 

Your program should allow the user to 
  * add items to the to-do list
  * display all existing items
  * display existing items by state (e.g., the user may only want to view In Progress items)
  * delete items.


##4. Where Do Objects Come From? (OO Concepts)

###Exercise 1: Card Shuffle
Write a program that deals a random hand of (5) cards to each of (4) players. Assume a standard 52-card deck.

###Exercise 2: Hangman Game
Write a game of Hangman. The program should give the user a word's length, should allow the user to guess a limited number of times, should keep track of letters the user has already guessed and display them upon request, and should offer up to (2) 1-letter hints on request.


##5. Go Ahead, Hit Me. I Can Take It.

###Exercise 1: Bowling Game

Write a game that simulates a game of bowling, and return the score. A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame, the player can throw 1 or 2 times. The actual number depends on strikes and spares. The score of a frame is the number of knocked-down pins plus bonuses for strikes and spares. After each frame, the 10 pins are reset.

 - Strikes: If a player has a strike (knocks down all 10 pins in the first roll), the frame ends immediately and the bonus for that frame is the number of pins knocked down by the next two rolls.

 - Spares: The player gets a spare if he/she knocks down all 10 pins within the first two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of the next frame.)

 - 10th Frame: If the player rolls a strike or a spare in the 10th frame, he/she can roll additional balls for the bonus (but may never roll more than 3 balls in the 10th frame). The additional rolls only count for the bonus, not for the regular count.


###Exercise 2: Conway's Game of Life

Your task is to write a program to calculate the next generation of Conway's Game of Life, given any starting position. You start with a two dimensional grid of cells, where each cell is either alive or dead. The grid is finite, and no life can exist off the edges. When calculating the next generation of the grid, follow these four rules:

 * Any live cell with fewer than two live neighbors dies, as if caused by underpopulation.
 * Any live cell with more than three live neighbors dies, as if by overcrowding.
 * Any live cell with two or three live neighbors lives on to the next generation.
 * Any dead cell with exactly three live neighbors becomes a live cell.

(You may wish to Google this (very popular) kata for examples and additional instructions.)