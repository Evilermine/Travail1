xcopy "src\img" "dist\img\" /s
xcopy "src\css" "dist\css\" /s
xcopy "src\html" "dist\html\" /s
copy "src\index.html" "dist"
webpack --config webpack.config.js
@pause