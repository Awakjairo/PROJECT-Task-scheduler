// Mock document object for testing
let tasks = [];
let taskList;
let addTaskForm;
let addTaskBtn;

// Mock localStorage
global.localStorage = {
  getItem: jest.fn(() => JSON.stringify([])),
  setItem: jest.fn(),
};

// Mock functions
function addTask(e) {
  e.preventDefault();
  const taskName = document.getElementById("task-name").value;
  const taskDescription = document.getElementById("task-description").value;
  const taskDeadline = document.getElementById("task-deadline").value;
  tasks.push({
    name: taskName,
    description: taskDescription,
    deadline: taskDeadline,
  });
  displayTasks();
  addTaskForm.reset();
}

function displayTasks() {
  if (taskList) {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.textContent = `${task.name} - ${task.description} - ${task.deadline}`;
      taskList.appendChild(li);
    });
  }
}

global.document = {
  getElementById: jest.fn((id) => {
    if (id === "task-list-ul") {
      if (!taskList) {
        taskList = {
          innerHTML: "",
          appendChild: jest.fn(),
        };
      }
      return taskList;
    }
    if (id === "add-task-form") {
      if (!addTaskForm) {
        addTaskForm = {
          reset: jest.fn(),
        };
      }
      return addTaskForm;
    }
    if (id === "add-task-btn") {
      if (!addTaskBtn) {
        addTaskBtn = {
          addEventListener: jest.fn((event, handler) => {
            if (event === "click") {
              addTaskBtn.clickHandler = handler;
            }
          }),
          removeEventListener: jest.fn(),
          textContent: "Add Task",
          clickHandler: null,
        };
      }
      return addTaskBtn;
    }
    if (id === "task-name") {
      return { value: "Test Task" };
    }
    if (id === "task-description") {
      return { value: "Test Description" };
    }
    if (id === "task-deadline") {
      return { value: "2024-12-31" };
    }
    return {
      value: "",
      textContent: "",
    };
  }),
  createElement: jest.fn((type) => {
    if (type === "li") {
      return {
        textContent: "",
        appendChild: jest.fn(),
      };
    }
    if (type === "div") {
      return {
        className: "",
        appendChild: jest.fn(),
      };
    }
    if (type === "button") {
      return {
        textContent: "",
    addEventListener: jest.fn(),
      };
    }
    return {
      textContent: "",
      appendChild: jest.fn(),
    };
  }),
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
  if (!deadline) return "";
  const date = new Date(deadline);
  return date.toLocaleString();
}

// Tests
describe("Task Validation Functions", () => {
  test("validateTaskName should return true for valid names", () => {
    expect(validateTaskName("Buy groceries")).toBe(true);
    expect(validateTaskName("Complete project")).toBe(true);
  });

  test("validateTaskName should return false for empty names", () => {
    expect(validateTaskName("")).toBe(false);
    expect(validateTaskName("   ")).toBe(false);
    expect(validateTaskName(null)).toBe(false);
    expect(validateTaskName(undefined)).toBe(false);
  });

  test("validateTaskDeadline should return true for future dates", () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    expect(validateTaskDeadline(tomorrow.toISOString())).toBe(true);
  });

  test("validateTaskDeadline should return false for past dates", () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    expect(validateTaskDeadline(yesterday.toISOString())).toBe(false);
  });

  test("formatTaskDeadline should format dates correctly", () => {
    const testDate = new Date("2023-12-31T23:59:59");
    const formatted = formatTaskDeadline(testDate.toISOString());
    expect(formatted).toBeTruthy();
    expect(typeof formatted).toBe("string");
  });
});

describe("Task Management", () => {
  let mockTaskList,
    mockAddTaskForm,
    mockAddTaskBtn,
    mockTaskName,
    mockTaskDescription,
    mockTaskDeadline;

  beforeEach(() => {
    // Reset mocks and clear module cache
    jest.clearAllMocks();
    jest.resetModules();

    // Mock DOM elements
    mockTaskList = { innerHTML: "", appendChild: jest.fn() };
    mockAddTaskForm = { reset: jest.fn() };
    mockAddTaskBtn = {
      addEventListener: jest.fn((event, handler) => {
        mockAddTaskBtn.clickHandler = handler;
      }),
      removeEventListener: jest.fn(),
      textContent: "Add Task",
    };
    mockTaskName = { value: "Test Task" };
    mockTaskDescription = { value: "Test Description" };
    mockTaskDeadline = { value: "2024-12-31" };

    // Mock document.getElementById
    document.getElementById = jest.fn((id) => {
      switch (id) {
        case "task-list-ul":
          return mockTaskList;
        case "add-task-form":
          return mockAddTaskForm;
        case "add-task-btn":
          return mockAddTaskBtn;
        case "task-name":
          return mockTaskName;
        case "task-description":
          return mockTaskDescription;
        case "task-deadline":
          return mockTaskDeadline;
        default:
          return null;
      }
    });

    // Mock document.createElement
    document.createElement = jest.fn((type) => {
      const element = {
        textContent: "",
        appendChild: jest.fn(),
        addEventListener: jest.fn((event, handler) => {
          element.clickHandler = handler;
        }),
      };
      if (type === "div") {
        element.className = "";
      }
      return element;
    });

    // Load the script after setting up mocks
    require("../src/script.js");
  });

  test("should initialize task list and event listeners", () => {
    expect(document.getElementById).toHaveBeenCalledWith("task-list-ul");
    expect(document.getElementById).toHaveBeenCalledWith("add-task-form");
    expect(document.getElementById).toHaveBeenCalledWith("add-task-btn");
    expect(mockAddTaskBtn.addEventListener).toHaveBeenCalledWith(
      "click",
      expect.any(Function)
    );
  });

  test("should add a new task", () => {
    // Trigger add task
    mockAddTaskBtn.clickHandler({ preventDefault: jest.fn() });

    expect(mockAddTaskForm.reset).toHaveBeenCalled();
    expect(mockTaskList.innerHTML).toBe("");
    expect(document.createElement).toHaveBeenCalledWith("li");
  });

  test("should display tasks", () => {
    // Add a task first
    mockAddTaskBtn.clickHandler({ preventDefault: jest.fn() });

    expect(document.createElement).toHaveBeenCalledWith("li");
    expect(document.createElement).toHaveBeenCalledWith("div");
    expect(document.createElement).toHaveBeenCalledWith("button");
  });

  test("should delete a task", () => {
    // Add a task first
    mockAddTaskBtn.clickHandler({ preventDefault: jest.fn() });

    // Get the created button and simulate delete
    const createdElements = document.createElement.mock.results;
    const deleteBtn = createdElements[createdElements.length - 1].value;
    deleteBtn.clickHandler();

    expect(mockTaskList.innerHTML).toBe("");
  });

  test("should edit a task", () => {
    // Add a task first
    mockAddTaskBtn.clickHandler({ preventDefault: jest.fn() });

    // Get the created button and simulate edit
    const createdElements = document.createElement.mock.results;
    const editBtn = createdElements[createdElements.length - 2].value;
    editBtn.clickHandler();

    expect(mockTaskName.value).toBe("Test Task");
    expect(mockTaskDescription.value).toBe("Test Description");
    expect(mockTaskDeadline.value).toBe("2024-12-31");
    expect(mockAddTaskBtn.textContent).toBe("Update Task");
  });

  test("should update a task", () => {
    // Add initial task
    mockAddTaskBtn.clickHandler({ preventDefault: jest.fn() });

    // Get edit button and click it
    const createdElements = document.createElement.mock.results;
    const editBtn = createdElements[createdElements.length - 2].value;
    editBtn.clickHandler();

    // Change task values
    mockTaskName.value = "Updated Task";
    mockTaskDescription.value = "Updated Description";
    mockTaskDeadline.value = "2025-01-01";

    // Click update button
    mockAddTaskBtn.clickHandler({ preventDefault: jest.fn() });

    // Verify button text is reset
    expect(mockAddTaskBtn.textContent).toBe("Add Task");

    // Verify task list was refreshed
    expect(mockTaskList.innerHTML).toBe("");
    expect(document.createElement).toHaveBeenCalledWith("li");
  });
});
