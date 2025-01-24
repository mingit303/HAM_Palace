const dropdownYear = document.getElementById('dropdownYear');
const dropdownIcon = document.getElementById('dropdownIcon');
const select = document.getElementById('sel');

document.addEventListener('click', function (e) {
  if (!dropdownYear.contains(e.target)) {
    dropdownIcon.classList.remove('rotate-up');
    dropdownIcon.classList.add('rotate-down');
    select.classList.remove('active');
  }
});

select.addEventListener('click', function () {
  dropdownIcon.classList.toggle('rotate-up');
  dropdownIcon.classList.toggle('rotate-down');
});