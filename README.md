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

La estructura de JSON consisten en guardar entre llaves, el nombre del atributo y su valor. Mientras que en XML, su estructura se basa en tags, que deben ser cerrados, una vez abiertos para ser válido. 

Ejemplo de estructura de JSON:

```
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    }
  ]
}
```
Ejemplo de estructura de XML:
```
<?xml version="1.0" encoding="UTF-8"?>
<message>
    <warning>
         Hello World
    </warning>
</message>
```

###### 9.	Explicar brevemente el estándar SOAP
Es un protocolo estándar que define como dos procesos/sistemas pueden comunicarse, intercambiando datos a través de protocolos HTTP, SMTP, TCP, entre otros, expresados como XML.

Contiene 4 aspectos:
- Describe como organizar la información en un documento XML, definiendo un formato.
- Describe como transferir el mensaje SOAP, utilizando distintos protocolos.
- Define mecanismos de codificación para declarar el tipo de datos utilizado en la aplicación.
- Define un contrato de grupo sobre cómo expresar la llamada y respuesta del proceso remoto e intercambiar mensajes SOAP.

###### 10.	Explicar brevemente el estándar REST Full
Es un estándar que implementa el protocolo HTTP y que sigue los principios de la arquitectura REST.

Principios REST:

- Dar a todas las cosas un identificador: Los recursos claves deben ser identificados con un ID único y global. En la Web, existe el concepto de URI(identificador de recursos uniforme) para identificarlos.
- Vincular las cosas: Utilizar hipervínculos para hacer referencias a recursos claves siempre que sea posible.
- Usar métodos estándar: Utilizar los verbos HTTP para que cualquier componente que comprende el protocolo HTTP interactue con la aplicación.
- Recursos con múltiples representaciones: Permitir que un mismo recurso pueda consumirse en distintos formatos para ser consumidos por cualquier aplicación o navegador web.
- Comunicar sin estado: El servidor no debería guardar el estado de la comunicación con el cliente, sino que transformarlo en un recurso y que sea amntenido en el cliente.

Se habla de servicios web RESTFul si cumplen con estos principios mencionados anteriormente.

###### 11.	¿Qué son los headers en un request? ¿Para qué se utiliza el key Content-type en un header?
Los headers en un request son parámetros que proporcionan información acerca del recurso a buscar o sobre el cliente que realiza la consulta, para que el servidor conociendo esta información pueda adaptar su respuesta al cliente. Puede haber headers obligatorios que un servidor puede esperar, como el de Authorization que si no lo mandas el servidor puede devolverte un 401.

Content-type se utiliza para saber el formato que tiene el contenido(media type) del recurso. En requests, el cliente indica al servidor que formato tiene el contenido del recurso que está enviando o el formato que debe tener el contenido en la respuesta. Y en los responses, un Content-Type header indica al cliente, el media type que es devuelto en el contenido de la respuesta.
