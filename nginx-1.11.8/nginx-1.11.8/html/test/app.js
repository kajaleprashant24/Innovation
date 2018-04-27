var apiUrl = "https://dmn.camunda.cloud/api/v1/";

$('#checkCountry').click(function() {
      var data = JSON.stringify(
        {
          "country" :
            {
              "type" : "string",
              "value" : "Germany"
            }
        }
      );

	  console.log(data);
     // $('.visaJson .language-json .request').text(data);
      //$('.visaJson').show();

      $.ajax
        ({
            type: 'POST',
            url: apiUrl + 'decision/example-visa',
            data: data,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
				console.log(data);
            /*  $('.visaJson .language-json .response').text(JSON.stringify(data, null, 2));

    					if (data.outputs.vwp.values[0] === true) {
    						// No Visa, but ESTA required
    						$('#estaContainer').show();
                $('#countryMessage').attr('class', 'alert alert-warning');
    					} else {
    						$('#estaContainer').hide();
                $('#countryMessage').attr('class', 'alert alert-danger');
    					}

      				$('#countryMessage span').text(data.outputs.comment.values[0]);
              $('#countryMessage').show();*/
            },
			error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
		console.log(thrownError);
      }
        });
});



$('#checkEsta').click(function() {

    var data = JSON.stringify(
      {
        "stay" :
          {
            "type" : "integer",
            "value" : Number($('#stay').val())
          },
        "enter" :
          {
            "type" : "string",
            "value" : $('#enter').val()
          },
        "certainCountry" :
          {
            "type" : "boolean",
            "value" : $('#certainCountry').val() === 'true'
          }
      },
      false, 2
     );

    $('.estaJson .language-json .request').text(data);
    $('.estaJson').show();

    $.ajax
      ({
        type: 'POST',
        url: apiUrl + 'decision/example-esta',
        data: data,
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: function (data) {
         $('.estaJson .language-json .response').text(JSON.stringify(data, null, 2));

         if (data.outputs.estaSufficient.values[0] === true) {
            $('#estaMessage').attr('class', 'alert alert-success');
         } else {
            $('#estaMessage').attr('class', 'alert alert-danger');
         }

  	     $('#estaMessage span').text(data.outputs.comment.values[0]);
         $('#estaMessage').show();
        }
      });
});


