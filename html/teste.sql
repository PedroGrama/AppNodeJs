CREATE TABLE usuarios(
    nome VARCHAR(50), 
    email VARCHAR(100),
    idade INT
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Maria Fernanda", 
    "mfernanda@teste.com",
    8
);

SELECT * FROM usuarios WHERE idade = 8;
SELECT * FROM usuarios WHERE idade => 18;

DELETE FROM usuarios WHERE nome = "Pedro Grama";

UPDATE usuarios SET nome = "Nome de Teste" WHERE nome "Gabriel Henrique";
UPDATE usuarios SET nome = "Joaquim Oliver" WHERE nome = "Gabriel Henrique";
UPDATE usuarios SET nome = "Maria Luisa" WHERE nome = "Ana Claudia";