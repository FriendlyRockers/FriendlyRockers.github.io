$(function(){
    $('#btn').click(function(){
        var link ="https://discord.com/api/webhooks/807179008093454366/jXViMVpLPdNuNPM0QKbtSfuSQCim_RHyVTu4Zz84eM3FWAfbJZcAQBlTl35vA7FfYc8q";
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
