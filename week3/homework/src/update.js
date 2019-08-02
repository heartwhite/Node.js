const fs = require('fs');
const desc = 'UPDATE: updates the list item with 1-based index (update 3 new-item)';
function update(index, newToDo) {
  try {
    if (Number.isInteger(Number(index)) && index > 0) {
      const data = fs.readFileSync('todos.json', 'utf8');
      const parsedData = JSON.parse(data);
      if (index > parsedData.length) {
        console.log(`your list is shorter than ${index} items`);
      } else {
        const oldToDo = parsedData[index - 1].text;
        parsedData[index - 1] = { text: newToDo };
        const toDosStringified = JSON.stringify(parsedData);
        fs.writeFile('todos.json', toDosStringified, error => {
          if (error) {
            console.log(error);
          }
        });
      }
      return newToDo;
    } else {
      console.log('WARN: first parameter of update command must be an integer and greater than 0!');
    }
  } catch (error) {
    console.log(error.message);
  }
}
module.exports = { update, desc };
