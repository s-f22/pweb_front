CREATE DATABASE P2_PWEB_LIVRARIA;
GO 

USE P2_PWEB_LIVRARIA;
GO

-- --------------   DDL ----------------------

-- LIVROS
CREATE TABLE livro
(
	idLivro INT PRIMARY KEY IDENTITY(100100100,1),
	titulo VARCHAR(50) UNIQUE NOT NULL,
	genero VARCHAR(50) NOT NULL,
	autor VARCHAR(50) NOT NULL,
	editora VARCHAR(50) NOT NULL,
	anoLancamento DATE NOT NULL,
	qtdeEstoque TINYINT NOT NULL,
	precoUnitario MONEY NOT NULL,
	descricao VARCHAR(300) NOT NULL,
	destaque BIT DEFAULT(0),
	caminhoImagem VARCHAR(100) DEFAULT ('livroPadrao') NOT NULL
);
GO

-- USUARIOS
CREATE TABLE usuario
(
	idUsuario INT PRIMARY KEY IDENTITY(5000,1),
	nome VARCHAR(100) NOT NULL,
	dataNascimento DATE NOT NULL,
	cpf CHAR(14) UNIQUE NOT NULL,
	telefone VARCHAR(20) UNIQUE,
	email VARCHAR(255) UNIQUE NOT NULL,
	senha VARCHAR(255) NOT NULL CHECK ( len(senha) >= 6 ),
	caminhoFotoPerfil VARCHAR(100) DEFAULT ('userPadrao') NOT NULL
);
GO


-- CARRINHO
CREATE TABLE carrinho
(
	idCarrinho INT PRIMARY KEY IDENTITY,
	idLivro INT FOREIGN KEY REFERENCES livro(idLivro),
	idUsuario INT FOREIGN KEY REFERENCES usuario(idUsuario),
	qtdeCompra TINYINT NOT NULL,
	valorTotal MONEY NOT NULL,
	dataAcesso DATETIME NOT NULL,
);
GO



-- --------------   DML ----------------------

-- LIVROS
INSERT INTO livro(titulo, genero, autor, editora, anoLancamento, qtdeEstoque, precoUnitario, descricao)
VALUES ('Os Irmaos Karamazov' , 'Literatura Russa' , 'Dostoievski, F.' , 'Editora 34', '07/02/2002' , 50 , 49.99 , 'Um dos maiores classicos russos em traducao direta para o portugues, por Paulo Bezerra'),
('Dom Quixote' , 'Literatura universal' , 'Cervantes, M.' , 'Companhia das Letras', '01/02/2018' , 30 , 79.50 , 'Lido por diversas gerações, narra as aventuras do nobre fidalgo e seu escudeiro frente as reflexoes da vida'),
('Cosmos' , 'Astronomia' , 'Sagan, C.' , 'Companhia das Letras', '09/04/2021' , 50 , 69.50 , 'Os mistérios do universo e nossa humilde historia sob a perpectiva do inesquecivel Carl Sagan, grande divulgador cientifico'),
('A interpretacao dos Sonhos' , 'Psicanalise' , 'Freud, S.' , 'Vozes', '30/12/1999' , 15 , 115.50 , 'Livro referencia para o entendimento da psicanálise, desperta discussões até hoje por seus insights e abordagem unica do assunto'),
('Livro do desassossego' , 'Lieteratura Portuguesa' , 'Pessoa, F.' , 'Martins Fontes', '15/10/1999' , 5 , 89.90 , 'Repleto de uma prosa poetica, Fernando Pessoa demonstra um existencialismo carregado das mais belas provocações')
GO


-- USUARIOS
INSERT INTO usuario(nome,  dataNascimento, cpf, telefone, email, senha)
VALUES ('Joao da Silva', '13/10/83', '94839859000', '11 93456-7654', 'joao@email.com', '123456')
GO



--Scaffold-DbContext "Data Source=PANZERII\SQLEXPRESS; initial catalog=P2_PWEB_LIVRARIA; user Id=sa; pwd=senai@#132;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Domains -ContextDir Contexts -Context P2_PWEB_Livraria -force

select * from usuario
