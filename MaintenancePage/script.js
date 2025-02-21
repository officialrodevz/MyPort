document.addEventListener('DOMContentLoaded', () => {
    // Set the maintenance end time (2 hours from now)
    const endTime = new Date();
    endTime.setHours(endTime.getHours() + 2);

    function updateCountdown() {
        const now = new Date();
        const timeDiff = endTime - now;

        if (timeDiff <= 0) {
            document.getElementById('countdown').textContent = 'Completed';
            return;
        }

        const hours = Math.floor(timeDiff / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

        const timeString = `${hours}h ${minutes}m`;
        document.getElementById('countdown').textContent = timeString;
    }

    // Update countdown every minute
    updateCountdown();
    setInterval(updateCountdown, 60000);
}));