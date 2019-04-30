	    $(document).ready(function(){
        function getData(){
            $.ajax({
                type: 'POST',
                url: 'song.php',
                success: function(data){
                    $('#song').html(data);
                }
            });
        }
        getData();
        setInterval(function () {
            getData();
        }, 5000);  // it will refresh your data every 1 sec

    });
