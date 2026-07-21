# Actividad 3 - Caso práctico (Capturas de Terminal)

### a. Acceda a una terminal.
*(Apertura de la terminal en el sistema operativo Linux)*

### b. Compruebe en qué ruta nos encontramos al abrir la terminal.
```console
usuario@linux:~$ pwd
/home/usuario
```

### c. Cree una nueva carpeta llamada "www".
```console
usuario@linux:~$ mkdir www
```

### d. Dentro de la carpeta "www" cree las subcarpetas "img", "js", "css" y "datos".
```console
usuario@linux:~$ cd www
usuario@linux:~/www$ mkdir img js css datos
```

### e. Mostrar que se han creado listando el contenido de la carpeta www.
```console
usuario@linux:~/www$ ls -l
total 16
drwxr-xr-x 2 usuario usuario 4096 feb 27 10:00 css
drwxr-xr-x 2 usuario usuario 4096 feb 27 10:00 datos
drwxr-xr-x 2 usuario usuario 4096 feb 27 10:00 img
drwxr-xr-x 2 usuario usuario 4096 feb 27 10:00 js
```

### f. Copie la carpeta "img" a la carpeta "datos" y muestre el resultado.
```console
usuario@linux:~/www$ cp -r img datos/
usuario@linux:~/www$ ls -l datos/
total 4
drwxr-xr-x 2 usuario usuario 4096 feb 27 10:01 img
```

### g. Cambie el nombre a la carpeta "datos" por "datosmalos" y muestre el resultado.
```console
usuario@linux:~/www$ mv datos datosmalos
usuario@linux:~/www$ ls -l
total 16
drwxr-xr-x 2 usuario usuario 4096 feb 27 10:00 css
drwxr-xr-x 3 usuario usuario 4096 feb 27 10:01 datosmalos
drwxr-xr-x 2 usuario usuario 4096 feb 27 10:00 img
drwxr-xr-x 2 usuario usuario 4096 feb 27 10:00 js
```

### h. Muestre los permisos de la carpeta "datosmalos".
```console
usuario@linux:~/www$ ls -ld datosmalos
drwxr-xr-x 3 usuario usuario 4096 feb 27 10:01 datosmalos
```

### i. Modifique los permisos de "datosmalos" de forma que sólo el propietario del archivo tenga permisos de escritura y no los tengan los del grupo y los otros.
```console
usuario@linux:~/www$ chmod go-w datosmalos
usuario@linux:~/www$ ls -ld datosmalos
drwxr-xr-x 3 usuario usuario 4096 feb 27 10:01 datosmalos
```

### j. Borre definitivamente la carpeta "datosmalos".
```console
usuario@linux:~/www$ rm -rf datosmalos
usuario@linux:~/www$ ls -l
total 12
drwxr-xr-x 2 usuario usuario 4096 feb 27 10:00 css
drwxr-xr-x 2 usuario usuario 4096 feb 27 10:00 img
drwxr-xr-x 2 usuario usuario 4096 feb 27 10:00 js
```
