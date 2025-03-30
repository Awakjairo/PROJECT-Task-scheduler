// Mock document and window objects
const mockLocation = { href: "" };
let eventCallback;
let errorMessageElement = { textContent: "" };

global.window = { location: mockLocation };
global.document = {
  getElementById: jest.fn((id) => {
    if (id === "error-message") return errorMessageElement;
    return {
      value: id === "username" ? "awakjairo" : "password",
      addEventListener: jest.fn((event, callback) => {
        eventCallback = callback;
      }),
      textContent: "",
    };
  }),
};

describe("Authentication Tests", () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
    mockLocation.href = "";
    errorMessageElement.textContent = "";
    require("../src/redirect");
  });

  test("successful login should redirect to homepage", () => {
    // Simulate login button click
    const clickEvent = { preventDefault: jest.fn() };
    eventCallback(clickEvent);

    // Check if preventDefault was called
    expect(clickEvent.preventDefault).toHaveBeenCalled();

    // Check if redirect happened
    expect(window.location.href).toBe("homepage.html");
  });

  test("failed login should show error message", () => {
    // Mock incorrect password
    document.getElementById = jest.fn((id) => {
      if (id === "error-message") return errorMessageElement;
      return {
        value: id === "username" ? "awakjairo" : "wrongpassword",
        addEventListener: jest.fn((event, callback) => {
          eventCallback = callback;
        }),
        textContent: "",
      };
    });

    // Simulate login button click
    const clickEvent = { preventDefault: jest.fn() };
    eventCallback(clickEvent);

    // Check if error message was set
    expect(errorMessageElement.textContent).toBe(
      "Invalid username or password"
    );
  });
});
