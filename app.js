//when the user selects input the page disappers and gets data according to option selected=================>
$(document).ready(function(){
$("#Student").change(function(){
$('.student_status').fadeOut(1000);
$('#container-main').fadeIn(1000);	
	input1 = $("#Student option:selected").text()
  		getStudentData()
})
})
//creates table with respect to data selected by user=================================================================>
var sorts = ''
function getStudentData(){
	sort(result)
	sorts = sortedData
	createTable()
	}

function createTable(){ 
	$(document).ready(function(){ 

 	console.log(sorts) // logs out filtered JSON data after the dropdown selection is made. 
 		 			   //This can help find a "key" to a new header.
	var dataSet = sorts,  //result, 
    
 	//columnDefs sets the columns data to align with the key from the headers in the JSON data. 
 	//"data" is the name of the key from the JSON data
 	//"defaultContent" makes any cell without data display "-"
 	//"render" creates a label on on each row that helps the card view to function properly
 	columnDefs = [
    		{ "data": "Student Status", "defaultContent": "<i> - </i>"}, 
            { "data": "High School Scholarship/ Award Name", "defaultContent": "<i> - </i>", 
            	render: function (data, type, full, meta){
            		if(data == undefined){
            			data = "-"
            		}
					else{
						return '<label>Scholarship:</label>' + data;
					}
				},
			},
            { "data": "Description/Criteria", "defaultContent": "<i> - </i>",
            	render: function (data, type, full, meta){
            		if(data == undefined){
            			data = "-"
            		}
					else{
						return '<label>Description:</label>' + data;
					}
				},
			},
            { "data": "GPA", "defaultContent": "<i> - </i>",
				render: function (data, type, full, meta){ 
					if(data == undefined){
						data = "-"
						return '<label>GPA:</label>' + data;
					}
					else{
						return '<label>GPA:</label>' + data;
					}
				},
			},
            { "data": "ACT", "defaultContent": "<i> - </i>",
            	render: function (data, type, full, meta){
            		if(data == undefined){
            			data = "-"
            			return '<label>ACT:</label>' + data;
            		}
					else{
						return '<label>ACT:</label>' + data;
					}
				},
			},
            { "data": "Gender", "defaultContent": "<i> - </i>",
            	render: function (data, type, full, meta){
            		if(data == undefined){
            		 	data = "-"
            		 	return '<label>Gender:</label>' + data;
            		}
					else{
						return '<label>Gender:</label>' + data;
					}
				},
			},
            { "data": "Ethnic Heritage", "defaultContent": "<i> - </i>",
            	render: function (data, type, full, meta){
            		if(data == undefined){
            			data = "-"
            			return '<label>Ethnic Heritage:</label>' + data;
            		}
					else{
						return '<label>Ethnic Heritage:</label>' + data;
					}
				},
			},
            { "data": "Open Date", "defaultContent": "<i> - </i>",
            	render: function (data, type, full, meta){
            		if(data == undefined){
            			data = "-"
            			return '<label>Open Date:</label>' + data;
            		}
					else{
						return '<label>Open Date:</label>' + data;
					}
				},
			},
            { "data": "Closing Date", "defaultContent": "<i> - </i>", 
            	render: function (data, type, full, meta){
            		if(data == undefined){
            			data = "-"
						return '<label>Closing Date:</label>' + data;
            		}
					else{
						return '<label>Closing Date:</label>' + data;
					}
				},
			},
            { "data": "Possible Award ", "defaultContent": "<i> - </i>", 
            	render: function (data, type, full, meta){
            		if(data == undefined){
            			data = "-"
            			return '<label>Possible Award:</label>' + data;
            		}
					else{
						return '<label>Possible Award:</label>' + data;
					}
				},
			},
            { "data": "Website", "defaultContent": "<i> - </i>", 
            	"render": function(data, type, row, meta){
                	if(type === 'display'){
                    dataSet = '<a href=' + data + ' target="_blank">Click Here To Apply<a>'
	                }
                    return '<label>Website:</label>' + dataSet;
                	
                },                         
            }];
		
		var header = [];
    		header.push("Student Status");
    		header.push("High School Scholarship/ Award Name");
    		header.push("Description/Criteria");
    		header.push("GPA");
    		header.push("ACT");
    		header.push("Gender");
    		header.push("Ethnic Heritage");
    		header.push("Open Date");
    		header.push("Closing Date");
    		header.push("Possible Award");
			header.push("Website");
  
  var buttonExp = {
    exportOptions: {
      format: {
        header: function ( data, column, row ) {
          return header[column]; 
        }
      }
    }
  };		
				
  //This creates the data-table and adds attributes. For instance, fixedHeader keeps the headers on the top of the page 
  //even after the page is scrolled. There are more attributes available in the datatables documentation available online. 
	var myTable;
    myTable = $("#data-table").DataTable({
    	fixedHeader: true,
    	autoWidth: true,

  // responsive is being used to incorporate the modal function with brings up the detailed view
  	responsive: {
			details: {
				display: $.fn.dataTable.Responsive.display.modal({
				header: function(row){
				var data = row.data();
				return 'Details';
				}
			}),
			renderer: $.fn.dataTable.Responsive.renderer.tableAll({
				tableClass: 'table'
                })
			}
		},
	

	//Sets the default amount of rows shown
			iDisplayLength: 10,
	//The columnDefs below set some specific params to certain columns. 
			columnDefs: [
			{targets:[0],visible: false},
			{ "bSortable": false, "aTargets": [0,1,2,3,4,5,6,7,8] },
			
			],

			dom: '<"top"B><"top"l><"Search"f>rt<"bottom"ip><"clear">',
    
  
 	// buttons: ['copy', 'excel', 'pdf', 'print'],//choose respective export option
	//The below functions customizes the print export option
		buttons: [
			 $.extend(true, {}, buttonExp,{
        extend: 'print',
				
		//dom:'<"bottom"t>',
		exportOptions: {
			stripHtml: false,
			
			},
		
        title:"Scholarship List",
        customize: function ( win ) {
						$(win.document.body)
                   		.css( 'font-size', '15pt' )
                   		.prepend(
                        '<img src="https://centricconsulting.com/wp-content/uploads/2016/11/College-Now-logo.jpg" style="position:absolute; top:0; right:0 ; width=5%; height:5%; padding=50px" />'
						)
						.watermark = {text: 'CollegeNow', color: 'blue', opacity: 0.1};
							
					},
				}),		
																							
            	],
					"lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "All"] ],//values can be changed 
					"sPaginationType": "full_numbers",
					"bFilter" : true,
					"bSort" : true,

					data:dataSet, columns:columnDefs,
								
			});
												
//This creates the dropdowns located on certain columns. The columns are defined in the myTable.columns variable								
myTable.columns([3,4,5,6,7,8]).every(function(){
	var column = this;
	var select = $('<select id="drop"><option value="" >Options</option></select>')
	
		.appendTo( $(column.header()) )
		.on( 'change', function () {
		column.search(this.value)
		.draw();
});
column.data().unique().sort().each(function(d,j){
	select.append( '<option value="'+d+'">'+d+'</option>' )
	});
});

//function for toggle between table view and card view 									
$('#btToggleDisplay').on('click', function(){
$("#data-table").toggleClass('cards')
$("#data-table thead").toggle()
});
				
	}) 
} 
