--tabla productos



create table tipo_productos(
 	codigo int not null primary key,
	nombre varchar (30) not null
)

insert  into tipo_productos values(1,'Mermelada')
insert  into tipo_productos values(2,'Licor')
insert  into tipo_productos values(3,'Dulce')

select* from tipo_productos

--tabla productos

drop table producto

create table producto(

	codigo_tipo int not null check(codigo_tipo in(1,2,3)),
	codigo int primary key not null,
	gusto varchar(30) not null,
	tamanio varchar(30) not null,
	precio float4,

constraint fk_codigo foreign key(codigo_tipo) references tipo_productos(codigo)
)


insert into producto values(1,1,'Durazno','450ml',300)
insert into producto values(1,2,'Cayote','450ml',300)
insert into producto values(1,3,'Higo','450ml',300)
insert into producto values(1,4,'Mora','800ml',500)
insert into producto values(1,5,'Mamón','800ml',500)
insert into producto values(2,6,'Dulce de leche','500ml',450)
insert into producto values(2,7,'Lemoncello','500ml',450)
insert into producto values(2,8,'Narancello','1000ml',800)
insert into producto values(2,9,'Narancello','500ml',450)
insert into producto values(2,10,'Menta','1000ml',800)
insert into producto values(2,11,'Menta','500ml',450)
insert into producto values(3,12,'Calabaza','480ml',400)
insert into producto values(3,13,'Calabaza','800ml',700)
insert into producto values(3,14,'Durazno','480ml',400)
insert into producto values(3,15,'Durazno','800ml',700)
insert into producto values(3,16,'Limon','480ml',400)
insert into producto values(3,17,'Limon','800ml',700)


select * from producto pe
join tipo_productos tp on (tp.codigo = pe.codigo)
where tp.codigo = 2

----------------------------------------------------------------

--tabla puntos de venta
drop table puntos_venta

create table puntos_venta(
	codigo int not null primary key,
	nombre varchar(100) not null,
	direccion varchar(250) not null,
	localidad varchar(200) not null,
	slogan varchar(500)	
)


insert into puntos_venta values( 1,'La Rinconada', 'Mexico y Tucuman','Paraná - Entre Rios','Punto de sabores')
insert into puntos_venta values( 2,'Drugstore Santa Fe', 'Urquiza 1200','Paraná - Entre Rios')
insert into puntos_venta values( 3,'ESTANCIA LO DE NILDA', 'Av. Zanni 872','Paraná - Entre Rios')
insert into puntos_venta values( 4,'DISTRIBUCION DIRECTA', 'Cullen 1475','Punto de sabores','Esperanza - Santa fe')

-----------------------------------------------------------------

create table datos_empresa(

	codigo int primary key,
	direccion varchar(100),
	telefono varchar (100),
	telefono2 varchar(100),
	telefono3 varchar(100),
	instagram varchar (500),
	facebook varchar (500),
	email varchar(200)	

)

insert into datos_empresa values( 1, 'Courrege 142', '+543434656105','','','https://www.instagram.com/alitos.productos/?hl=es','https://www.facebook.com/alitos.productos','productos.alitos@gmail.com' )


select * from datos_empresa



--------------------------------------------------------------------------------------------------
drop table Clientes

create table Clientes(

	codigo int primary key not null,
	nombre varchar(100) not null,
    pass varchar(50) not null,
	email varchar(50),
	telefono varchar (100),
	cuil int,
	dni int	
)

insert into clientes values (1,'Estrada Martin',MD5('12345678'))

select * from clientes


-------------------------------------------------------------------------------------------------
--productos comprados por clientes


drop table facturas

create table facturas(

	codigo_cliente int not null,
	codigo_articulo int not null check(codigo_articulo in(1,2,3)),
	numero_factura int,
	fecha date,
	
	
constraint fk_codigo_cliente foreign key (codigo_cliente) references Clientes(codigo)

)

-- insert into facturas values(1,2,1231, current_date)

select cl.nombre, pr.*, fa.* from facturas fa
join producto pr on (pr.codigo = fa.codigo_articulo )
join Clientes cl on (cl.codigo = fa.codigo_cliente)


