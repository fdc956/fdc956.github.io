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
        }, 5000);  // it will refresh your data every 1 sec

    });
