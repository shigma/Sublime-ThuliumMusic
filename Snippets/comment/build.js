const fs = require('fs');
for (let i = 1; i <= 26; i++) {
  const upper = String.fromCharCode(i + 64);
  const lower = String.fromCharCode(i + 96);
  const filename = `${__dirname}/dist/Section-${upper}.sublime-snippet`;
  const content = `<snippet>
  <content><![CDATA[-------------------- Section ${upper} --------------------
$0]]></content>
  <tabTrigger>s${lower}</tabTrigger>
  <scope>meta.comment.Thulium</scope>
  <description>Section ${upper}</description>
</snippet>`;
  fs.writeFileSync(filename, content, {encoding: 'utf8'});
}
