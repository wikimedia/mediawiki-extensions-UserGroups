$(function() {
    $("#groupname").change(function() {
        location = $("#groupname option:selected").val();
    });
});