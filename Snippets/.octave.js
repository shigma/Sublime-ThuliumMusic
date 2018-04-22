const fs = require('fs');

const OctaveDict = [-3, -2, -1, 0, 1, 2, 3];

for (const key of OctaveDict) {
  const filename = `${__dirname}/dist/Oct-${key}.sublime-snippet`;
  const content = `<snippet>
    <content>
  		<![CDATA[Oct(${key})$0]]>
    </content>
    <tabTrigger>o${key}</tabTrigger>
    <scope>track.Thulium</scope>
    <description>Oct(${key})</description>
  </snippet>`;
  fs.writeFileSync(filename, content, {encoding: 'utf8'});
}

