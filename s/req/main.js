$(function(){
    $('#btn').click(function(){
        var link ="https://discordapp.com/api/webhooks/774986097440456704/LgTItsN5486D5OPoaXpcgICGhdOnqHi_pqxhbbK7NE4P8BdJUsDHcWLGsPEc6AdWwJQV";
        var username = $('#username').val();
        var content = $('#content').val();
        if (link==null || link=="",content==null || content=="")
        {
            alert("Please Fill The Details");
            return false;
        }
        $.post(link, {"content": content,"tts": "true", "username": username,});



    });
});
