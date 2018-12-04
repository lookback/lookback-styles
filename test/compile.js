const assert = require('assert');
const sass = require('sass');
const Path = require('path');

function test(title, cb) {
  try {
    cb(assert);
    console.log(`✔︎ ${title}`);
  } catch (ex) {
    console.error(`✗ ${title}`);
    throw ex;
  }
}

test('Can compile base', t => {
  const result = sass.renderSync({
    // Just try to compile the whole shebang to see if it goes through.
    file: Path.join(__dirname, '../lookback/base.scss')
  });

  t.ok(result, 'could compile');
  t.ok(typeof result.css.toString() === 'string', 'generated CSS is a String');
});

test('Can compile all', t => {
  const result = sass.renderSync({
    // Just try to compile the whole shebang to see if it goes through.
    file: Path.join(__dirname, './all.scss')
  });

  t.ok(result, 'could compile');
  t.ok(typeof result.css.toString() === 'string', 'generated CSS is a String');
});

test('Can compile a single partial file', t => {
  const result = sass.renderSync({
    file: Path.join(__dirname, './partial.scss')
  });

  t.ok(result, 'could compile');
  t.ok(typeof result.css.toString() === 'string', 'generated CSS is a String');
});
