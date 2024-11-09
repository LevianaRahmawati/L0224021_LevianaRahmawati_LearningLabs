function showPage(pageId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    const headerSection = document.querySelector('header section.beranda');
    headerSection.style.display = pageId === 'beranda' ? 'block' : 'none';
    
    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.style.display = 'block';
    }
}

window.onload = function() {
    showPage('beranda');
}

function submitFeedback() {
    const nama = document.querySelector('input[name="nama"]').value;
    const saran = document.querySelector('textarea[name="saran"]').value;

    if (nama && saran) {
        alert(`Terima kasih, ${nama}, atas kritik dan sarannya!`);
        document.getElementById('feedbackForm').reset();
    } else {
        alert("Mohon isi semua kolom sebelum mengirim.");
    }
}