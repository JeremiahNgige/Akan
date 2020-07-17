var CC, YY, MM, DD, d, dayValue;
var dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

function validate() {
    var genders = document.getElementsByName("gender");
    if( document.fillForm.year.value == "" || document.fillForm.year.value.length !=4 || document.fillForm.year.value >2100 || document.fillForm.year.value <=1900) {
       alert( "Please provide a valid year of birth! eg 2020" );
       document.fillForm.year.focus() ;
       return false;
    }
    else if( document.fillForm.month.value == "" || document.fillForm.month.value.length != 2 || document.fillForm.month.value > 12  || document.fillForm.month.value <= 0){
       alert( "Please provide a valid month!" );
       document.fillForm.month.focus() ;
       return false;
    }
    else if( document.fillForm.date.value == ""  || document.fillForm.date.value.length != 2|| document.fillForm.date.value > 31 || document.fillForm.date.value <= 0) {
       alert( "Please provide a valid date!" );
       document.fillForm.day.focus() ;
       return false;
    }
    else if(genders[0].checked==false && genders[1].checked==false ) {
        alert("You must select male or female");
        return false;
    }   
    else{
      return true ;
    }
    
  }
  