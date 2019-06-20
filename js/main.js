$(document).ready(function(){

    $.ajax({
        url: './backend/data_retrieval.php',
        type: 'get',
        success: function(data){

            console.log("Staff:"+data);

            $.each(data, function(key, value)
            {
                $("#staff_selection").append('<option value=' + key + '>' + value + '</option>');
            });
         }

        });
            // $.each(data, function(key, staffName){
            //     var option = new Option(staffName, staffName);
                
            //     $(option).html(staffName);
            
            //     $("#selection").append(option);
            // });
            //         //Change the text of the default "loading" option.
            //     $('#staff_selection').text('Please select a staff');
    
   

    // //Make an Ajax request to a PHP script called select_dropdown.php
    //     //This will return the data that we can add to our Select element.
    //     $.ajax({
    //         url: './backend/topic.php',
    //         type: 'get',
    //         success: function(data){
    
    //             //Log the data to the console so that
    //             //you can get a better view of what the script is returning.
    //             console.log("Meeting Topic:"+data);
    
    //             $.each(data, function(key, topicName){
    //                 //Use the Option() constructor to create a new HTMLOptionElement.
    //                 var option = new Option(topicName, topicName);
    //                 //Convert the HTMLOptionElement into a JQuery object that can be used with the append method.
    //                 $(option).html(topicName);
    //                 //Append the option to our Select element.
    //                 $("#topic").append(option);
    //             });
    //                     //Change the text of the default "loading" option.
    //                 $('#Meeting_topic').text('Please select a Meeting Topic');
    //         }
    //     });

    //     //Make an Ajax request to a PHP script called select_dropdown.php
    //     //This will return the data that we can add to our Select element.
    // $.ajax({
    //     url: './backend/time.php',
    //     type: 'get',
    //     success: function(data){

    //         //Log the data to the console so that
    //         //you can get a better view of what the script is returning.
    //         console.log("Meeting Time:"+data);

    //         $.each(data, function(key, meetingTime){
    //             //Use the Option() constructor to create a new HTMLOptionElement.
    //             var option = new Option(meetingTime, meetingTime);
    //             //Convert the HTMLOptionElement into a JQuery object that can be used with the append method.
    //             $(option).html(meetingTime);
    //             //Append the option to our Select element.
    //             $("#time").append(option);
    //         });
    //                 //Change the text of the default "loading" option.
    //             $('#Meeting_time').text('Please select a Meeting Time');
    //     }
    // });
});