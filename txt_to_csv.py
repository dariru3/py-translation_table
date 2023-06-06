import csv

# Read the text from the .txt file
with open('separated.txt', 'r') as file:
    text = file.read()

# Split the text into blocks
blocks = text.split('\n\n')

# Write the blocks to a .csv file
with open('file.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    for block in blocks:
        writer.writerow([block])
