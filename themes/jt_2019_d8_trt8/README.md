# Tema para Nova Identidade da Justiça do Trabalho

![Tema do Novo Portal](README_screenshot.jpg)

### Cabeçalho
	<div class="header_content">
	   <div class="accessibility">
		  <ul>
			 <li><a href="#">Ir para conteúdo </a></li>
			 <li>|</li>
			 <li><a href="#">Ir para o menu </a></li>
			 <li>|</li>
			 <li><a href="#">Ir para a busca </a></li>
			 <li>|</li>
			 <li><a href="#">Ir para o rodapé</a></li>
		  </ul>
	   </div>
	   <div class="translation_tools">
		  <ul>
			 <li><a href="#">English</a></li>
			 <li>|</li>
			 <li><a href="#">Español</a></li>
		  </ul>
	   </div>
	   <div class="access_links">
		  <ul>
			 <li class="icons_access_links icons_information">&nbsp;</li>
			 <li class="icons_access_links icons_zoom_more">&nbsp;</li>
			 <li class="icons_access_links icons_zoom_less">&nbsp;</li>
			 <li class="icons_access_links icons_libras">&nbsp;</li>
			 <li class="icons_access_links icons_contrast">&nbsp;</li>
			 <li class="icons_intranet">&nbsp;</li>
		  </ul>
	   </div>
	</div>
	
### Search & Redes Sociais
SEARCH : O Search deve ser alocado na região 'Busca'

REDES SOCIAIS: Você pode encontrar o HTML no arquivo 'page.html.twig'; seus icons estão no css como background
	
### Consulta Processual
	<div class="process_consultation_wrapper">
	   <div class="process_consultation_content">
		  <form class="form-inline">
			 <button class="btn consulta_processual_badge" id="consulta_processual_badge" type="button">Consulta Processual</button>
			 <div class="form-group"><label class="sr-only" for="numero_cnj">Nº CNJ</label> <input class="form-control" id="numero_cnj" placeholder="Nº CNJ" type="text" /></div>
			 <div class="form-group"><label class="sr-only" for="digito">Digito</label> <input class="form-control" id="digito" placeholder="Digito" type="text" /></div>
			 <div class="form-group"><label class="sr-only" for="ano">Ano</label> <input class="form-control" id="ano" placeholder="Ano" type="text" /></div>
			 <div class="form-group"><label class="sr-only" for="justica">Justiça</label> <input class="form-control" id="justica" placeholder="5" type="text" /></div>
			 <div class="form-group"><label class="sr-only" for="regiao">Região</label> <input class="form-control" id="regiao" placeholder="10" type="text" /></div>
			 <div class="form-group col"><label class="sr-only" for="vara">Vara</label> <input class="form-control" id="vara" placeholder="Vara" type="text" /></div>
			 <button class="btn mb-2 consulta_processual_clean" type="submit">Limpar</button><button class="btn mb-2 consulta_processual_consult" type="submit">Consultar</button>
		  </form>
	   </div>
	</div>

### Menu Lateral
	<div class="menu_right_wrapper">
		<div class="menu_right_content">
			<div class="menu_right">
				<ul>
					<li class="menu_right_pje"><a href="#">PJe</a></li>
					<li class="menu_right_certidoes"><a href="#">Certidões</a></li>
					<li class="menu_right_pautas"><a href="#">Pautas</a></li>
					<li class="menu_right_recolhimento"><a href="#">Guias de Recolhimento</a></li>
					<li class="menu_right_varas"><a href="#">Varas do Trabalho</a></li>
					<li class="menu_right_diario"><a href="#">Diário Eletrônico da JT</a></li>
					<li class="menu_right_concursos"><a href="#">Concursos</a></li>
					<li class="menu_right_resolucoes"><a href="#">Atos e Resoluções</a></li>
				</ul>
			</div>
		</div>
	</div>
### Rodapé
	<div class="footer_wrapper">
<div class="footer_content">
<div class="bloco_footer logo_footer"><a href="#"><img alt="" src="<?php {{ echo base_path();}} ?>/themes/jt_2019_d8_trt8/images/logo_footer.png" /></a></div>

<div class="bloco_footer endereco_footer">
<p>Tribunal Regional do Trabalho da 8ª Região</p>

<p>Tv. D. Pedro I, 746 - Umarizal</p>

<p>CEP:66050-100</p>

<p>Horário de funcionamento:<br />
De segunda a sexta, das 8h às 13h</p>

<p>Telefone: +55 (91) 4008-7000</p>
</div>

<div class="bloco_footer mapa_site">
<h2>Mapa do site</h2>

<ul>
	<li><a href="#"><span class="icon">&gt;</span>Institucional</a></li>
	<li><a href="#"><span class="icon">&gt;</span>Serviços</a></li>
	<li><a href="#"><span class="icon">&gt;</span>Notícias</a></li>
	<li><a href="#"><span class="icon">&gt;</span>Jurisprudência</a></li>
	<li><a href="#"><span class="icon">&gt;</span>Transparência</a></li>
	<li><a href="#"><span class="icon">&gt;</span>Ouvidoria</a></li>
</ul>
</div>

<div class="bloco_footer rede_social">
<ul class="lista_links">
	<li>
	<div class="social instagram">&nbsp;</div>
	</li>
	<li>
	<div class="social twitter">&nbsp;</div>
	</li>
	<li>
	<div class="social facebook">&nbsp;</div>
	</li>
	<li>
	<div class="social flickr">&nbsp;</div>
	</li>
	<li>
	<div class="social youtube">&nbsp;</div>
	</li>
</ul>

<div class="exclamacao"><a href="#"><img alt="" src="<?php {{ echo base_path();}} ?>/themes/jt_2019_d8_trt8/images/icon_exclamacao.png" /></a></div>
</div>
</div>
</div>

