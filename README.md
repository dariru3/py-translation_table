# py-translation_table

This project aims to facilitate the translation of PDF documents by extracting text and organizing it into a table, allowing human translators to work more efficiently. It's a Python-based solution that uses PDFMiner.six for text extraction and handles CSV file creation for table organization. The project is still a work in progress, and contributions are welcome.

## Process
This process includes both automated and manual steps:

1. **Python (Automated)**: The script `extract_text.py` extracts text from a PDF and writes it to a `.txt` file.

2. **Manual**: Open the generated `.txt` file and separate blocks of text with one empty line. Each block will later be placed into a table cell.

3. **Python (Automated)**: The script `txt_to_csv.py` reads the edited `.txt` file from Step 2 and separates each block of text by line breaks into a `.csv` file.

4. **Manual**: Open the generated `.csv` file in Excel or any other spreadsheet software.

5. **Manual**: Copy and paste cells from Excel into Word or your preferred word processing software for translation work.

## Usage

1. Run `extract_text.py` with the appropriate parameters to extract text from your PDF file. By default, this script extracts from the first 6 pages of 'report_JP.pdf' and writes to 'export.txt'.
2. Edit 'export.txt' manually, adding line breaks to denote where each cell in the table should begin.
3. Run `txt_to_csv.py` to convert the edited '.txt' file into a '.csv' file.

## Future Improvements

- Automate the process of adding line breaks to denote cells.
- Support for other languages in text extraction.
- Options for changing the range of pages to extract from.
