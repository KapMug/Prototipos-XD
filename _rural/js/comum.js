$(document).ready(function() {
	$('tr[name=dadosTabelaSimulacao] td').click(function(){
		$('tr[name=dadosTabelaSimulacao]').removeClass("linhaSelecionada");
		$(this).parents('tr[name=dadosTabelaSimulacao]').toggleClass("linhaSelecionada");
	});
	
	$('[name=accordionCadastro] div').click(function(){
		$(this).parents('[name=accordionCadastro]').find('span.glyphicon-chevron-right').toggleClass("glyphicon-chevron-up")
	})
	
	$('[name=accordionMenu] div').click(function(){
		$(this).parents('[name=accordionMenu]').find('span.glyphicon-chevron-right').toggleClass("glyphicon-chevron-up")
	})
	
});

