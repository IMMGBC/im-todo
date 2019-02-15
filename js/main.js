let todoRecord = [
  {
    todoId: Task1,
    name: { subj: `MP`, inst: `Sgrignoli` },
    task: { total: 4, compl: `100%` }
  }, // 0
  {
    todoId: Task2,
    name: { subj: `IP`, inst: `Masse` },
    task: { total: 7, compl: `50%` }
  }, // 1
  {
    todoId: Task3,
    name: { subj: `PM`, inst: `Desgroseilliers` },
    task: { total: 9, compl: `10%` }
  }, // 2
  {
    todoId: Task4,
    name: { subj: `WD`, inst: `Pacinni` },
    task: { total: 4, compl: `10%` }
  }, // 2
  {
    todoId: Task5,
    name: { subj: `PT`, inst: `Martin` },
    task: { total: 1, compl: `10%` }
  } // 2
];

// Where are we putting this stuff?
let allRecords = document.getElementById("records");

function clearAllRecords() {
  // Clear out all the records
  allRecords.innerHTML = ``;
}
// 1. Add a clear button to the interface to call this above function

function showAllRecord() {
  clearAllRecords();
  allRecords.innerHTML += `<li>${todoRecord[0].name.subj} compl ${
    todoRecord[0].task.total
  }% which is an ${todoRecord[0].task.compl}</li>`;
  allRecords.innerHTML += `<li>${todoRecord[1].name.subj} compl ${
    todoRecord[1].name.total
  }% which is an ${todoRecord[1].name.total}</li>`;
  allRecords.innerHTML += `<li>${todoRecord[2].name.subj} compl ${
    todoRecord[2].task.total
  }% which is an ${todotRecord[2].task.compl}</li>`;
}
// 2. Add a refresh button to the interface to call this above function

// Functions we will add:
// addNewTask()
// deleteTask()
// showOneTaskRecord()
// updateTask()
