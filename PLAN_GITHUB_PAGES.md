# Plan de Despliegue: Subir y Publicar IRML-CER3D en GitHub Pages

Este documento contiene la guía paso a paso para configurar Git con la cuenta **yadiel.cruz3@upr.edu**, subir el código al repositorio en GitHub y publicarlo en vivo en la web mediante **GitHub Pages**.

---

## 📌 Resumen Previo del Proyecto
* **Ubicación local:** `/Users/ricardo.rivera27/IRML`
* **Tipo de proyecto:** Sitio web estático (HTML5, CSS3, JavaScript Vanilla).
* **Compatibilidad:** 100% compatible con GitHub Pages en modo `/ (root)` sin necesidad de proceso de compilación (`build` ni `npm`).
* **Autor:** Yadiel Cruz Ortiz (`yadiel.cruz3@upr.edu`).

---

## 🚀 Paso 1: Configurar Git e Inicializar el Repositorio Local

Abre la terminal en tu Mac y asegúrate de estar dentro del directorio del proyecto:

```bash
cd /Users/ricardo.rivera27/IRML
```

### 1.1 Crear el archivo `.gitignore`
Evita subir archivos basura del sistema y archivos muy pesados (como presentaciones PPTX):

```bash
# Ignorar archivos del sistema operativo
echo ".DS_Store" > .gitignore

# (Opcional recomendado) Si no deseas subir la presentación PPTX de 16MB al repositorio:
echo "Plan de trabajo 2026-2027_Website.pptx" >> .gitignore
```

### 1.2 Inicializar el repositorio y configurar el usuario de Yadiel
Configuramos los datos de autor a nivel **local** (solo para este proyecto, sin alterar otras configuraciones de Git globales de tu Mac):

```bash
git init
git config user.name "Yadiel Cruz Ortiz"
git config user.email "yadiel.cruz3@upr.edu"
```

### 1.3 Crear el primer commit
Agregamos todos los archivos del proyecto y preparamos la rama principal `main`:

```bash
git add .
git commit -m "Initial commit - IRML Research Portal"
git branch -M main
```

---

## 🔑 Paso 2: Crear el Repositorio en GitHub y Generar el Token (PAT)

Inicia sesión en GitHub en tu navegador con la cuenta de Yadiel (`yadiel.cruz3@upr.edu`).

### 2.1 Crear el repositorio en GitHub
1. Entra a: **[https://github.com/new](https://github.com/new)**
2. **Repository name:** `IRML` (o `irml-cer3d`).
3. **Visibility:** Selecciona **Public** *(en cuentas personales gratuitas, GitHub Pages solo funciona gratis en repositorios públicos)*.
4. **IMPORTANTE:** Deja desmarcadas las casillas:
   * ❌ Add a README file
   * ❌ Add .gitignore
   * ❌ Choose a license  
   *(Ya tenemos todos estos archivos listos localmente)*.
5. Haz clic en el botón verde **Create repository**.

### 2.2 Generar un Personal Access Token (PAT)
*GitHub ya no permite usar la contraseña tradicional de la cuenta para hacer `git push` desde la terminal; requiere un Token de acceso personal:*

1. En GitHub, haz clic en tu foto de perfil (arriba a la derecha) y entra a **Settings**.
2. En la columna izquierda, baja hasta el final y haz clic en **Developer Settings**.
3. Selecciona **Personal access tokens** → **Tokens (classic)**.
4. Haz clic en **Generate new token** → **Generate new token (classic)**.
5. Configura el token:
   * **Note:** `MacBook IRML Deploy`
   * **Expiration:** 90 days (o según tu preferencia).
   * **Select scopes:** Marca la casilla principal **`repo`** (esto da permisos completos de lectura/escritura a tus repositorios).
6. Haz clic en **Generate token**.
7. **⚠️ COPIA EL TOKEN AHORA MISMO:** Guárdalo en un bloc de notas seguro, ya que GitHub no te lo volverá a mostrar.

---

## 📤 Paso 3: Conectar la Terminal con GitHub y Subir el Código

Regresa a la terminal en tu Mac y ejecuta los siguientes comandos (sustituyendo `NOMBRE_USUARIO` y `NOMBRE_REPO`):

```bash
# 1. Vincular el repositorio remoto (reemplaza con tu usuario y repo de GitHub)
git remote add origin https://github.com/NOMBRE_USUARIO/NOMBRE_REPO.git

# 2. Subir los archivos a la rama main
git push -u origin main
```

### ¿Qué te pedirá la terminal?
* **Username:** Ingresa el nombre de usuario de GitHub de Yadiel (o el correo `yadiel.cruz3@upr.edu`).
* **Password:** **Pega el Personal Access Token (PAT)** que generaste en el Paso 2.  
  *(Nota: en macOS la terminal oculta los caracteres al pegar la contraseña por seguridad; simplemente pégalo con `Cmd + V` y presiona `Enter`)*.

---

## 🌐 Paso 4: Activar y Publicar la Página en GitHub Pages

Una vez subido el código exitosamente:

1. Entra a tu repositorio en GitHub desde el navegador: `https://github.com/NOMBRE_USUARIO/NOMBRE_REPO`.
2. Haz clic en la pestaña superior **Settings** (al lado de Insights).
3. En el menú lateral izquierdo, en la sección **Code and automation**, haz clic en **Pages**.
4. En **Build and deployment**:
   * **Source:** Selecciona `Deploy from a branch`.
   * **Branch:** Selecciona `main` y en la carpeta deja `/ (root)`.
   * Haz clic en **Save**.
5. Espera de **1 a 2 minutos**.
6. Recarga la página. Aparecerá un recuadro verde que dice:
   > **"Your site is live at https://NOMBRE_USUARIO.github.io/NOMBRE_REPO/"**

Al entrar a esa URL, tu página ya estará publicada y accesible para todo el mundo.

---

## 🔄 ¿Cómo subir cambios futuros a la página?

Cada vez que hagas cambios en el código (`index.html`, `style.css`, imágenes, datos en `data/`, etc.), solo ejecuta estos 3 comandos en la terminal:

```bash
git add .
git commit -m "Descripción de los cambios realizados"
git push
```

GitHub Pages detectará el nuevo commit y actualizará la página web automáticamente en 1 o 2 minutos.

