const {format_date} = require('../utils/helpers');

// creating test to that format_date() takes Date() objects and returns dates in MM/DD/YYYY
test('format_date() returns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');
  
    expect(format_date(date)).toBe('3/20/2020');
  });

const {format_plural} = require('../utils/helpers')

// plural point and comments
test('format_plural() returns a pluralized word', () => {
      const plural = format_plural('tiger', 2);
      const single = format_plural('lion', 1);
      
      expect(plural).toBe('tigers');
      expect(single).toBe('lion');
});
