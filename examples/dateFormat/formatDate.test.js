import { formatDate } from './formatDate';

describe('formatDate', () => {
  test('should convert YYYY-MM-DD to DD/MM/YYYY', () => {
    expect(formatDate('2023-09-16')).toBe('16/09/2023');
    expect(formatDate('2025-12-31')).toBe('31/12/2025');
    expect(formatDate('2024-01-01')).toBe('01/01/2024');
  });

  test('should throw error for invalid date format', () => {
    expect(() => formatDate('2023/09/16')).toThrow('Invalid date format');
    expect(() => formatDate('16-09-2023')).toThrow('Invalid date format');
    expect(() => formatDate('abc')).toThrow('Invalid date format');
  });
});
