window.onload = function(){

				var entered_devicename;

    			$("#getrecordbydevice").click(function(){

    					entered_devicename = $('#devicenameval').val();
    					var url = 'http://localhost:10080/read-latest?devicename=' + entered_devicename;
    					console.log('the name is' + entered_devicename);
    					$.getJSON(url, function(result){
    						$.each(result, function(i,obj){
    							$('#readreqresp').append(JSON.stringify(obj));
    							$('#singleval').append(JSON.stringify(obj.items[0].a3))
    							//console.log(obj.items); // show object traverse in console
    							console.log(obj.items[0]);
    						});
    					});
    				});
    		}