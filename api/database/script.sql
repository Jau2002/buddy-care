CREATE DATABASE buddycare;

\c buddycare

/* DROP GENERAL DE INICIALIZACION
---------------------------------
*/

DROP TABLE pfvet_clientes;
DROP TABLE pfvet_mascotas;
DROP TABLE pfvet_articulos;
DROP TABLE pfvet_veterinarios;
DROP TABLE pfvet_veterinarias;
DROP TABLE pfvet_operadores;
DROP TABLE pfvet_histora_clinicas;
DROP TABLE pfvet_carritos;
DROP TABLE pfvet_horarios;
DROP TABLE pfvet_ecommerces;
DROP TABLE pfvet_reviews;




/* TABLA PRINICPAL DE CLIENTES SUSCRIPTOS
------------------------------------------
	id                   
	apellido   APELLIDO DEL CLIENTE         
	nombres    NOMBRES DEL CLIENTE          
	pais       PAIS DEL CLIENTE         
	localidad  LOCALIDAD         
	direccion  DIRECCION DEL CLIENTE          
	cp         CODIGO POSTAL          
	telefono   TELEFONO             
	email      EMAIL         
	usuario    USUARIO DE LOGIN          
	password   PASSWORD DE LOGIN       
	facebook   FACEBOOK DEL CLIENTE         
	instagram  INSTAGRAM DEL CLIENTE          
	notas_int  NOTA INTERNA          
	falta      FECHA DE ALTA           
	halta      HORA DE ALTA   
*/	

CREATE  TABLE pfvet_clientes ( 
	id                   integer  NOT NULL  ,
	apellido             char(55)  NOT NULL  ,
	nombres              char(55)  NOT NULL  ,
	pais                 char(55)  NOT NULL  ,
	localidad            char(55)  NOT NULL  ,
	direccion            char(155)  NOT NULL  ,
	cp                   char(20)  NOT NULL  ,
	telefono             char(55)    ,
	email                char(80)  NOT NULL  ,
	usuario              char(25)  NOT NULL  ,
	password          char(50) NOT NULL  ,
	facebook             char(65)    ,
	instagram            char(65)    ,
	notas_int            text    ,
	falta                date  NOT NULL  ,
	halta                time  NOT NULL  ,
	CONSTRAINT pk_pfvet_clientes PRIMARY KEY ( id )
 );



/* TABLA DE MASCOTAS DE CLIENTES
----------------------------------
	id   
	id_cliente ID DEL CLIENTE  (DUEÑO)
	nombre     NOMBRE DE LA MASCOTA 
	especie    ESPECIE DE LA MASCOTA	
	raza       RAZA
	edad 	   EDAD EN AÑOS
	peso       PESO EN KILOS
	estado     ESTADO (VIVA / MUERTA / EXTRAVIADA)
	id_madre   SI LA MADRE DE LA MASCOTA ESTA REGISTRADA EN ESTA APP , SU ID
	id_padre   SI LA PADRE DE LA MASCOTA ESTA REGISTRADA EN ESTA APP , SU ID 
	adjuntos	FOTOS DE LA MASCOTA
	nota		NOTA INTERNA DE LA MASCOTA
	chip 		CHIP DE LA MASCOTA SI LO TUVIERA
	falta 		FECHA DE ALTA
	halta		HORA DE ALTA
*/


CREATE  TABLE pfvet_mascotas ( 
	id                   integer  NOT NULL  ,
	id_cliente           integer  NOT NULL  ,
	nombre               char(65)  NOT NULL  ,
	especie              char(65)  NOT NULL  ,
	raza                 char(65)  NOT NULL  ,
	edad                 integer  NOT NULL  ,
	peso               integer    ,
	estado               char(20)  NOT NULL  ,
	id_madre             integer    ,
	id_padre             integer    ,
	adjuntos             text    ,
	nota                 text    ,
	chip                 integer    ,
	falta                date    ,
	halta                time    ,
	CONSTRAINT pk_pfvet_mascotas PRIMARY KEY ( id )
 );
 
 
 /* TABLA PRINCIPAL DE ARTICULOS 
 -------------------------------
	id                   
	nombre    				NOMBRE DE BUSQUEDA DEL ARTICULO          
	rubro     				ID DE RUBRO SEGUN TABLA pfvet_articulos           
	descripcion          	DESCRIPCION DETALLADA DEL ARTICULO (COLOR , FORMA, CARACTERISTICAS)
	fotos                	MATRIZ CON FOTOS DEL ARTICULO
	id_vet               	ID DE LA VETERINARIA QUE LO OFRECE
	precio               	PRECIO DE VENTA AL PUBLICO
	stock                	STOCK ACTUAL DEL ARTICULO (PUEDE SER UN NUMERO NEGATIVO)
	ptoped               	PUNTO DE PEDIDO : ALCANZADO ESTE STOCK SE AVISA DE PEDIDO A PROVEEDOR
	ptovta                	PUNTO DE VENTA : ALCANZADO ESTE PUNTO SE AVISA A LA VETERINARIA
	overstock             	CAMPO QUE SI ESTA EN "O" NOCONTROLA STOCK PERO DEDUCE SIN IMPORTAR 
							SI QUEDA EN NEGATIVO, SI ESTA EN "S" NO PERMITE VENTAS CON STOCK ACTUAL
							MENOR O IGUAL A CERO 
	evento               	CAMPO DE CONSULTA PARA CASOS EN QU EEL ARTICULO CORRESPONDA A UN PAGO
							DE SEGURO MEDICO O COBERTURA DE SERVICIOS
	falta                	FECHA DE ALTA DEL ARTICULO
	halta                	HORA DE ALTA DEL ARTICULO
	fmodif               	FECHA DE LA ULTIMA MODIFICACION SOBRE ALGUNO DE LOS CAMPOS
	hmodif               	HORA DE LA ULTIMA MODIFICACION SOBRE ALGUNO DE LOS CAMPOS
	id_operador          	ID DEL OPERADOR QU ELO CARGA / LO MODIFICA
	estado               
 
 
 */
 
  
 CREATE  TABLE pfvet_articulos ( 
	id                   integer  NOT NULL  ,
	nombre               char(65)  NOT NULL  ,
	rubro                integer  NOT NULL  ,
	descripcion          text  NOT NULL  ,
	fotos                text    ,
	id_vet               integer  NOT NULL  ,
	precio               decimal  NOT NULL  ,
	stock                integer  NOT NULL  ,
	ptoped                integer  NOT NULL  ,
	ptovta                integer  NOT NULL  ,
	overstock             char(1)  NOT NULL  ,
	evento               char(25)    ,
	falta                date  NOT NULL  ,
	halta                time  NOT NULL  ,
	fmodif               date  NOT NULL  ,
	hmodif               time  NOT NULL  ,
	id_operador          integer  NOT NULL  ,
	estado               char(20)    ,
	CONSTRAINT pk_pfvet_articulos PRIMARY KEY ( id )
 );



/* TABLA PRINCIPAL DE PROFESIONALES VETERINARIOS SUSCRIPTOS
-----------------------------------------------------------
	id                   
	nombre              NOMBRE DEL PROFESIONAL
	nota                NOTA DESCRIPTIVA DE MUESTRA SOBRE  LO QUE SE ESPECIALIZA 
	telefono            TELEFONO PARA LA URGENCIA
	email              	EMAIL REFERENCIAL   
	falta               FECHA DE ALTA
	halta      			HORA DE ALTA 
*/


CREATE  TABLE pfvet_veterinarios ( 
	id                   integer  NOT NULL  ,
	nombre               char(65)  NOT NULL  ,
	nota                 text    ,
	telefono             char(55)    ,
	email                char(80)    ,
	falta                date    ,
	halta                time    ,
	CONSTRAINT pk_pfvet_veterinarios PRIMARY KEY ( id )
 );
 
 
 
 /* TABLA PRINCIPAL DE VETERINARIAS (NEGOCIOS) AFILIADAS
 --------------------------------------------------------
	id                   
	razon               NOMBRE DE LA VETERINARIA (NEGOCIO)
	responsable         NOMBRE DEL CONTACTO RESPONSABLE (PUEDE SER DUEÑO/A EMPLEADO/A ENCARGADO/A) 
	provincia           PROVINCIA 
	localidad           LOCALIDAD 
	direccion           DIRECCION 
	telefono            TELEFONO
	facebook            FACEBOOK 
	instagram           INSTAGRAM 
	descripcion         DESCRIPCION GENERAL DE LA VETERINARIA 
	fotos               FOTOS DEL LOCAL 
	falta               FECHA DE ALTA 
	halta               HORA DE ALTA 
	estado              ESTADO  (ACTIVA VISIBLE/ACTIVA NO VISIBLE/ INHABILITADA) 
	usuario             USUARIO LOGIN 
	password            PASSWORD LOGIN 
	email               EMAIL 
 */
 
 
 
 CREATE  TABLE pfvet_veterinarias ( 
	id                   integer  NOT NULL  ,
	razon                char(65)  NOT NULL  ,
	responsable          char(65)  NOT NULL  ,
	provincia            char(65)    ,
	localidad            char(55)  NOT NULL  ,
	direccion            char(95)  NOT NULL  ,
	telefono             char(55)  NOT NULL  ,
	facebook             char(65)    ,
	instagram            char(65)    ,
	descripcion          char(65)    ,
	fotos                text    ,
	falta                date    ,
	halta                time    ,
	estado               char(20)    ,
	usuario              char(25)    ,
	password             char(50) NOT NULL  ,
	email                char(80)  NOT NULL  ,
	CONSTRAINT pk_pfvet_veterinarias PRIMARY KEY ( id )
 );
 
 
 /* TABLA PRINCIPAL DE OPERADORES DASHBOARD
 ------------------------------------------
 	id                  
	nombre             NOMBRE DEL OPERADOR  
	usuario            USUARIO LOGIN  
	password           PASSWORD LOGIN
	email              EMAIL RECUPERACION  
	rol                ROL DENTRO DE LA APP  
	estado             ESTADO (ACTIVO/INHABILITADO)  
	falta              FECHA DE ALTA 
	halta     		   HORA DE ALTA
 */
   
 CREATE  TABLE pfvet_operadores ( 
	id                   integer  NOT NULL  ,
	nombre               char(65)    ,
	usuario              char(25)  NOT NULL  ,
	password           char(50)  NOT NULL  ,
	email                char(80)  NOT NULL  ,
	rol                  text    ,
	estado               char(20)  NOT NULL  ,
	falta                date  NOT NULL  ,
	halta                time    ,
	CONSTRAINT pk_pfvet_operadores PRIMARY KEY ( id )
 );
 
 
 
 /* TABLA PRINCIPAL DE RELACION RUBRO ARTICULOS 
 ----------------------------------------------
 	id                   
	descripcion          DESCRIPCION DEL RUBRO
	foto                 FOTOS IDENTIFICATORIAS
	estado               ESTADO (ACTIVO / INHABILITADO)

 */
   
 CREATE  TABLE pfvet_rubros ( 
	id                   integer  NOT NULL  ,
	descripcion          char(65)  NOT NULL  ,
	foto                 char(165)  NOT NULL  ,
	estado               char(20)    ,
	CONSTRAINT pk_pfvet_rubros PRIMARY KEY ( id )
 );
 
 
 /* TABLA DE CARRITO DE COMPRA PERSISTENTE 
 -----------------------------------------
 
 	id                   
	id_cliente  		ID DEL CLIENTE QUE SELECCIONA EL ARTICULO        
	id_articulo         ID DEL ARTICULO SELECCIONADO
	cantidad			CANTIDAD SELECCIONADA 
	comfav              MARCADO COMO "COMPRA" C , O "FAVORITO" F 
	falta               FECHA DE ALTA
	halta               HORA DE ALTA
	fvto   				FECHA DE VENCIMIENTO DE ESTE REGISTRO 
 
 */
 
 CREATE  TABLE pfvet_carritos ( 
	id                   integer  NOT NULL  ,
	id_cliente           integer  NOT NULL  ,
	id_articulo          integer  NOT NULL  ,
	cantidad			 integer  NOT NULL  ,
	comfav               char(1)    ,
	falta                date    ,
	halta                time    ,
	fvto                 date    ,
	CONSTRAINT pk_pfvet_carritos PRIMARY KEY ( id )
 );
 
 
 /*TABLA PRINCIPAL DE HISTORICA CLINICA
 --------------------------------------
 	id  
	id_mascota   	 IDENTIFICADOR DE LA MASCOTA INTERVENIDA
	id_veterinario   IDENTIFICADOR DEL PROFESIONAL INTERVINIENTE
	nomenclador      CODIGO DE INTERVENCION
	descripcion      DESCRIPCION DE TODO LO REALIZADO 
	falta            FECHA DE ALTA DE ESTE REGISTRO
	faccion          FECHA EN LA QUE SE INTERVINO A LA MASCOTA
	halta            HORA DE ALTA DE ESTE REGISTRO
	adjuntos         ARCHIVOS ADJUNTOS
 
 
 */
  
 CREATE  TABLE pfvet_historia_clinicas ( 
	id                   integer  NOT NULL  ,
	id_mascota           integer  NOT NULL  ,
	id_veterinario       integer    ,
	nomenclador          char(65)  NOT NULL  ,
	descripcion          text  NOT NULL  ,
	falta                date    ,
	faccion              date  NOT NULL  ,
	halta                time    ,
	adjuntos             text    ,
	CONSTRAINT pk_pfvet_historia_clinicas PRIMARY KEY ( id )
 );
 
 /* TABLA PRINCIPAL CON HORARIOS DE ATENCION DE URGENCIA DE VETERINARIOS AFILIADOS
 ---------------------------------------------------------------------------------
	id 
	id_veterinario  IDENTIFICADOR DEL PROFESIONAL DE GUARDIA
	fechaguardia    FECHA DE DISPONIBILIDAD
	descripcion     DETALLE DE HORARIOS DE ATENCION Y FORMA
	falta           FECHA DE ALTA DE ESTE REGISTRO
	halta           HORA DE ALTA DE ESTE REGISTRO
 
 
 */
   
 CREATE  TABLE pfvet_horarios ( 
	id                   integer  NOT NULL  ,
	id_veterinario       integer    ,
	fechaguardia         date  NOT NULL  ,
	descripcion          text  NOT NULL  ,
	falta                date    ,
	halta                time    ,
	CONSTRAINT pk_pfvet_horarios PRIMARY KEY ( id )
 );
 
 
 
 /* TABLA PRINCIPLA DE REGISTRO DE OPERACIONES DEL ECOMMERCE
 -----------------------------------------------------------
 	id             
	id_cliente         ID DEL CLIENTE QUE REALIZA LA COMPRA (BUYER)
	id_articulo        ID DEL ARTICULO COMPRADO
	tipo		       TIPO DE OPERACION  (COMPRA / REVERSO / ANULACION / ESPECIAL)
	detalle		       DETALLE EXTRA DE LA OPERACION
	fecha              FECHA EN QUE SE REALIZA LA OPERACION
	comprobante        NRO. DE TICKET GENERADO POR LA PASARELA DE PAGO
	importe			   IMPORTE DE LA OPERACION
	mediopago	       MEDIO D EPAGO UTILIZADO  (CREDITO VISA / DEBITO MASTER / ETC)
	cuota		       REFERENCIA SI HUBIERA DETALLE DE CUOTA
	decuota			   REFERENCIA DE CANTIDAD DE CUOTAS 
	falta              FECHA DE ALTA DE ESTE REGISTRO
	halta              HORA DE ALTA DE ESTE REGISTRO
 */
  
 CREATE  TABLE pfvet_commerces ( 
	id                   integer  NOT NULL  ,
	id_cliente           integer  NOT NULL  ,
	id_articulo          integer  NOT NULL  ,
	tipo		         char(25)  NOT NULL  ,
	detalle		          text  NOT NULL  ,
	fecha                date  NOT NULL  ,
	comprobante          integer  NOT NULL  ,
	importe				 decimal  NOT NULL  ,	
	mediopago	         char(65)  NOT NULL  ,
	cuota		       	integer  NOT NULL  ,
	decuota				 integer  NOT NULL  ,
	falta                date    ,
	halta                time    ,
	CONSTRAINT pk_pfvet_commerces PRIMARY KEY ( id )
 );
 
 
 /* TABLA PRINCIPAL DE REVIEWS
 -----------------------------
 	id                  
	id_cliente     ID DEL CLIENTE QUE REALIZA EL COMENTARIO
	destino        DESTINO DEL COMENTARIO (A VETERINARIAS / A ARTICULOS / A PROFESIONALES)
	titulo         TITULO DEL COMENTARIO
	nota		   TEXTO DEL COMENTARIO
	calificacion   CALIFICACION DE LA SITUACION DEL 1 AL  10 SIENDO 1 PESIMA 10 EXCELENTE
	estado		   ESTADO DEL POSTEO (ACTIVO / CENSURADO)
	falta          FECHA DE ALTA DE ESTE REGISTRO
	halta          HORA DE ALTA DE ESTE REGISTRO 
 */
  
 CREATE  TABLE pfvet_reviews ( 
	id                   integer  NOT NULL  ,
	id_cliente           integer  NOT NULL  ,
	destino           char(25)  NOT NULL  ,
	titulo          char(85)  NOT NULL  ,
	nota			 text  NOT NULL  ,
	calificacion	integer  NOT NULL  ,
	estado			char(25)  NOT NULL  ,
	falta                date    ,
	halta                time    ,
	CONSTRAINT pk_pfvet_reviews PRIMARY KEY ( id )
 );
