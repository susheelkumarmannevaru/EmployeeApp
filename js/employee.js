app.controller('employeeController', function ($scope, $http, $log, $location) {
    console.log($location.$$absUrl.split('?').find(x => x.includes('empId=')).split('=')[1]);
    var employeeId = 
                $location
                && $location.$$absUrl.split('?')
                && $location.$$absUrl.split('?').length > 0 
                && $location.$$absUrl.split('?').find(x => x.includes('empId=')).split('=').length > 1
                && $location.$$absUrl.split('?').find(x => x.includes('empId=')).split('=')[1];
    console.log(employeeId);
    $http.get('http://127.0.0.1:5501/data/dbase.json')
        .then(function (resp) {
            console.log(resp);
            $log.info(resp);
            var employeeRecords = resp.data.records;
            var str;
            if(employeeRecords
                && Array.isArray(employeeRecords) 
                && employeeRecords.length > 0 
                && employeeId !== ''){
                for (let i = 0; i < employeeRecords.length; i++) {
                    if(employeeRecords[i] && employeeRecords[i].CustomerKey == employeeId){
                        $scope.employee = employeeRecords[i];
                        break;                           
                    }                       
                }
                
            }
        });
        
    
});