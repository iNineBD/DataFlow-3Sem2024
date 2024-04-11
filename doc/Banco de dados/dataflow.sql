drop database if exists dataflow;
create database dataflow;
use dataflow;

create table organizacao(
nome varchar (200) primary key 
);

create table usuario(
email varchar (200) primary key, 
senha varchar (50)
);

alter table usuario add organizacao_nome varchar(200);
alter table usuario 
add constraint fk_organizacao_nome
foreign key (organizacao_nome)
references organizacao (nome);

create table log (
data_hora datetime primary key
);

alter table log add usuario_email varchar (200);
alter table log 
add constraint fk_usuario_email
foreign key(usuario_email)
references usuario (email); 

create table arquivo (
id int primary key auto_increment,
nome_arquivo varchar (200),
usuario_email varchar (200),

foreign key(usuario_email) references usuario(email),
organizacao_nome varchar (200),
foreign key(organizacao_nome) references organizacao(nome)
);


alter table log add arquivo_id int;
alter table log
add constraint fk_log_arquivo_id
foreign key (arquivo_id)
references arquivo (id);

create table status (
    id int primary key,
    status varchar (200)
);

alter table arquivo add status_id int;
alter table arquivo
add constraint fk_arquivo_status
foreign key (status_id)
references status (id);

create table metadado (
id int primary key auto_increment,
nome varchar(200),
descricao varchar(1000),
ativo boolean default true,
valor_padrao varchar (200)
);

alter table metadado add arquivo_id int;
alter table metadado 
add constraint fk_metadado_arquivo_id
foreign key (arquivo_id)
references arquivo (id) on delete cascade;

create table depara (
id int primary key auto_increment, 
para varchar (200), 
de varchar (200)
);

alter table depara add metadado_id int; 
alter table depara 
add constraint fk_depara_metadado_id
foreign key (metadado_id)
references metadado (id) on delete cascade;

create table tipo (
nome_tipo varchar (200) primary key
);

alter table metadado add nome_tipo varchar (200);
alter table metadado 
add constraint fk_nome_tipo
foreign key (nome_tipo)
references tipo (nome_tipo); 

 create table restricao (
 id int primary key auto_increment,
 nome varchar (200), 
 valor varchar(200),
 id_metadado int,
 
 foreign key (id_metadado) references metadado (id) on delete cascade
 );


 create table nivel_acesso (
nivel varchar (200) primary key
 );
 
 create table nivel_acesso_usuario(
 nivel varchar (200), 
 email varchar (200),
 primary key (nivel, email) 
 );

alter table nivel_acesso_usuario 
add constraint fk_nivel_acesso_nivel
foreign key (nivel)
references nivel_acesso (nivel);

alter table nivel_acesso_usuario
add constraint fk_nivel_acesso_email
foreign key (email)
references usuario(email);

-- INSERTS DE STATUS

INSERT INTO status (id, status) VALUES (1, 'LANDING ZONE');
INSERT INTO status (id, status) VALUES (2, 'AGUARDANDO APROVAÇÃO DA BRONZE');
INSERT INTO status (id, status) VALUES (3, 'BRONZE ZONE');
INSERT INTO status (id, status) VALUES (4, 'AGUARDANDO APROVAÇÃO DA SILVER');
INSERT INTO status (id, status) VALUES (5, 'SILVER ZONE');
INSERT INTO status (id, status) VALUES (98, 'NÃO APROVADO PELA BRONZE');
INSERT INTO status (id, status) VALUES (99, 'NÃO APROVADO PELA SILVER');

INSERT INTO tipo (nome_tipo) VALUES ("Inteiro");
INSERT INTO tipo (nome_tipo) VALUES ("Decimal");
INSERT INTO tipo (nome_tipo) VALUES ("Booleano");
INSERT INTO tipo (nome_tipo) VALUES ("Caractere");
INSERT INTO tipo (nome_tipo) VALUES ("Texto");
INSERT INTO tipo (nome_tipo) VALUES ("Data");
INSERT INTO tipo (nome_tipo) VALUES ("Hora");
INSERT INTO tipo (nome_tipo) VALUES ("Data e Hora");

INSERT INTO nivel_acesso (nivel) VALUES ('MASTER');
INSERT INTO nivel_acesso (nivel) VALUES ('FULL');
INSERT INTO nivel_acesso (nivel) VALUES ('LZ');
INSERT INTO nivel_acesso (nivel) VALUES ('B');
INSERT INTO nivel_acesso (nivel) VALUES ('S');

