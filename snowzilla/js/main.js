$(function() {

    function snowzillaWalkForever() {

        var leftStep = true;
        var talking = false;
        function walk() {
            setTimeout(function() {
                var deg = leftStep ? 8 : -8;
                leftStep = !leftStep;
                $('.snowzilla').rotate(deg);
                walk();
            }, 1000);
        }
        function talk() {
            setTimeout(function() {
                talking = !talking;
                if (talking) {
                    $('.snowzilla-speak').show();
                } else {
                    $('.snowzilla-speak').hide();
                }
                talk();
            }, 3000);
        }
        walk();
        talk();
    }

    function showContent() {
        $('.content').show();
    }

    function beginMovie() {
        var duration = 40000;
        var distance = '+=2000px';

        showContent();
        $('.snowzilla').animate({
            'left': distance
        }, {
            duration: duration
        });
        $('.oval-speech-border').animate({
            'left': distance
        }, {
            duration: duration
        });
        snowzillaWalkForever();
    }

    function titleScreen() {
        setTimeout(function() {
            $("#movie-title").show('scale', {
                duration: 1000,
                easing: 'easeOutBounce',
                complete: beginMovie
            });
        }, 1000);
    }

    titleScreen();
    //showContent();
});


angular.module('snowzilla', [
    'snowzilla.controllers'
]);

(function() {

    var module = angular.module('snowzilla.controllers', [
    ]);

    module.controller('MainCtrl',
        function($scope) {
            $scope.myNumber = 30;
            $scope.getNumber = function(num) {
                return new Array(num);
            };
            $scope.buildings = [1,2,3,4,2,3,1,4,1,2,3,1,4,3,2,1,3,2,1,2,3,4];
        });

})();
