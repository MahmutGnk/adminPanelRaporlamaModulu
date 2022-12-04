var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Urun', 'Urun1', 'Urun2', 'Urun3', 'Urun4', 'Urun5', 'Urun6', 'Urun7', 'Urun8', 'Urun9', 'Urun10'],
        datasets: [{
            label: '# of Siparis',
            data: [17, 45, 47, 31, 9,11,22,34,10,4,27],
            backgroundColor: [
                'rgba(85, 85, 85, 1)',
                'rgba(89, 102, 55, 1)',
                'rgba(41, 77, 43, 1)',

            ],
            borderColor: [
                'rgba(41, 155, 99)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});