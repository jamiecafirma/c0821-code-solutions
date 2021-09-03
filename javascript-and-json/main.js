var library = [
  {
    isbn: '978-0141441146',
    title: 'Jane Eyre',
    author: 'Charlotte Bronte'
  },
  {
    isbn: '978-0743482745',
    title: 'Julius Caesar',
    author: 'William Shakespeare'
  },
  {
    isbn: '978-0679734505',
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky'
  }
];

console.log('value of library:', library);
console.log('typeof library:', typeof library);

var JSONLibrary = JSON.stringify(library);

console.log('value of JSONLibrary:', JSONLibrary);
console.log('typeof JSONLibrary:', typeof JSONLibrary);

var JSONStudent = '{"id":123456,"name":"Jamie Cafirma"}';

console.log('value of JSONStudent:', JSONStudent);
console.log('typeof JSONStudent:', typeof JSONStudent);

var student = JSON.parse(JSONStudent);

console.log('value of student:', student);
console.log('typeof student:', typeof student);
