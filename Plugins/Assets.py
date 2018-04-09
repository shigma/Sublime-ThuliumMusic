import os
import yaml

class tmScope:
    function = "name.function.Thulium"

path = os.environ['APPDATA'] + '/Sublime Text 3/Packages/Thulium/'

config_path = path + 'Plugins/Config.json'

if not os.path.isfile(config_path):
    file = open(self.config_path, 'w')
    file.write("{}")
    file.close()

def get_template(filename):
    with open(path + 'Plugins/' + filename + '.css') as css:
        return '''
        <body id="Thulium Function Document">
            <style>''' + css.read() + '''</style>
            {0}
        </body>'''

class tmPackage:
    with open(path + 'Document/index.yaml') as file:
        index = yaml.load(file)
        packages = []
        functions = []
        funcDict = {}
        for package in index['Packages']:
            packages.append(package['Name'])
            functions.extend(package['Library'])
            for function in package['Library']:
                funcDict[function] = package['Name']

