document.addEventListener('DOMContentLoaded', function() {
    const bookingHistory = [
        { hotelName: 'Hotel 1', location: 'New York', checkIn: '2024-07-01', checkOut: '2024-07-05' },
        { hotelName: 'Hotel 2', location: 'Paris', checkIn: '2024-06-15', checkOut: '2024-06-20' },
        { hotelName: 'Hotel 3', location: 'Tokyo', checkIn: '2024-05-10', checkOut: '2024-05-15' }
        // Add more booking history as needed
    ];

    const tbody = document.querySelector('#booking-history tbody');

    bookingHistory.forEach(booking => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${booking.hotelName}</td>
            <td>${booking.location}</td>
            <td>${booking.checkIn}</td>
            <td>${booking.checkOut}</td>
        `;
        tbody.appendChild(tr);
    });

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted successfully!');
        // Handle form submission logic here
    });
});
