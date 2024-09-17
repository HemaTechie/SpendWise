var app = angular.module('expenseTracker', []);

app.controller('expenseTrackerController', ['$scope', '$window', function($scope, $window) {
    $scope.isLoggedIn = false;
    $scope.showSignUp = false;
    $scope.users = [];

    $scope.signUp = function() {
        $scope.users.push({ username: $scope.newUsername, password: $scope.newPassword });
        $scope.newUsername = '';
        $scope.newPassword = '';
        $scope.showSignUp = false;
    };

    $scope.login = function() {
        var user = $scope.users.find(function(user) {
            return user.username === $scope.username && user.password === $scope.password;
        });

        if (user) {
            $scope.isLoggedIn = true;
            $window.location.href = 'dashboard.html';
        } else {
            alert('Invalid username or password');
        }
    };

    $scope.toggleForms = function() {
        $scope.showSignUp = !$scope.showSignUp;
    };

    $scope.showIncomeForm = function() {
        $scope.isIncomeFormVisible = true;
        $scope.isExpenseFormVisible = false;
    };

    $scope.showExpenseForm = function() {
        $scope.isIncomeFormVisible = false;
        $scope.isExpenseFormVisible = true;
    };

    $scope.addIncome = function() {
        $scope.incomes.push($scope.income);
        $scope.income = {};
        $scope.isIncomeFormVisible = false;
    };

    $scope.addExpense = function() {
        $scope.expenses.push($scope.expense);
        $scope.expense = {};
        $scope.isExpenseFormVisible = false;
    };
}]);
