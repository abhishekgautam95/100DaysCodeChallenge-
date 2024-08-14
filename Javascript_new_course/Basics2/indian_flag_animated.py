import pygame
import math
import random

# Initialize Pygame
pygame.init()

# Set up display
width, height = 800, 600
screen = pygame.display.set_mode((width, height))
pygame.display.set_caption('Indian Flag with Stand, Stage, and Falling Petals')

# Colors
orange = (255, 153, 51)
white = (255, 255, 255)
green = (19, 136, 8)
blue = (0, 0, 255)
brown = (139, 69, 19)
grey = (192, 192, 192)
sky_blue = (135, 206, 235)
flower_color = (255, 105, 180)  # Pink for flower petals
greenery_color = (34, 139, 34)

# Define flag dimensions and position
flag_width, flag_height = 250, 150
pole_height = 400
flag_x, flag_y = (width - flag_width) // 2, height // 2 - flag_height - 50

# Flowers setup
flowers = []
for _ in range(30):
    flowers.append([random.randint(0, width), random.randint(-height, 0)])

# Function to draw the flag
def draw_flag(x, y):
    # Draw the flagpole
    pole_x = x + flag_width // 2 - 5
    pygame.draw.rect(screen, grey, [pole_x, y - pole_height, 10, pole_height + flag_height])

    # Draw the flag
    pygame.draw.rect(screen, orange, [x, y, flag_width, flag_height // 3])
    pygame.draw.rect(screen, white, [x, y + flag_height // 3, flag_width, flag_height // 3])
    pygame.draw.rect(screen, green, [x, y + 2 * flag_height // 3, flag_width, flag_height // 3])

    # Draw the Ashoka Chakra
    chakra_radius = 30
    chakra_x, chakra_y = x + flag_width // 2, y + flag_height // 2
    pygame.draw.circle(screen, blue, (chakra_x, chakra_y), chakra_radius, 2)

    for i in range(24):
        angle = math.radians(15 * i)
        line_x = chakra_x + chakra_radius * math.cos(angle)
        line_y = chakra_y + chakra_radius * math.sin(angle)
        pygame.draw.line(screen, blue, (chakra_x, chakra_y), (line_x, line_y), 2)

# Function to draw the flagpole stand
def draw_pole_stand(x, y):
    # Draw the base
    pygame.draw.rect(screen, grey, [x - 25, y, 60, 20])  # Top base
    pygame.draw.rect(screen, grey, [x - 40, y + 20, 90, 15])  # Middle base
    pygame.draw.rect(screen, grey, [x - 60, y + 35, 130, 20])  # Bottom base

    # Draw the stage or platform
    pygame.draw.rect(screen, brown, [x - 100, y + 55, 200, 20])

# Function to draw falling flower petals
def draw_flowers():
    for i, flower in enumerate(flowers):
        pygame.draw.circle(screen, flower_color, flower, 5)
        flowers[i][1] += 2  # Falling speed

        if flowers[i][1] > height:
            flowers[i][1] = random.randint(-20, -5)
            flowers[i][0] = random.randint(0, width)

# Function to draw the landscape
def draw_landscape():
    pygame.draw.rect(screen, greenery_color, [0, height - 50, width, 50])
    pygame.draw.circle(screen, greenery_color, (100, height - 50), 80)
    pygame.draw.circle(screen, greenery_color, (700, height - 50), 80)

def main():
    clock = pygame.time.Clock()
    running = True

    while running:
        screen.fill(sky_blue)  # Sky blue background

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False

        # Draw the landscape
        draw_landscape()

        # Draw the pole stand
        draw_pole_stand(flag_x + flag_width // 2, flag_y + flag_height)

        # Draw the flag
        draw_flag(flag_x, flag_y)

        # Draw the falling flower petals
        draw_flowers()

        pygame.display.update()
        clock.tick(60)

    pygame.quit()

if __name__ == "__main__":
    main()