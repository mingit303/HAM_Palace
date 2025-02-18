const deleteButtons = document.querySelectorAll('.delete-btn');
const modal = document.getElementById('delete-modal');
const closeBtn = document.querySelector('.close-btn');
const confirmDeleteBtn = document.getElementById('confirm-delete');
const cancelDeleteBtn = document.getElementById('cancel-delete');

deleteButtons.forEach(button => {
  button.addEventListener('click', () => {
    modal.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

cancelDeleteBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

confirmDeleteBtn.addEventListener('click', () => {
  // Thực hiện hành động xóa ở đây (ví dụ: gửi yêu cầu lên server)
  // Sau khi xóa xong, ẩn modal và có thể làm mới lại danh sách nhân viên
  modal.style.display = 'none';
  alert('Đã xóa nhân viên!'); // Đây chỉ là ví dụ, bạn cần thay thế bằng logic xóa thực sự
});

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

//Them Nhan Vien
document.addEventListener('DOMContentLoaded', function() {
    const addEmployeeBtn = document.getElementById('add-employee-btn');
    const addEmployeeForm = document.getElementById('add-employee-form');
    const cancelAddBtn = document.getElementById('cancel-add');

    addEmployeeBtn.addEventListener('click', () => {
        addEmployeeForm.style.display = 'block';
    });

    cancelAddBtn.addEventListener('click', () => {
        addEmployeeForm.style.display = 'none';
    });

    // Xử lý submit form (bạn cần code logic để lưu dữ liệu)
    addEmployeeForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Ngăn form tự động submit
        // Code của bạn để lấy dữ liệu từ form và gửi lên server
        alert('Đã lưu nhân viên!'); // Ví dụ: hiển thị thông báo
        addEmployeeForm.style.display = 'none'; // Ẩn form sau khi lưu
    });
});
