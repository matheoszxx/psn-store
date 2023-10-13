DEIXANDO DINAMICO O HTML (PROPRIEDADES)

1º Criamos uma propriedade no TS
2º O nome da variavel que criamos no TS adicionamos entre "{{}}"
3ª Aonde o SELECTOR do component estiver, colocamos a propriedade criada nele, por exemplo
	<app-card NomeDaPropriedade=""></app-card>

------------------------------------------------------------------------------------------------------

FAZENDO O SUB-COMPONENT APARECER NO COMPONENT PRINCIPAL

1ª Após criar o component principal e na parte do CSS colocamos uma propriedade nele "position: relative" (onde ele vai se comportar de forma relativa aos sub-component)
2ª Depois criamos o sub-component e na parte do CSS colocamos uma propriedade "position: absolute" (com isso, todo o conteudo do sub-component ficará a frente, ou seja, a mostra no component principal)
