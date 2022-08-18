$(document).ready(function() {
    $(".btn").each(function() {
        $(this).click(function() {
            if ($(this).attr('id') == "check_all") {
                var checkboxes = $('input[type="checkbox"]');
                for (var checkbox of checkboxes) {
                    checkbox.checked = true;
                }
            } else if ($(this).attr('id') == "uncheck_all") {
                var checkboxes = $('input[type="checkbox"]');
                for (var checkbox of checkboxes) {
                    checkbox.checked = false;
                }
            }
        })
    });
});