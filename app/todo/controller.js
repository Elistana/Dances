/**
 * Created by Anna on 24.12.2016.
 */
app.controller('main', main);

function main($scope, $rootScope, tasks){
   // $scope.message = 'Hello, World!';
    $scope.header = "ToDo list!";

    $scope.updateTasks = function(){
        if(!!$scope.newTaskName){
            tasks.add($scope.newTaskName);
        }
       /* $scope.tasks.push({
            title: $scope.newTaskName,
            done: false,
        })
        console.log($scope.newTaskName);
        }*/
    };

    $scope.tasks=tasks.get();
   /* $scope.tasks = [
        {
            title: 'Learn JavaScript',
            done: true,
        },
        {
            title: 'Learn AngularJS',
            done: false,
        }
    ];

*/

};