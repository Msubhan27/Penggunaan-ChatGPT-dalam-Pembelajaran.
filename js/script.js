document.getElementById('questionnaire').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => {
        if (response.ok) {
            alert('Kuesioner berhasil dikirim!');
            this.reset();
        } else {
            alert('Terjadi kesalahan, silakan coba lagi.');
        }
    });
});