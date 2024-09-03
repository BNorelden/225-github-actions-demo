const { dayOfTheWeek } = require('./app');


test('getDay returns the long-format day of the week', () => {
    const day = dayOfTheWeek( new Date('3/11/2020') );
    expect( day ).toBe('Wednesday');
});

test('getDay returns the long-format day of the week', () => {
    const day = dayOfTheWeek( new Date('3/12/2020') );
    expect( day ).toBe('Thursday');
});

test('getDay returns the long-format day of the week', () => {
  const day = dayOfTheWeek(new Date('3/13/2020'));
  expect(day).toBe('Friday');
});

test('getDay returns the long-format day of the week', () => {
  const day = dayOfTheWeek(new Date('3/14/2020'));
  expect(day).toBe('Saturday');
});