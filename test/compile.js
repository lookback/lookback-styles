import test from 'ava';
import sass from 'node-sass';
import Path from 'path';

test('Can compile all', t => {
  const result = sass.renderSync({
    // Just try to compile the whole shebang to see if it goes through.
    file: Path.join(__dirname, '../lookback/all.scss')
  });

  t.truthy(result, 'could compile');
  t.truthy(typeof result.css.toString() === 'string', 'generated CSS is a String');
});

test('Can compile a single partial file', t => {
  const result = sass.renderSync({
    file: Path.join(__dirname, './partial.scss')
  });

  t.truthy(result, 'could compile');
  t.truthy(typeof result.css.toString() === 'string', 'generated CSS is a String');
});
