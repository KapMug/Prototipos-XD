$(document).ready(function() {
	$('tr[name=dadosTabelaSimulacao] td').click(function(){
		$('tr[name=dadosTabelaSimulacao]').removeClass("linhaSelecionada");
		$(this).parents('tr[name=dadosTabelaSimulacao]').toggleClass("linhaSelecionada");
	});
	
	$('[name=accordionCadastro] div').click(function(){
		$(this).parents('[name=accordionCadastro]').find('span.glyphicon-chevron-right').toggleClass("glyphicon-chevron-down")
	})
	
});