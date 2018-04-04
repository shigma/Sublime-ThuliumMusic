import os

class tmScope:
    function = "name.function.Thulium"

path = os.environ['APPDATA'] + '/Sublime Text 3/Packages/Thulium/'

def get_template(filename):
    css = open(path + 'Plugins/' + filename + '.css')
    html = '''
        <body id="Thulium Function Document">
            <style>''' + css.read() + '''</style>
            {0}
        </body>'''
    css.close()
    return html





