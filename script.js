document.getElementById('timeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const city = document.getElementById('city').value;
    const timeDisplay = document.getElementById('timeDisplay');

    fetch(`http://worldtimeapi.org/api/timezone/${city}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const dateTime = data.datetime;
            timeDisplay.innerHTML = `Current time in ${city}: ${new Date(dateTime).toLocaleString()}`;
        })
        .catch(error => {
            timeDisplay.innerHTML = error.message;
        });
});