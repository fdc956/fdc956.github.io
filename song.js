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
        }, 10000);  // refresh every 10s

    });
