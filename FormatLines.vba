Sub FormatText()
    Selection.WholeStory
    Selection.Find.ClearFormatting
    Selection.Find.Replacement.ClearFormatting
    Selection.Find.Execute FindText:="^p", ReplaceWith:="", Replace:=wdReplaceAll
    Selection.Find.Execute FindText:="。", ReplaceWith:="。^p", Replace:=wdReplaceAll
End Sub


Sub FormatAndCopyText()

    ' Reference to Word application
    Dim WordApp As Word.Application
    Dim WordDoc As Word.Document
    Set WordApp = CreateObject("Word.Application")
    
    ' Open the document
    ' Change "YourDocumentPath.docx" to the path of your actual document
    Set WordDoc = WordApp.Documents.Open("/Users/daryl-villalobos/Desktop/TranslationTableFormat.docm")

    ' Run the text formatting in Word
    With WordDoc.Content
        .WholeStory
        .Find.ClearFormatting
        .Find.Replacement.ClearFormatting
        .Find.Execute FindText:="^p", ReplaceWith:="", Replace:=wdReplaceAll
        .Find.Execute FindText:="。", ReplaceWith:="。^p", Replace:=wdReplaceAll
    End With

    ' Copy the whole story
    WordDoc.Content.Copy

    ' Reference to Excel application
    Dim ExcelApp As Excel.Application
    Dim ExcelWB As Excel.Workbook
    Set ExcelApp = CreateObject("Excel.Application")
    
    ' Open the Workbook
    ' Change "YourWorkbookPath.xlsx" to the path of your actual workbook
    Set ExcelWB = ExcelApp.Workbooks.Open("/Users/daryl-villalobos/Desktop/TranslationTableDestination.xlsm")
    
    ' Find the next empty cell in the first column and paste the text
    Dim NextEmptyCell As Range
    Set NextEmptyCell = ExcelWB.Sheets(1).Cells(ExcelWB.Sheets(1).Rows.Count, 1).End(xlUp).Offset(1, 0)
    NextEmptyCell.PasteSpecial Paste = xlPasteValues

    ' Bring Excel to front
    ExcelApp.Visible = True
    ExcelApp.Activate

End Sub

Sub FormatAndCopyText()

    Dim WordApp As Word.Application
    Dim WordDoc As Word.Document
    Dim ExcelApp As Object
    Dim ExcelSheet As Object
    Dim WordContent As String

    Set WordApp = Application
    Set WordDoc = WordApp.ActiveDocument

    WordApp.Selection.WholeStory
    WordApp.Selection.Find.ClearFormatting
    WordApp.Selection.Find.Replacement.ClearFormatting
    WordApp.Selection.Find.Execute FindText:="^p", ReplaceWith:="", Replace:=wdReplaceAll
    WordApp.Selection.Find.Execute FindText:="。", ReplaceWith:="。^p", Replace:=wdReplaceAll

    WordContent = WordApp.ActiveDocument.Content.Text

    ' Check if Excel is already open
    On Error Resume Next
    Set ExcelApp = GetObject(, "Excel.Application")
    If Err.Number <> 0 Then
        MsgBox "Excel is not open. Please open Excel and try again."
        Exit Sub
    End If
    On Error GoTo 0

    ExcelApp.Visible = True
    Set ExcelSheet = ExcelApp.ActiveSheet

    ExcelSheet.Cells(ExcelSheet.Rows.Count, 1).End(xlUp).Offset(1, 0).Value = WordContent

End Sub
