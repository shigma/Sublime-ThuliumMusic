const fs = require('fs');

const DurationDict = [-3, -2, -1, 0, 1, 2, 3];

for (const key of DurationDict) {
  const filename = `${__dirname}/dist/Dur-${key}.sublime-snippet`;
  const content = `<snippet>
    <content>
  		<![CDATA[Dur(${key})$0]]>
    </content>
    <tabTrigger>d${key}</tabTrigger>
    <scope>track.Thulium</scope>
    <description>Dur(${key})</description>
  </snippet>`;
  fs.writeFileSync(filename, content, {encoding: 'utf8'});
}

