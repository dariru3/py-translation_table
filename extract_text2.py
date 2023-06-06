from pdfminer.converter import PDFPageAggregator
from pdfminer.layout import LAParams, LTTextBoxHorizontal
from pdfminer.pdfinterp import PDFResourceManager, PDFPageInterpreter
from pdfminer.pdfpage import PDFPage

def extract_text_from_pages(pdf_path, start_page, end_page):
    # Create a PDF resource manager object
    rsrcmgr = PDFResourceManager()

    # Set the parameters for analysis.
    laparams = LAParams(line_overlap=0.5, char_margin=4.0, line_margin=2.0, word_margin=0.1, boxes_flow=0.5)
    
    # Create a PDF page aggregator object.
    device = PDFPageAggregator(rsrcmgr, laparams=laparams)

    for page_number, page in enumerate(PDFPage.get_pages(open(pdf_path, 'rb')), start=1):
        if start_page <= page_number <= end_page:
            interpreter = PDFPageInterpreter(rsrcmgr, device)
            interpreter.process_page(page)
            # receive the LTPage object for the page.
            layout = device.get_result()
            for element in layout:
                if isinstance(element, LTTextBoxHorizontal):
                    yield element.get_text()

# Specify the start and end pages
start_page = 1
end_page = 6

# Extract text from the PDF
text_generator = extract_text_from_pages('ir2022_JP.pdf', start_page, end_page)

# Write the text to a .txt file
with open('export.txt', 'w') as file:
    for text in text_generator:
        file.write(text)
