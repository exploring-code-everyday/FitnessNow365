// Determine gender value from radio buttons
function getGenderValue(form)
{
	//initial
	gender=0;

	for (var i=0; i < form.gender.length; i++)
		{
			if (form.gender[i].checked)
			{
		     	var gender = form.gender[i].value;
		    }	
		}
 			return gender;
}


// Validates that a radio button is not empty
function validateEmptyRadioButton(elem, helperMsg)
{
	if(elem == 0)
	{
		alert(helperMsg);
		//elem.focus(); // set the focus to this input
		return false;
	}
	return true;
}

// Validates that a text field is not empty
function validateEmptyTextField(elem, helperMsg)
{
	if(elem.length == 0)
	{
		alert(helperMsg);
		//elem.focus(); // set the focus to this input
		return false;
	}
	return true;
}

// Validates that the text feild is numerical
function validateNumeric(elem, helperMsg)
{

	if(isNaN(elem))
	{
		alert(helperMsg);
		//elem.focus();
		return false;
	}
	else
	{
		return true;
	}
}

// This function calculates bmr 
function bmrCalc(gender,weight,centimeters,age)
{	
	

	if (gender=='Male')
	{
		weight=weight*9.99;
		 
		height=centimeters*6.25;
		age=age*5;
        
		
		rmr=weight+height-age+5;
		rmr=Math.round(rmr);
		return rmr;
	}
	else
		weight=weight*9.99;
		
		height=centimeters*6.25;
		age=age*5;
		
		rmr=weight+height-age-161;
		rmr=Math.round(rmr);
		return rmr;
}

//Main
function calculateRMR(form) 
{
	// variables start here 
	var weight=form.weight.value;
	var centimeters=form.centimeters.value;
	
	var age=form.age.value;
	var gender=getGenderValue(form);
	
	//variables end here 

	// start validation of the form here 
	validateEmptyRadioButton(gender,'Please choose your gender.');
	
	validateEmptyTextField(weight,'Please enter your weight.');
	validateEmptyTextField(centimeters,'Please enter height in cm.');
	
	validateEmptyTextField(age,'Please enter your age.');
	validateNumeric(weight,'Please only enter numbers in the fields.');
	validateNumeric(centimeters,'Please only enter numbers in the fields.');
	
	validateNumeric(age,'Please only enter numbers in the fields.');
	//end validation of the form here
	
	// if metric equals to pounds then convert to kilograms
	

	// calculate bmr
	bmrCalc(gender,weight,centimeters,age);

	form.rmr.value = rmr;
}