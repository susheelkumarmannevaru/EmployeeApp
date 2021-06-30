var app = angular
.module("employeeApp", [])
.filter("filterGender",function(){
    return function(Gender){
        console.log(Gender)
        switch(Gender)
        {
            case "M":
                return "Male";
            case "F":
                return "Female";
        }
    }
}); 









