# Bitácora de Ediciones - Equipo IRML-CER3D

## Resumen de cambios realizados

### 1. Actualización de Miembros del Equipo (`data/team.js`)
Se reemplazaron los perfiles genéricos ("Researcher 2", "Researcher 3") por información real.

**Grecia Borges García (ID: 2)**
- **Nombre:** Actualizado de "Researcher 2" a "Grecia Borges García".
- **Iniciales:** Actualizadas de "R2" a "GBG".
- **Departamento:** Corregido de "Chemistry" a "Biology" para coincidir con su formación.
- **Biografía:** Se añadió la descripción detallada en español e inglés sobre su bachillerato en Biología en UPR Cayey y su interés en machine learning/odontología.
- **Imagen:** Se vinculó `assets/grecia-prof-pic.jpeg`.

**Genesis M. Figueroa Padilla (ID: 3)**
- **Nombre:** Actualizado de "Researcher 3" a "Genesis M. Figueroa Padilla".
- **Iniciales:** Actualizadas de "R3" a "GMFP".
- **Biografía:** Se añadió la descripción detallada en español e inglés sobre su bachillerato en Química y su interés en bioquímica y farmacia.
- **Imagen:** Se vinculó `assets/genesis-prof-pic.jpeg`.

### 2. Limpieza de la Interfaz ("Meet the Team")
- **Eliminación de Roles:** Se eliminó la visualización del campo `role` en la sección del equipo para simplificar el diseño.
- **Modificación en `main.js`:** Se implementó una validación defensiva en la función `renderTeam()`. Ahora el código verifica si el objeto `member.role` existe antes de intentar renderizarlo, evitando errores de "undefined" si un miembro no tiene rol asignado.

### 3. Notas Técnicas para Futuras Ediciones
- **Estructura de Datos:** Cada miembro debe seguir el esquema: `id`, `name`, `institution`, `department` (con subcampos `en` y `es`), `bio` (con subcampos `en` y `es`), `initials`, `color`, `image`, `github`, `email`, y `isPI`.
- **Método de Edición:** Para cambios masivos o correcciones de sintaxis, se recomienda el uso de `write_file` con el objeto completo para evitar errores de caracteres escapados (como los ocurridos durante el uso de `patch`).
- **Traducciones:** Siempre incluir las versiones `en` y `es` en los campos de texto (`name`, `role`, `department`, `bio`) para mantener la consistencia del sitio multilingüe.

---
*Documento generado para seguimiento de proyecto.*