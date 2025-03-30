// Mock document object for testing
global.document = {
  getElementById: jest.fn(() => ({
    value: '',
    addEventListener: jest.fn(),
    textContent: '',
    reset: jest.fn(),
    createElement: jest.fn(() => ({
      textContent: '',
      className: '',
      appendChild: jest.fn(),
      addEventListener: jest.fn(),
    })),
  })),
  createElement: jest.fn(() => ({
    textContent: '',
    className: '',
    appendChild: jest.fn(),
    addEventListener: jest.fn(),
  })),
};

// Sample functions to test
function validateTaskName(name) {
  if (!name) return false;
  return name.trim().length > 0;
}

function validateTaskDeadline(deadline) {
  if (!deadline) return false;
  const deadlineDate = new Date(deadline);
  const now = new Date();
  return deadlineDate > now;
}

function formatTaskDeadline(deadline) {
  if (!deadline) return '';
  const date = new Date(deadline);
  return date.toLocaleString();
}

// Tests
describe('Task Validation Functions', () => {
  test('validateTaskName should return true for valid names', () => {
    expect(validateTaskName('Buy groceries')).toBe(true);
    expect(validateTaskName('Complete project')).toBe(true);
  });

  test('validateTaskName should return false for empty names', () => {
    expect(validateTaskName('')).toBe(false);
    expect(validateTaskName('   ')).toBe(false);
    expect(validateTaskName(null)).toBe(false);
    expect(validateTaskName(undefined)).toBe(false);
  });

  test('validateTaskDeadline should return true for future dates', () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    expect(validateTaskDeadline(tomorrow.toISOString())).toBe(true);
  });

  test('validateTaskDeadline should return false for past dates', () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    expect(validateTaskDeadline(yesterday.toISOString())).toBe(false);
  });

  test('formatTaskDeadline should format dates correctly', () => {
    const testDate = new Date('2023-12-31T23:59:59');
    const formatted = formatTaskDeadline(testDate.toISOString());
    expect(formatted).toBeTruthy();
    expect(typeof formatted).toBe('string');
  });
});
