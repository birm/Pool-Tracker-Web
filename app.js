$(document).ready(function(){
      $('.parallax').parallax();
    });

$(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });


var app = angular.module('app', []);
app.controller('swim', function($scope) {
    $scope.results=[];
    $scope.fs = function(inno,title,high,low){
        if (typeof(low)==='undefined') low = -100;
        var res;
        if((high>inno) && (inno>low)){
            res={color:"",title:title,text:'Normal',val:inno};            
        }else if(inno>=high){
            res={color:"#FF6347",title:title,text:('High by '+(inno-high)),val:inno};
        }else if(inno<=low){
            res={color:"#FFB6C1",title:title,text:('Low by '+(low-inno)),val:inno};
        }else{
            res={color:"#FAFAD2",title:title,text:'not measured',val:NaN};
        }
        return res;
        };
    $scope.log_pool = function(){
        $scope.today = new Date().toLocaleString();
        $scope.results=[];
        $scope.results.push($scope.fs($scope.fac,"Free Avaliable Chlorene",4,1));
        $scope.results.push($scope.fs($scope.tac,"Total Avaliable Chlorene",0.2));
        $scope.results.push($scope.fs($scope.ch,"Calcium Hardness",400,200));
        $scope.results.push($scope.fs($scope.ta,"Total Alkilinity",120,80));
        $scope.results.push($scope.fs($scope.ph,"pH",7.8,7.2));
        $scope.results.push($scope.fs($scope.cu,"Copper",1));
        $scope.results.push($scope.fs($scope.fe,"Iron",1));
        $scope.results.push($scope.fs($scope.tds,"Total Dissolved Solids",2500));
        $scope.results.push($scope.fs($scope.pho,"Phospates",100));
        $scope.results.push($scope.fs($scope.temp,"Temperature",212,32));
    }
});

