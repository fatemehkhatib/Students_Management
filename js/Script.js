// ===================== Data preparation =====================
// STUDENTS is read from the students.js file.

// Creating a dictionary based on student ID numbers for quick access.
const studentsById = {};
STUDENTS.forEach(function(s){
  studentsById[s.studentId] = s;
});

// The student who has currently enrolled.
let currentStudent = null;

// ===================== Page display management functions =====================
function hideAllPages() {
  document.getElementById('page-login').style.display = 'none';
  document.getElementById('page-main').style.display = 'none';
  document.getElementById('page-profile').style.display = 'none';
  document.getElementById('page-units').style.display = 'none';
  document.getElementById('page-transcript').style.display = 'none';
}

function showPage(pageId) {
  hideAllPages();
  document.getElementById(pageId).style.display = 'flex';
}

// ===================== Authentication =====================
document.getElementById('login-form').addEventListener('submit', function(e){
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMsg = document.getElementById('login-error');

  // Both the username and password must be identical to the student ID number.
  if (username !== '' && username === password && studentsById[username]) {
    currentStudent = studentsById[username];
    errorMsg.style.display = 'none';
    document.getElementById('login-form').reset();
    goToMainPage();
  } else {
    errorMsg.style.display = 'block';
  }
});

function goToMainPage() {
  document.getElementById('main-welcome-name').textContent = currentStudent.firstName + ' ' + currentStudent.lastName;
  showPage('page-main');
}

// Log out and return to the login page
document.getElementById('btn-logout').addEventListener('click', function(){
  currentStudent = null;
  showPage('page-login');
});

// ===================== Return-to-home buttons =====================
document.querySelectorAll('.btn-back').forEach(function(btn){
  btn.addEventListener('click', function(){
    showPage('page-main');
  });
});

// ===================== Student Profile Page =====================
document.getElementById('btn-goto-profile').addEventListener('click', function(){
  document.getElementById('profile-fullname').textContent = currentStudent.firstName + ' ' + currentStudent.lastName;
  document.getElementById('profile-major').textContent = currentStudent.major;
  document.getElementById('profile-shift').textContent = currentStudent.shift;
  document.getElementById('profile-id').textContent = currentStudent.studentId;
  showPage('page-profile');
});

// ===================== Units Page =====================
document.getElementById('btn-goto-units').addEventListener('click', function(){
  const tbody = document.getElementById('units-table-body');
  tbody.innerHTML = '';
  currentStudent.terms.forEach(function(t){
    const tr = document.createElement('tr');
    const tdTerm = document.createElement('td');
    tdTerm.textContent = 'ترم ' + t.term;
    const tdUnits = document.createElement('td');
    tdUnits.textContent = t.units;
    tr.appendChild(tdTerm);
    tr.appendChild(tdUnits);
    tbody.appendChild(tr);
  });
  document.getElementById('units-passed-total').textContent = currentStudent.passedUnits;
  document.getElementById('units-remaining').textContent = currentStudent.remainingUnits;
  showPage('page-units');
});

// ===================== Report Card Page =====================
document.getElementById('btn-goto-transcript').addEventListener('click', function(){
  const tbody = document.getElementById('transcript-table-body');
  tbody.innerHTML = '';
  currentStudent.terms.forEach(function(t){
    const tr = document.createElement('tr');
    const tdTerm = document.createElement('td');
    tdTerm.textContent = 'ترم ' + t.term;
    const tdGrade = document.createElement('td');
    tdGrade.textContent = (t.grade === null || t.grade === undefined) ? '-' : t.grade;
    tr.appendChild(tdTerm);
    tr.appendChild(tdGrade);
    tbody.appendChild(tr);
  });
  document.getElementById('transcript-overall-gpa').textContent = currentStudent.overallGpa;
  showPage('page-transcript');
});

// ===================== Initial view: Login screen =====================
showPage('page-login');