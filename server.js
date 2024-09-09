import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'StudentDB',
    location: 'default',
  },
  () => {},
  error => {
    console.log('Error: ', error);
  }
);

export const createTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Student (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        roll_no TEXT,
        marks INTEGER
      );`
    );
  });
};

export const insertStudent = (name, rollNo, marks) => {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO Student (name, roll_no, marks) VALUES (?, ?, ?)`,
      [name, rollNo, marks],
      (tx, results) => {
        console.log('Result: ', results.rowsAffected);
      },
      error => {
        console.log('Error: ', error);
      }
    );
  });
};

export const updateStudent = (id, name, rollNo, marks) => {
  db.transaction(tx => {
    tx.executeSql(
      `UPDATE Student SET name=?, roll_no=?, marks=? WHERE id=?`,
      [name, rollNo, marks, id],
      (tx, results) => {
        console.log('Result: ', results.rowsAffected);
      },
      error => {
        console.log('Error: ', error);
      }
    );
  });
};

export const deleteStudent = id => {
  db.transaction(tx => {
    tx.executeSql(
      `DELETE FROM Student WHERE id=?`,
      [id],
      (tx, results) => {
        console.log('Result: ', results.rowsAffected);
      },
      error => {
        console.log('Error: ', error);
      }
    );
  });
};

export const getAllStudents = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      `SELECT * FROM Student`,
      [],
      (tx, results) => {
        let students = [];
        for (let i = 0; i < results.rows.length; i++) {
          students.push(results.rows.item(i));
        }
        callback(students);
      },
      error => {
        console.log('Error: ', error);
      }
    );
  });
};