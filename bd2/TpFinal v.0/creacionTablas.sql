
CREATE TABLE TIPOLIBRO (TIPO char(2) not null PRIMARY KEY,
			DESCTIPO char(40))


CREATE TABLE LIBRO (NRO_LIBRO int not null PRIMARY KEY, 
                     TITULO char(40),
                     AUTOR char(30),
                     TIPO char(2) FOREIGN KEY REFERENCES TIPOLIBRO (TIPO),
                     PRECIO_ORI smallmoney,
                     PRECIO_ACT smallmoney, 
                     EDICION smallint,
	       ESTADO char(1) NOT NULL DEFAULT('D')
	       	    
	 
	 )
  

  CREATE TABLE LECTOR (NRO_LECTOR int not null PRIMARY KEY , 
                     NOMBRE char(22),
                     DIRECCION char(30),
                     TRABAJO char(10),
                     SALARIO smallmoney,
					 ESTADO char(1))
					 
					 
  CREATE TABLE COPIAS (
 	 NRO_LIBRO int not null,
     NRO_COPIA smallint not null ,
	 ESTADO char(1) NOT NULL DEFAULT ('D')
	 
	 CONSTRAINT estados_validos
	 CHECK(ESTADO ='P' OR ESTADO ='D' OR ESTADO ='N')
	 	 
  
  CONSTRAINT[PK_Copias] PRIMARY KEY CLUSTERED
	(
		[NRO_LIBRO], 
		[NRO_COPIA]		
	) ON [PRIMARY],
	CONSTRAINT[NRO_LIBRO] FOREIGN KEY
	(
		[NRO_LIBRO]		
	) REFERENCES [LIBRO](
		[NRO_LIBRO]
	))
  
  
  CREATE TABLE PRESTAMO (NRO_LECTOR int FOREIGN KEY REFERENCES LECTOR (NRO_LECTOR) ,
                       NRO_LIBRO int FOREIGN KEY REFERENCES LIBRO (NRO_LIBRO)  ,
                       NRO_COPIA smallint not null ,
                       F_PREST datetime not null,
                       F_DEVOL datetime ,
						primary key (NRO_LIBRO, NRO_COPIA,NRO_LECTOR,F_PREST)
                       )
                       