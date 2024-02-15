document.addEventListener('DOMContentLoaded', function() {
    const reservationForm = document.querySelector('#reservation-form');
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Simulation de récupération des données du formulaire
            const pickupLocation = document.querySelector('#pickup-location').value;
            const dropoffLocation = document.querySelector('#dropoff-location').value;
            const pickupDate = document.querySelector('#pickup-date').value;
            // Afficher un message de confirmation (exemple simplifié)
            alert(`Votre réservation est confirmée.\nPrise en charge : ${pickupLocation}\nDestination : ${dropoffLocation}\nDate et heure : ${pickupDate}`);
        });
    }
});
