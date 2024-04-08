$(function() {
    var maxDate = new Date(); // Obtém a data atual
    maxDate.setFullYear(maxDate.getFullYear() - 10); // Subtrai 10 anos da data atual

    $("#dataNascimento").datepicker({
        dateFormat: 'dd/mm/yy',
        changeMonth: true,
        changeYear: true,
        yearRange: "-100:+0",
        maxDate: maxDate, // Define a data máxima selecionável como 10 anos atrás
        onSelect: function(dateText) {
            $(this).val(dateText);
        }
    });
});