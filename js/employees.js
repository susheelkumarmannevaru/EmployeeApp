

app.controller('employeesController', function ($scope, $http, $log) {
    $http.get('http://127.0.0.1:5501/data/dbase.json')
        .then(function (resp) {
            console.log(resp);
            $log.info(resp);
            $scope.employees = resp.data.records;
        });

    $scope.rowLimit = 20;
    $scope.sortColumn = "BirthDate";
});