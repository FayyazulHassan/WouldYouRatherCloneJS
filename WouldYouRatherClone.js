
function CreateQuestion() {
	var x = document.getElementById("Question_Form").getElementsByTagName("input");
	var field = "";
	var input = "";
	var QForm = {};
  	var QFormJson = {};
	var i;
	for (i = 0; i < x.length-1 ;i++) {
		
		field = "\"" + x[i].name + "\"" 
		input = "\"" + x[i].value + "\""
		QForm[field] = input
		};
	QFormJson = JSON.stringify(QForm);
	
	}
