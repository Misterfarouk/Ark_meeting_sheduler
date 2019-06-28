$(document).ready(function(){

    $.ajax({
        url: './backend/data_retrieval.php',
        type: 'get',
        dataType: 'json',
        success: function(data){
         
            //staff selection
            $.each(data, function(index, key){

                var option = new Option(key.staff_name, key.id);
                console.log("Staff:"+ key.staff_name);
                 $("#selection").append(option);
            });
                //Change the text of the default "loading" option.
                $('#staff_selection').text('Please select a staff');

            }

    });
    
    //function to hide and show
    $("#stff").on('change', function(e) {
        
        var serializedData= $("#form_info").serialize();
        console.log(serializedData);

        $.ajax({
            url: './backend/topic_filter.php',
            type: 'post',
            data: serializedData , //data: $(this).serialize(),
            dataType: 'json',
            success: function(data){
               // console.log("data:"+ JSON.parse(data));
                //staff selection
                $.each(data, function(index, key){
                  
                    var option = new Option(key.topic, key.id);
                    console.log("topic:"+ key.id);
                    $("#topic").append(option);
                });
                    //Change the text of the default "loading" option.
                    $('#topic_selection').text('Please select a meeting topic');
                }
        });

        $('#tpc').show();
        $(this).hide();

    }); 
       
    $("#tpc").on('change', function(e) {

        $.ajax({
            url: './backend/data_retrieval3.php',
            type: 'get',
            dataType: 'json',
            success: function(data){
             
                //staff selection
                $.each(data, function(index, key){
    
                    var option = new Option(key.time, key.id);
                    console.log("Time:"+ key.time);
                     $("#time").append(option);
                });
                    //Change the text of the default "loading" option.
                    $('#Meeting_time').text('Please select a meeting time');
    
                }
        });

        $('#tme').show();
        $(this).hide();
        
    });

    $("#tme").on('change', function(e) {
        $('#book_meeting').show();
        $(this).hide();
    });
    
    

    
});