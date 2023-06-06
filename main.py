import csv
from pdfminer.high_level import extract_pages
from pdfminer.layout import LTTextBoxHorizontal

def extract_text_from_pages(pdf_path, start_page, end_page):
    for page_number, page in enumerate(extract_pages(pdf_path), start=1):
        if start_page <= page_number <= end_page:
            for element in page:
                if isinstance(element, LTTextBoxHorizontal):
                    yield element.get_text()

# Specify the start and end pages
start_page = 1
end_page = 9

# Extract text from the PDF
text_generator = extract_text_from_pages('ir2022_JP.pdf', start_page, end_page)

# Split the text into paragraphs and write to a CSV file
with open('file.txt', 'w') as file:
    for text in text_generator:
        file.write(text)
