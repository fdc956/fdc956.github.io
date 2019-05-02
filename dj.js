	    $(document).ready(function(){
        function getData(){
            $.ajax({
                type: 'POST',
                url: 'dj.php',
                success: function(data){
                    $('#dj').html(data);
                }
            });
        }
        getData();
        setInterval(function () {
            getData();
        }, 10000);  // refresh every 10s

    });
