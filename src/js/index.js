let c = 75;
setTimeout(function () {
    $('.im-progress-value').data['valuenow'] = c;
    c++;
}, 1000);

$('#datetimepicker').datetimepicker({
    format: 'dd-mm-yyyy'
});

var s2 = require('../../node_modules/select2/dist/js/select2.full');

// console.log(s2);

