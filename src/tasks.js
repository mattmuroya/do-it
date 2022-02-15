import { format } from "date-fns";

const tasks = (() => {
  
  function createTask(title, details, dueDate, starred, tags) {

    let taskTitle = title,
        taskDetails = details,
        taskDueDate = dueDate,
        taskStarred = starred,
        taskTags = tags;

    let completed = false;
    let taskModifiedDate = new Date();

    return {
      // getters/accessors
      get title() {
        return taskTitle;
      },
      get details() {
        return taskDetails;
      },
      get dueDate() {
        return taskDueDate;
      },
      get dueDateString() {
        if (taskDueDate === '') return 'None';
        let date = new Date(taskDueDate);
        let offset = date.getTimezoneOffset() * 60 * 1000;
        return format(date.valueOf() + offset, 'P');
      },
      get dueDateYYYYMMDD() {
        if (taskDueDate === '') return '';
        let date = new Date(taskDueDate);
        let offset = date.getTimezoneOffset() * 60 * 1000;
        return format(date.valueOf() + offset, 'yyyy-MM-dd');
      },
      get modifiedDateString() {
        return format(taskModifiedDate, 'Pp');
      },
      get isStarred() {
        return taskStarred; // boolean
      },
      // setters/mutators
      set title(value) {
        taskTitle = value;
      },
      set details(value) {
        taskDetails = value;
      },
      set dueDate(value) {
        taskDueDate = value;
      },
      set modifiedDate(value) {
        taskModifiedDate = value;
      },
      toggleStarred() {
        taskStarred = !taskStarred;
      }
    }
  }
  
  const taskList = [];

  function addNewTask(title, details, dueDate, starred, tags) {
    taskList.unshift(createTask(title, details, dueDate, starred, tags));
  }

  function deleteTask(index) {
    taskList.splice(index, 1);
  }

  // module items to return
  return {
    taskList,
    addNewTask,
    deleteTask,
  }
})();

export default tasks;