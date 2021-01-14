# Virtual-Dreams-TP

## Ejecución de scripts
Antes de la ejecución de cualquiera de los script, debe realizar: 
**npm i**

Para poder instalar todas las dependecias que se encuentran en el package.json 

###### Ejercicio 4
Escribir en la linea de comandos:
**node mostrarPersonas.js**

###### Ejercicio 5 y 6
Escribir en la linea de comandos:
**node app**

El puerto por defecto es el puerto 3000. Se accede a traves de **http://localhost:3000/**.

## Respuestas ejercicio 2
###### 1.	¿Qué es un servidor HTTP?
Es un servidor que contiene software que maneja los protocolos HTTP y entiende URLs, recibiendo solicitudes por parte de los clientes y devolviendo una respuesta a la solicitud.

###### 2.	¿Qué son los verbos HTTP? Mencionar los más conocidos
HTTP define un conjunto de métodos de petición para indicar la acción que se desea realizar para un recurso determinado.
Los más populares son: GET, POST, PUT, DELETE.

###### 3.	¿Qué es un request y un response en una comunicación HTTP? ¿Qué son los headers?
La solicitud de un determinado recurso, se lo llamada Request. Mientras que la respuesta de la request hecha, se lo llama Response.
El header es informacion adicional que puede ser pasada en los request y response 

###### 4.	¿Qué es un queryString? (En el contexto de una url)
Es una forma de pasar parametros a la base de datos a través de la URL.

###### 5.	¿Qué es el responseCode? ¿Qué significado tiene los posibles valores devueltos?
Son los codigo que devuelve una peticion para determinar el estado del procesamiento de esa consulta, obteniendo mas informacion del resultado de la peticion hecha.
Los códigos de estado de respuesta HTTP indican si se ha completado satisfactoriamente una solicitud HTTP específica o indican que tipo de error pudo ocurrir.

Lista de rangos de estado y su siginificado:

	Respuestas informativas (100–199),
	Respuestas satisfactorias (200–299),
	Redirecciones (300–399),
	Errores de los clientes (400–499),
	y errores de los servidores (500–599).

###### 6.	¿Cómo se envía data en un Get y cómo en un POST?
En ambos casos se escribe el verbo HTTP que se va a usar seguido por la URL y por último el protocolo HTTP que va a ser usado.

###### 7.	¿Qué verbo http utiliza el navegador cuando accedemos a una página?
Se utiliza el verbo GET para obtener la información del documento que representa a la página.

###### 8.	Explicar brevemente qué son las estructuras de datos JSON y XML dando ejemplo de estructuras posibles.
La estructura de datos JSON es un documento de texto que representa un objeto. XML en cambio utiliza tags como en HTML, pero sin tags definidos, siendo definidos por el desarrollador.

La estructura de JSON consisten en guardar entre llaves, el nombre del atributo y su valor. Mientras que en XML, su estructura se basa en tags, que deben ser cerrados, una vez abiertos para ser valido. 

###### 9.	Explicar brevemente el estándar SOAP
Es un protocolo de trasmision de información, que se basa en utilizar XML para el envio de datos.

###### 10.	Explicar brevemente el estándar REST Full
Servicio que funciona como un estandar pero que se centra en el uso de los verbos de HTTP como protocolo de comunicación, en la devolución de un codigo de estado y en definir parámetros de consulta para que el servicio sepa que debe consultar.

###### 11.	¿Qué son los headers en un request? ¿Para qué se utiliza el key Content-type en un header?
Contienen mas informacion sobre el recurso o sobre el cliente que realiza la solucitud.
Content-Key se utiliza para saber el tipo de archivo que esta devolviendo
