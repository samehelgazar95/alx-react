import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('current year', () => {
  expect(getFullYear()).toBe(2024);
});

test('footer copy', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('last notification', () => {
  expect(getLatestNotification()).toBe(
    '<strong>Urgent Requirement</strong> - complete by EOD'
  );
});
