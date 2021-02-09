document.addEventListener("DOMContentLoaded", function() {
    let mixer = mixitup('.course__wrap', {
        load: {
            filter: 'all',
            sort: 'default'
        }
    });

    let data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        series: [
            [5, 2, 4, 2, 0, 3, 4]
        ],
        low: 0,
        showArea: true
    };

    let options = {
        width: 100 + '%',
        height: 300 + 'px'
    };

    new Chartist.Line('#chart', data, options);
});