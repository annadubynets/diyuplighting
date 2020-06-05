
// ---------------------
// Date picker
// ---------------------

function updateDatepickerUi(selector, date) {
    var today = date || new Date();
    var prev = new Date(today);
    prev.setMonth(today.getMonth() - 1);

    var next = new Date(today);
    next.setMonth(next.getMonth() + 1);

    console.log(
        $(selector).datepicker.DPGlobal.formatDate(prev, "MM", "en"),
        $(selector).datepicker.DPGlobal.formatDate(today, "MM", "en"),
        $(selector).datepicker.DPGlobal.formatDate(next, "MM", "en")
    );

    $(".datepicker-days .prev").text($(selector).datepicker.DPGlobal.formatDate(prev, "MM", "en"));
    $(".datepicker-days .next").text($(selector).datepicker.DPGlobal.formatDate(next, "MM", "en"));
}

// ---------------------

$('#reservationDateTimePicker').datepicker({
    todayHighlight: true,
    maxViewMode: 0
}).on('changeMonth', function(e) {
    updateDatepickerUi(e.target, e.date); 
});

updateDatepickerUi('#reservationDateTimePicker');

// ---------------------

