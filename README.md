# ux-analitica-server
Servidor para la recolección de datos de usabilidad

## Prerequisitos
[Node.js](https://nodejs.org) versión 14.15.5.

## Instalación de dependencias y ejecución
Instalar dependencias mediante el comando `npm install`.

### dotenv
Para la configuración segura de la conexión con la base de datos, se utiliza [dotenv](https://github.com/motdotla/dotenv#readme). Es por tanto necesario crear un fichero `.env` en la raíz del proyecto con la cadena de conexión a la base de datos:

```
DB_CONN=<cadena de conexión a la base de datos>
```

### Ejecución en desarrollo
Ejecutar el comando `npm start`. Se utiliza [nodemon](https://nodemon.io/) para poder realizar cambios en caliente sin necesidad de reiniciar el servidor manualmente.
