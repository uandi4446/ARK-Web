$(function() {

$("input:file[id=uploadBtn]").change (function() {

$(".uploadFile").val($(this).val().split("\\").pop());

$("span.uploadBtn").text("upload");

});

});