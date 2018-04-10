import os
import json
import sublime
import sublime_plugin

from .Assets import *

class tmSetKernelPathCommand(sublime_plugin.WindowCommand):

    def run(self):
        caption = 'Kernal Path: '
        default = '> Input Kernel Path ...'
        with open(config_path) as file:
            self.config = json.loads(file.read())
        initial = self.config.get('Kernel', default)
        self.input_view = self.window.show_input_panel(caption, initial, self.on_done, None, None)
        self.input_view.set_syntax_file('tmPath.sublime-syntax')
        self.input_view.settings().set("gutter", False)

    def on_done(self, string):
        if os.path.isdir(string):
            self.config['Kernel'] = string
            with open(config_path, 'w') as file:
                file.write(json.dumps(self.config))
            self.window.status_message('Configurate directory "{0}" as kernel path.'.format(string))
        else:
            self.window.status_message('Error: Directory "{0}" does not exist.'.format(string))




