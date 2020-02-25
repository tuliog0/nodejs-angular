pmg.controller('mostraDados', function($scope){
	$scope.titulo = 'Olá Mundo!';
	$scope.condicao = false;
	$scope.minhaClasse = 'format';



	var cond = 0;

	$scope.alterarCondicao = function(){
		if(cond == 0){
			cond = 1;
			$scope.minhaClasse = '';
			if(cond == 1){
				$scope.condicao = true;
			}
		}else{
			cond = 0;
			$scope.condicao = false
		}
	}



});