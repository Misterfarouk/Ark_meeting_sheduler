$(document).ready(function(){

    $.ajax({
        url: './backend/data_retrieval.php',
        type: 'get',
        dataType: 'json',
        success: function(data){
         
            //staff selection
            $.each(data, function(index, key){

                var option = new Option(key.staff_name, key.id);
                console.log("fghj:"+ key.staff_name);
                 $("#selection").append(option);
            });
                //Change the text of the default "loading" option.
                $('#staff_selection').text('Please select a staff');

            }

    });
    
    $.ajax({
        url: './backend/data_retrieval2.php',
        type: 'get',
        dataType: 'json',
        success: function(data){
         
            //staff selection
            $.each(data, function(index, key){

                var option = new Option(key.topic, key.id);
                console.log("fghj:"+ key.topic);
                 $("#topic").append(option);
            });
                //Change the text of the default "loading" option.
                $('#topic_selection').text('Please select a topic');

            }

    });

    $.ajax({
        url: './backend/data_retrieval3.php',
        type: 'get',
        dataType: 'json',
        success: function(data){
         
            //staff selection
            $.each(data, function(index, key){

                var option = new Option(key.time, key.id);
                console.log("fghj:"+ key.time);
                 $("#time").append(option);
            });
                //Change the text of the default "loading" option.
                $('#Meeting_time').text('Please select a meeting time');

            }

    });


    

    
});