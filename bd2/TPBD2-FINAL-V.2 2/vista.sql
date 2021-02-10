---Vista para buscar inconsitencisas: 
--si una copia aparece como “D” pero esa misma copia esta 
--en prestamo sin con fecha de devolución (es decir, esta prestada). 

CREATE VIEW v_copias_prestamos_inconsistencia as 
select c.NRO_COPIA , c.NRO_LIBRO, c.ESTADO , p.F_PREST , p.F_DEVOL 
from COPIAS c 
inner join PRESTAMO p ON P.NRO_COPIA = C.NRO_COPIA 
					     AND P.NRO_libro = C.NRO_LIBRO 
WHERE P.F_DEVOL IS NULL
AND c.ESTADO ='D'

--select * from v_copias_prestamos_inconsistencia
