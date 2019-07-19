# js-dev-env
:books:Javascript Development Environment:zap:

<b>Editor and Configuration</b>
First of all, editor of choice here is surprise surprise VS Code. I’m actually happly surprised that Erich Gamma is behind this.

Use EditorConfig to manage, well, editor configurations. Tabs VS spaces, etc. Note that VS Code need to install a plugin for it to work.

The example {{temp|kbd|.editorconfig}}file:
{{CodeBox|
<source lang="javascript">
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
charset = utf-8

[*.md]
trim_trailing_whitespace = true
}}
