
 
 $(document).ready(function ()  {		
        $.get("https://demo6370041.mockable.io/getcourses", function(data, status){	
            for (var i = 0; i < data.data.length; i++) {            
                var id = data.data[i].id;             
                var name = data.data[i].name;				
				tr=$("<tr></tr>");
				tr.append("<td>" + id + "</td>");
				tr.append("<td>" + name + "</td>");
				$("tbody").append(tr);			
            }
 },"json");})
 
