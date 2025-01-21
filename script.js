// Login Functionality
const loginBtn = document.getElementById('loginBtn');
if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (username === 'PAKTANAKTEP' && password === '168168') {
            window.location.href = 'staff.html';
        } else {
            alert('Invalid username or password.');
        }
    });
}

// Staff Management Functionality
const staffTableBody = document.getElementById('staffTableBody');
const staffModal = document.getElementById('staffModal');
const closeModal = document.querySelector('.close');
const saveStaffBtn = document.getElementById('saveStaffBtn');
const addStaffBtn = document.getElementById('addStaffBtn');

let staffList = [
    { id: 1, name: 'Pak Tanaktep', position: 'Developerr' },
    { id: 2, name: 'Lihuo', position: 'Developer' }
];
let editStaffId = null;

// Render Staff Table
function renderTable() {
    staffTableBody.innerHTML = '';
    staffList.forEach(staff => {
        const row = `
            <tr>
                <td>${staff.id}</td>
                <td>${staff.name}</td>
                <td>${staff.position}</td>
                <td>
                    <button onclick="editStaff(${staff.id})">Edit</button>
                    <button onclick="deleteStaff(${staff.id})">Delete</button>
                </td>
            </tr>
        `;
        staffTableBody.innerHTML += row;
    });
}

// Add/Edit Staff
addStaffBtn.addEventListener('click', () => {
    staffModal.style.display = 'flex';
    document.getElementById('modalTitle').innerText = 'Add Staff';
    editStaffId = null;
});

saveStaffBtn.addEventListener('click', () => {
    const name = document.getElementById('staffName').value.trim();
    const position = document.getElementById('staffPosition').value.trim();

    if (name && position) {
        if (editStaffId) {
            const staff = staffList.find(s => s.id === editStaffId);
            staff.name = name;
            staff.position = position;
        } else {
            staffList.push({
                id: staffList.length + 1,
                name,
                position
            });
        }
        staffModal.style.display = 'none';
        renderTable();
    } else {
        alert('Please fill all fields.');
    }
});

// Edit Staff
function editStaff(id) {
    const staff = staffList.find(s => s.id === id);
    document.getElementById('staffName').value = staff.name;
    document.getElementById('staffPosition').value = staff.position;
    document.getElementById('modalTitle').innerText = 'Edit Staff';
    staffModal.style.display = 'flex';
    editStaffId = id;
}

// Delete Staff
function deleteStaff(id) {
    staffList = staffList.filter(s => s.id !== id);
    renderTable();
}

// Close Modal
closeModal.addEventListener('click', () => {
    staffModal.style.display = 'none';
});

// Initialize Table
if (staffTableBody) renderTable();
