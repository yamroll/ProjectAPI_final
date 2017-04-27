$(document).ready(function() {

        $.urlParam = function(name) {
            var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
            return results[1] || 0;
        }
        $(function() {
            var id = $.urlParam('id');
            var url = "http://membershipwebapi977290.azurewebsites.net/api/Members/" + id;
            console.log(url);
            $.get(url, function(inf, status) {
                console.log(inf);
                $('.account').attr('href', "Viewinfo.html?id=" + inf.Id);
                $(".my-profile").attr('href', "my-profile.html?id=" + inf.Id);
                $('.username').html(inf.UserName);
                $(".view").attr('href', "Viewinfo.html?id=" + inf.Id);
                $(".dashboard").attr('href', "User.html?id=" + inf.Id);
            });
        });

});
