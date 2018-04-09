import sublime
import sublime_plugin
import subprocess
from .Assets import *

class tmTokenizeCommand(sublime_plugin.WindowCommand):
	def run(self, args = ''):
		self.sheet_view = self.window.active_sheet().view();
		if not self.sheet_view: return

		subprocess.Popen('taskkill /F /IM node.exe', shell = True)

		command = 'node "{build}" "{file}" {args}'''.format(
			build = path + 'Plugins/Build',
			file = self.sheet_view.file_name(),
			args = args
		)
		self.result = subprocess.Popen(command, 
			stdout = subprocess.PIPE,
			stderr = subprocess.PIPE,
			shell = True
		)

		output = self.result.stdout.read().decode('utf-8')
		self.window.status_message(command)

		self.output_view = self.window.create_output_panel('tm')

		self.output_view.run_command('append', {
			'characters': output, 
			'force': True, 
			'scroll_to_end': True
		})
		self.window.run_command("show_panel", {"panel": "output.tm"})


 