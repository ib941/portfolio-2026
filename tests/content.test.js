import fs from 'node:fs';
import test from 'node:test';
import assert from 'node:assert/strict';

const readDictionary = locale => JSON.parse(fs.readFileSync(new URL(`../src/dictionaries/${locale}.json`, import.meta.url), 'utf8'));
const keys = (value, prefix = '') => Object.entries(value).flatMap(([key, item]) => item && typeof item === 'object' ? keys(item, `${prefix}${key}.`) : [`${prefix}${key}`]);

test('English and Arabic dictionaries have matching translation keys', () => {
  assert.deepEqual(keys(readDictionary('en')).sort(), keys(readDictionary('ar')).sort());
});

test('translated project entries keep the correct stable identities', () => {
  for (const locale of ['en', 'ar']) {
    const work = readDictionary(locale).work;
    assert.deepEqual(work.section1.projects.map(project => project.id), ['shourna', 'zfakhama', 'gtf-plastics']);
    assert.deepEqual(work.section2.projects.map(project => project.id), ['oud-jassar', 'ghena', 'abat-rowa']);
    assert.deepEqual(work.section3.items.map(item => item.id), ['visual-1', 'visual-2', 'visual-3']);
  }
});
