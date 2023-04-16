// Function untuk menambah data ke storage
function addDataToStorage(data) {
    const storageType = document.getElementById('storage').value;
    if (storageType === 'session') {
      sessionStorage.setItem('data', JSON.stringify(data));
    } else if (storageType === 'local') {
      localStorage.setItem('data', JSON.stringify(data));
    } else if (storageType === 'cookie') {
      document.cookie = `data=${JSON.stringify(data)}; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/`;
    }
  }
  
  // Function untuk mengambil data dari storage
  function getDataFromStorage() {
    const storageType = document.getElementById('storage').value;
    if (storageType === 'session') {
      return JSON.parse(sessionStorage.getItem('data'));
    } else if (storageType === 'local') {
      return JSON.parse(localStorage.getItem('data'));
    } else if (storageType === 'cookie') {
      const cookieValue = document.cookie.match('(^|[^;]+)\\s*data\\s*=\\s*([^;]+)');
      return cookieValue ? JSON.parse(cookieValue.pop()) : null;
    }
  }
  
  // Function untuk menghapus data dari storage
  function clearDataFromStorage() {
    const storageType = document.getElementById('storage').value;
    if (storageType === 'session') {
      sessionStorage.removeItem('data');
    } else if (storageType === 'local') {
      localStorage.removeItem('data');
    } else if (storageType === 'cookie') {
      document.cookie = 'data=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }
  }
  
  // Function untuk menampilkan data
  function showData(data) {
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = '';
  
    data.forEach(item => {
      const itemContainer = document.createElement('div');
      itemContainer.classList.add('data-item');
  
      const firstName = document.createElement('p');
      firstName.innerHTML = `Nama Depan: ${item.firstName}`;
      itemContainer.appendChild(firstName);
  
      const lastName = document.createElement('p');
      lastName.innerHTML = `Nama Belakang: ${item.lastName}`;
      itemContainer.appendChild(lastName);
  
      const gender = document.createElement('p');
      gender.innerHTML = `Gender: ${item.gender === 'male' ? 'Laki-laki' : 'Perempuan'}`;
      itemContainer.appendChild(gender);
  
      const address = document.createElement('p');
      address.innerHTML = `Alamat: ${item.address}`;
      itemContainer.appendChild(address);
  
      dataContainer.appendChild(itemContainer);
    });
  }
  
  // Function untuk mengambil data dari form
  function getDataFromForm() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const gender = document.getElementById('gender').value;
    const address = document.getElementById('address').value;
  
    return {
      firstName,
      lastName,
      gender,
      address,
    };
  }
  
  // Function untuk menambah data ke storage dan tampilkan data
  function addDataAndShow() {
    const data = getDataFromForm();
    addDataToStorage([data]);
    showData([data]);
  }
  
  // Function untuk menghapus data dari storage dan hapus data yang ditampilkan
  function clearDataAndHide() {
    clearDataFromStorage();
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = '';
  }
  
  // Event listener untuk tombol "Tambah Data"
  document.getElementById('add-data').addEventListener('click', addDataAndShow);
  
  // Event listener untuk tombol "Tampilkan Data"
  document.getElementById('show-data').addEventListener('click', () => {
    const data = getDataFromStorage();
    showData(data);
  });  