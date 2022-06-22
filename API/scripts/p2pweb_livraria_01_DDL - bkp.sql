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
	caminhoImagem VARCHAR(100) DEFAULT ('livroPadrao') UNIQUE NOT NULL
);
GO

-- USUARIOS
CREATE TABLE usuario
(
	idUsuario INT PRIMARY KEY IDENTITY(5000,1),
	nome VARCHAR(100) NOT NULL,
	dataNascimento DATE NOT NULL,
	cpf CHAR(14) UNIQUE NOT NULL,
	endereco VARCHAR(150) NOT NULL,
	telefone VARCHAR(20) UNIQUE,
	email VARCHAR(255) UNIQUE NOT NULL,
	senha VARCHAR(255) NOT NULL CHECK ( len(senha) >= 6 ),
	caminhoFotoPerfil VARCHAR(100) DEFAULT ('userPadrao') UNIQUE NOT NULL
);
GO

-- SITUACAO
CREATE TABLE situacao
(
	idSituacao TINYINT PRIMARY KEY IDENTITY,
	titulo VARCHAR(50) UNIQUE NOT NULL 
);
GO

-- CARRINHO
CREATE TABLE carrinho
(
	idCarrinho INT PRIMARY KEY IDENTITY,
	idLivro INT FOREIGN KEY REFERENCES livro(idLivro),
	idUsuario INT FOREIGN KEY REFERENCES usuario(idUsuario),
	idSituacao TINYINT FOREIGN KEY REFERENCES situacao(idSituacao),
	qtdeCompra TINYINT NOT NULL,
	valorXQtdExemplares MONEY NOT NULL,
	dataAtualizada DATETIME NOT NULL,
);
GO

-- PEDIDOS
CREATE TABLE pedido
(
	idPedido INT PRIMARY KEY IDENTITY,
	idUsuario INT FOREIGN KEY REFERENCES usuario(idUsuario),
	idCarrinho INT FOREIGN KEY REFERENCES carrinho(idCarrinho),
	idSituacao TINYINT FOREIGN KEY REFERENCES situacao(idSituacao),
	dataPedido DATETIME NOT NULL,
	dataEntrega DATE NOT NULL,
	enderecoEntrega VARCHAR(100) NOT NULL,
	qtdeTotalItens TINYINT NOT NULL,
	valorTotal MONEY NOT NULL
);
GO

-- --------------   DML ----------------------

-- SITUA��ES
INSERT INTO situacao (titulo)
VALUES ('Disponivel'),('Selecionado'),('Aguardando pagamento'),
('Em transporte'),('Entregue'),('Cancelado'),('Indispon�vel');
GO

--Scaffold-DbContext "Data Source=PANZERII\SQLEXPRESS; initial catalog=P2_PWEB_LIVRARIA; user Id=sa; pwd=senai@#132;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Domains -ContextDir Contexts -Context P2_PWEB_Livraria -force


