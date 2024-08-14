import turtle as t

# Function to draw a rectangle
def draw_rectangle(color, width, height):
    t.begin_fill()
    t.color(color)
    for _ in range(2):
        t.forward(width)
        t.right(90)
        t.forward(height)
        t.right(90)
    t.end_fill()

# Function to draw the Ashoka Chakra
def draw_ashoka_chakra(radius):
    t.penup()
    t.goto(0, -radius)
    t.pendown()
    t.color("blue")
    t.circle(radius)
    
    # Draw the 24 spokes
    for _ in range(24):
        t.penup()
        t.goto(0, 0)
        t.setheading(360/24 * _)
        t.pendown()
        t.forward(radius)
    
# Main function to draw the flag
def draw_indian_flag():
    t.speed(10)
    t.penup()
    t.goto(-150, 100)
    t.pendown()

    # Draw the orange rectangle
    draw_rectangle("orange", 300, 60)
    
    # Move to the position for the white rectangle
    t.goto(-150, 40)
    draw_rectangle("white", 300, 60)
    
    # Move to the position for the green rectangle
    t.goto(-150, -20)
    draw_rectangle("green", 300, 60)
    
    # Draw the Ashoka Chakra
    t.penup()
    t.goto(0, 40)
    t.pendown()
    draw_ashoka_chakra(20)

    t.hideturtle()
    t.done()

draw_indian_flag()