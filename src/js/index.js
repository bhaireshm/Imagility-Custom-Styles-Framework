let c = 75;
setTimeout(function () {
    $('.im-progress-value').data['valuenow'] = c;
    c++;
}, 1000);

$('.datetimepicker').datetimepicker({
    format: 'yyyy/mm/dd hh:ii'
});
