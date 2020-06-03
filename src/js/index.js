let c = 75;
setTimeout(function () {
    $('.im-progress-value').data['valuenow'] = c;
    c++;
}, 1000);

console.log("Started...");


$('#datetimepicker').datetimepicker({
    format: 'dd-mm-yyyy'
});

// var s2 = require('../../node_modules/select2/dist/js/select2.full');

// In your Javascript (external .js resource or <script> tag)

