# Tema do PAS TRT8 para Drupal 7

<div style="text-align:center"><img src="README_screenshot.jpg" /></div>

## Cabeçalhos da View de Notícias

### 1º Cabeçalho: Imagem de fundo e Acessos Exclusivos

```
<div class="banner_central_wrapper">
   <div class="banner_central">
      <div class="content">
        <h1>Ajude a fazer um plano melhor</h1>
        <span>Fiscalize a utilização</span>
      </div>
      <!-- acesso exclusivo -->
      <div class="servicos_wrapper">
       <div class="servicos_content">
         <div class="alinhamento">
           <div class="title_services">
             <a name="acessos_exclusivos"></a>
             <h2>Acessos Exclusivos</h2>
           </div>
             <div class="servico ">
                <a href="http://www2.trt8.jus.br/pas/gweb/loginbeneficiario.asp" target="_blank">
                  <div class="imagem_servico">
            	      <div class="icon_acesso_rapido acesso_befeciciario"> </div>
            	      <h2>Beneficiários</h2>
                  </div>
                </a>
             </div>
    	    <div class="servico ">
               <a href="http://www2.trt8.jus.br/pas/gweb/logincredenciado.asp" target="_blank">
        	 <div class="imagem_servico">
            	     <div class="icon_acesso_rapido acesso_credenciados"></div>
            	     <h2>Credenciados</h2>
        	 </div>
               </a>
             </div>
             <div class="servico ">
                 <a href="http://www2.trt8.jus.br/pas/gweb/logininterno.asp" target="_blank">
        	   <div class="imagem_servico">
            	       <div class="icon_acesso_rapido acesso_peritos"></div>
            	       <h2>Peritos</h2>
        	   </div>
                </a>
             </div>
             <div class="servico">
                 <a href="http://www2.trt8.jus.br/pas/gweb/logininterno.asp" target="_blank">
        	   <div class="imagem_servico">
            	       <div class="icon_acesso_rapido acesso_gestores"></div>
            	       <h2>Gestores</h2>
        	   </div>
              </div>
          </div>
        </div>
      </div> <!-- fim acesso exclusivo -->
  </div>
</div>

```

### 2º Cabeçalho: Acesso rápido aos serviços em destaque


```
<div class="links_uteis_wreapper">
    <a name="acesso_rapido"></a>
    <div class="links_uteis_content">
        <div class="link_item">
            <a href="http://www2.trt8.jus.br/pas/gweb/pesquisadecredenciado.asp" target="_blank">
            <div class="topo_item">
	    <div class="imagem_item imagem_guia_medico"></div>
                <h2>Guia médico e odontológico</h2>
            </div>
            <div class="corpo_item">
                <p>Consulte a relação de profissionais e entidades de saúde credenciadas.</p>
            </div>
            </a>
        </div>
        <div class="link_item link_item_meio">
            <div class="topo_item">
	    <div class="imagem_item imagem_autorizacao_internet"></div>
                <h2>Autorização online</h2>
            </div>
            <div class="corpo_item">
                <p class="autorizacao_internet">Obtenha aqui a autorização de consultas e procedimentos.</p>
            </div>
        </div>
        <div class="link_item">
            <div class="topo_item">
	    <div class="imagem_item imagem_seus_gastos"></div>
                <h2>Histórico de utilização</h2>
            </div>
            <div class="corpo_item">
                <p>Faça a conferência dos desembolsos do plano e contribua com a fiscalização.</p>
            </div>
        </div>
    </div>
</div>

<div class="title-view">
    <div class="col-left">
        <a name="noticias"></a>
        <h2>Notícias</h2>
    </div>
    <div class="col-right">
        <a href="#">Ver mais notícias</a>
    </div>
</div>
```

## Rodapé da View de Notícias

### 1º Rodapé: Serviços

```
<div class="services" id="servicos">
    <div class="services_content">
        <div class="news_top">
            <div class="title_section">
                <h2>Serviços ao Beneficiário</h2></div>
            <hr class="marker_section" />
        </div>

        <div class="service_itens_content">
            <div class="service_item">
                <div class="service_icon_aderir"></div>
                <div class="service_item_title">
                    <a href="#">Aderir ao plano</a>
                </div>
            </div>
            <div class="service_item">
                <div class="service_icon_incluir"></div>
                <div class="service_item_title">
                    <a href="#"> Incluir Dependentes</a>
                </div>
            </div>

            <div class="service_item">
                <div class="service_icon_solicitar"></div>
                <div class="service_item_title">
                    <a href="#">Solicitar Exclusão do plano</a>
                </div>

            </div>

            <div class="service_item">
                <div class="service_icon_consultar"></div>
                <div class="service_item_title">
                    <a href="#">Consultar Débitos</a>
                </div>
            </div>

            <div class="service_item">
                <div class="service_icon_quitar"></div>
                <div class="service_item_title">
                    <a href="#">Quitar ou parcelar débitos</a>
                </div>
            </div>

            <div class="service_item">
                <div class="service_icon_atualizar"></div>
                <div class="service_item_title">
                    <a href="#">Atualizar dados cadastrais</a>
                </div>

            </div>
            <div class="service_item">
                <div class="service_icon_parcerias"></div>
                <div class="service_item_title">
                    <a href="#">Parcerias com Academias</a>
                </div>

            </div>
            <div class="service_item">
                <div class="service_icon_2via"></div>
                <div class="service_item_title">
                    <a href="#"> Solicitar 2° via de Carteiras</a>
                </div>

            </div>
            <div class="service_item">
                <div class="service_icon_modelos"></div>
                <div class="service_item_title">
                    <a href="#"> Modelos de Requerimentos</a>
                </div>

            </div>
        </div>
    </div>
</div>
<!--fim services-->
```

### 2º Rodapé: Contatos

```
<div class="contact">
    <a name="contatos"></a>
    <div class="contact_content">
        <div class="contact_box">
            <div class="contact_icon_phone"></div>
            <div class="contact_title">
                <a href="#">Telefone</a>
            </div>
            <div class="contact_text">
                <p>De segunda à sexta de 8h as 15h</p>
                <p>(91) 4008 7124</p>
            </div>
        </div>
        <div class="contact_box">
            <div class="contact_icon_message"></div>
            <div class="contact_title">
                <a href="#">Fale Conosco</a>
            </div>
            <div class="contact_text">
                <p>Envie sua mensagem</p>
            </div>
        </div>

        <div class="contact_box">
            <div class="contact_icon_address"></div>
            <div class="contact_title">
                <a href="#">Endereços e Contatos</a>
            </div>
            <div class="contact_text">
                <p>Encontre os endereços e contatos</p>
                <p> mais importantes</p>
            </div>
        </div>
    </div>
</div>
```
