Sub FormatText()
    Selection.WholeStory
    Selection.Find.ClearFormatting
    Selection.Find.Replacement.ClearFormatting
    Selection.Find.Execute FindText:="^p", ReplaceWith:="", Replace:=wdReplaceAll
    Selection.Find.Execute FindText:="。", ReplaceWith:="。^p", Replace:=wdReplaceAll
End Sub