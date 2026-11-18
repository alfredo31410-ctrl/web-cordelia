# Cordelia Entrenamiento

Landing estática de Cordelia Entrenamiento, diseñada en blanco y negro a partir de su manual de identidad visual. Presenta clases para formar asesores en pensiones. No requiere servidor, base de datos ni variables de entorno.

## Publicar en Vercel

1. Sube este directorio a un repositorio de GitHub (privado o público).
2. En [Vercel](https://vercel.com/new), selecciona **Import Git Repository** y elige el repositorio.
3. Vercel detectará la configuración incluida. No se necesita comando de build: el directorio publicado es `dist`.
4. Haz clic en **Deploy**. Vercel asignará una URL temporal `*.vercel.app`.

## Usar un dominio propio

Después del primer despliegue entra en **Project > Settings > Domains**.

- Para comprar un dominio en Vercel, escribe el nombre deseado y selecciona la opción de compra si está disponible. La compra y el pago deben confirmarse con la cuenta titular de Cordelia.
- Si el dominio se adquiere en otro proveedor, agrégalo en esta misma pantalla y copia los registros DNS que Vercel indique. Para un subdominio normalmente será un CNAME; para el dominio raíz puede requerirse un registro A.
- Cuando Vercel muestre el dominio como **Valid Configuration**, selecciónalo como dominio de producción.

Cada `git push` a la rama de producción desplegará automáticamente la nueva versión. Las demás ramas reciben enlaces de vista previa.

## Landings dentro del mismo dominio

Las campañas pueden vivir bajo el mismo dominio sin crear nuevos proyectos en Vercel. Cada landing debe tener su propio directorio dentro de `dist/landings/`:

```text
dist/
├─ index.html                         # cordeliacapacitacion.com
└─ landings/
   ├─ curso-ley-73/
   │  ├─ index.html                   # /cordelia-landings/curso-ley-73
   │  └─ assets/
   └─ taller-modalidad-40/
      ├─ index.html                   # /cordelia-landings/taller-modalidad-40
      └─ assets/
```

Para crear una nueva landing, usa un nombre corto en minúsculas y con guiones; por ejemplo, `curso-ley-73`. Coloca el HTML y sus recursos dentro de esa carpeta. Al hacer push, el proyecto de landings se actualizará y la web principal la mostrará automáticamente bajo el dominio de Cordelia:

```text
https://www.cordeliacapacitacion.com/cordelia-landings/curso-ley-73
```

Cada landing puede enlazar sus archivos propios con rutas relativas, por ejemplo `./assets/imagen.jpg`, para evitar conflictos con las demás campañas.

La portada y las campañas son proyectos Vercel distintos. La portada conserva el único dominio público, `www.cordeliacapacitacion.com`; sus rutas `/cordelia-landings/*` se reescriben internamente hacia `cordelia-landings.vercel.app`.

## Desarrollo local

Con Node instalado, ejecuta lo siguiente desde la raíz del proyecto:

```powershell
node scripts/serve.mjs
```

Después abre `http://localhost:5500`. Detén el servidor con `Ctrl + C`.
