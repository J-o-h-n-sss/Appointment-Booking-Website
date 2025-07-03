const form = document.getElementById('bookingForm)');

form. addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = `${document.getElementById('firstname').value} $document.getElementById('lastname').value}`;
    const phone = document.getElementById('phonenumbers').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    
    const booking = {name, phone, service: "General", date, time};

    try {
        const res = await fetch('http://localhost:3001/book',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(booking)
    });
    const data = await res.json();
    document.getElementById('response').textContent = data.message ||'Booking submitted';
    form.reset();
} catch (err){
    document.getElementById('response').textContent = 'Error submitting booking ';
    console.error(err);
}
});
