# Practica Final

### Elaborado por: 
Sylvia Alejandra López Vargas.
Master: Analítica del Negocio y Grandes Volúmenes de Datos.
Arquitecturas y tecnologías avanzadas de Big Data I.
Desarrollo de Visualización de Datos.
Universidad Alcala de Henares.


## Development server.

Este proyecto esta generado con: [Node JS](https://nodejs.org/) version v8.11.1, Express JS, MySql y Bootstrap.

### Instalar Base de datos.

####Instalar mysql:

	Opción 1: Descargar gratis apache [XAMPP](https://www.apachefriends.org/es/index.html) cualquiera de estas versiones 5.6.36, 7.0.30, 7.1.17 & 7.2.5
	Levantar los servicios en el panel administrador MySql.


	Opción 2: Instalar Mysql Versión anterior a 5.7:
	-- MySQL dump 10.13  Distrib 5.6.17
	-- Server version 5.5-10.1.30-MariaDB

	Opción 3: Instalar Mysql Versión posterior a 5.6:
	--Deshabilitar ONLY_FULL_GROUP_BY puede desactivarlo quitándolo de su sql_mode. 

 		SET @@GLOBAL.sql_mode = 'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION'

	No es necesario reiniciar, pero sí una reconexión


	-- Cambio permanente:
	Si desea deshabilitarlo permanentemente, agregue / edite lo siguiente en su archivo my.cnf:

 		sql_mode = "STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION"

	Para este cambio, se requiere un reinicio del servicio:

 	$ mysql service restart

	Mas información: https://dev.mysql.com/doc/refman/8.0/en/group-by-handling.html

####Configuración:

Host: LocalHost.
usuario: root.
Sin password.

Ejecutar el script de la base de datos dbPracticafinal.sql.


## Running 

Ejecute node index.js para el servidor de desarrollo.
Navegue a http://localhost:3000.
La aplicación cargará la dashboard. 