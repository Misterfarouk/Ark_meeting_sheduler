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
                 $("#selection").append(option);giy
            });
                //Change the text of the default "loading" option.
                $('#staff_selection').text('Please select a staff');

            }

    });
    
    
    
    //function to hide and show
    $("#submit").on('click', function(e) {
        $('#stff').show();
        $(this).hide();
    });


    //STAFF
    $("#stff").on('change', function(e) {
        
        var serializedData= $("#form_info").serialize();
        console.log(serializedData);

        $.ajax({
            url: './backend/topic_filter.php',
            type: 'post',
            data: serializedData ,
            dataType: 'json',
            success: function(data){
               
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
        $(this).show();

    }); 
       

    //TOPIC
    $("#tpc").on('change', function(e) {

        var serializedData= $("#form_info").serialize();
        console.log(serializedData);

        $.ajax({
            url: './backend/time_filter.php',
            type: 'post',
            data: serializedData ,
            dataType: 'json',
            success: function(data){
             
                $.each(data, function(index, key){
    
                    var option = new Option(key.time, key.id);
                    console.log("Time:"+ key.time);
                     $("#time").append(option);
                });
                    //Change the text of the default "loading" option.
                    $('#meeting_time').text('Please select a meeting time');
    
                }
        });

        //TIME
        $('#tme').show();
        $(this).show();

    });

    $("#tme").on('change', function(e) {
        $('#book_meeting').show();
        $(this).show();
    });


    var request;


    // Bind to the submit event of our form
    $("#form_info").submit(function(event){
    
        // Prevent default posting of form - put here to work in case of errors
        event.preventDefault();
    
        var customer_name = $("input#name").val();
        var customer_email = $("input#email").val();
        //var amount = $("input#okc").val();

        console.log(amount);
        payWithPaystack(customer_email, customer_name, amount);      
    }); 
    
    
    
        //paystack integration
    function payWithPaystack(customer_email, customer_name, amt){
                
            
        var handler = PaystackPop.setup({
        key: 'pk_test_cdcc421dda96b12747c881e87864b28dc25bc05b',
        email: customer_email,
        amount: amt,
        currency: "NGN",
        ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
        firstname: customer_name,
        lastname: '',
        // label: "Optional string that replaces customer email"
        metadata: {
            custom_fields: [
                {
                    display_name: "Mobile Number",
                    variable_name: "mobile_number",
                    value: "+2348012345678"
                }
            ]
        },
        callback: function(response){
            alert('success. transaction ref is ' + response.reference);
            perforDBUpdate(customer_email, customer_name, amt,  response.reference);
        
        },
        onClose: function(){
            alert('window closed');
        }
        });
        handler.openIframe();
    }
    
});

function  perforDBUpdate(customer_email, customer_name, amt, transaction_ref){

    // setup some local variables
  var $form = $("#form_info");

  // Let's select and cache all the fields
  var $inputs = $form.find("input, select, button, textarea");

  // Serialize the data in the form
  var serializedData = $form.serializeArray();
  var tx = {
      'name': 'transaction_ref',
      'value': transaction_ref
  };
  serializedData.push(tx);
  console.log(serializedData);

   console.log(serializedData);

  // Fire up the request to /form.php
  request = $.ajax({
      url: "./backend/insert.php",
      type: "post",
      data: serializedData
  });

  // Callback handler that will be called on success
  request.done(function (response, textStatus, jqXHR){
      // Log a message to the console
      // console.log(response);
      var resp = "<div class='alert alert-success'>" + response + "</div>"  
      $(".notification").html(resp);

  });

  // Callback handler that will be called on failure
  request.fail(function (jqXHR, textStatus, errorThrown){
      // Log the error to the console      

      var resp = JSON.parse(jqXHR.responseText);
      console.log(resp);
  if (resp.name) {
      $(".nameError").html(resp.name);
  }
  if (resp.contactemail) {
      $(".contactemailError").html(resp.contactemail);
  }
  if (resp.subject) {
      $(".subject").html(resp.subject);
  }
  if (resp.message) {
      $(".message").html(resp.message);
      }
  });

  // Callback handler that will be called regardless
  // if the request failed or succeeded
  request.always(function () {
      // Reenable the inputs
      $inputs.prop("disabled", false);
  });



}