   //create JSON 
    var url = "./Scholarship_Database.xlsx"; 
    var oReq = new XMLHttpRequest(); 
    var result = '' 
    var DATA = [] 
    var arr = [] 
	var sortedData = []
    var input1 = ''
    
    oReq.open("GET", url, true); 
    oReq.responseType = "arraybuffer"; 
    
    oReq.onload = function(e){ 
    var arraybuffer = oReq.response; 
    // convert data to binary string 
    var data = new Uint8Array(arraybuffer) 
    var arr = [] 
    for (var i = 0; i != data.length; ++i)
    arr[i] = String.fromCharCode(data[i]) 
    var bstr = arr.join("") 
    // Call XLSX 
    var workbook = XLSX.read(bstr, { type: "binary" }) 
    // DO SOMETHING WITH workbook HERE
    var first_sheet_name = workbook.SheetNames[0] 
    // Get worksheet 
    var worksheet = workbook.Sheets[first_sheet_name]; 
    result = XLSX.utils.sheet_to_json(worksheet);
	console.log(result)
	}    
	
	oReq.send()

	function sort(arr){
		for(var i = 0; i < arr.length; i++){
			if(arr[i]['Student Status'] === input1){
		
				sortedData.push(arr[i])
//console.log(sortedData)
				}
			}
	}


