$("#sendMail").on("click", function(){
    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var phone = $("#phone").val().trim();
    var message = $("#message").val().trim();

if (name == "") {
    $("#errorMes").text("Введите імя");
    return false;}
else if (email == "" ) {
        $("#errorMes").text("Введите емейл");
        return false;}
else if (phone == "" ) {
            $("#errorMes").text("Введите телефон");
            return false;}
else if (message.length < 5 ) {
                $("#errorMes").text("Введите сообшение не менее 5 символов");
                return false;}
               
                $("#errorMes").text("");

                $.ajax({
                   url: 'ajax/mail.php',
                   type: 'POST',
                   cache: false,
                   data: { 'name': name, 'email': email, 'phone': phone, 'message': message },
                   dataType:'html',
                   beforeSend: function(){
                       $("#sendMail").prop("disabled", true);
                   },
                   success: function(data){
                       if(!data)
                       alert("Були помилки");
                       else
                       $("#mailform").trigger("reset");
                       $("#sendMail").prop("disabled", false);
                   }
               });
            });