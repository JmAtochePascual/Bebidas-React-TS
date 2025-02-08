# Buscador de Bebidas

Esta aplicación web permite a los usuarios buscar recetas de bebidas utilizando ingredientes y categorías, y guardar sus recetas favoritas. Además, proporciona información detallada sobre las bebidas y permite a los usuarios gestionar su lista de favoritos.

## 🛠️ Tecnologías Utilizadas

- **React**: Framework principal para la construcción de la interfaz de usuario.
- **TypeScript**: Lenguaje de programación que agrega tipado estático a JavaScript.
- **Vite**: Herramienta de compilación que ofrece un entorno de desarrollo más rápido.
- **TailwindCSS**: Framework para los estilos del proyecto.
- **zustand**: Biblioteca para la gestión del estado global de la aplicación.
- **Zod**: Biblioteca para la validación de esquemas y tipos.
- **Axios**: Para realizar solicitudes HTTP a la API de bebidas.
- **ESLint**: Para mantener la calidad y consistencia del código.
- **Git**: Sistema de control de versiones.
- **GitHub Pages**: Para el despliegue de la aplicación.

## 📁 Estructura del Proyecto

- **src/**: Contiene el código fuente de la aplicación.
  - **components/**: Componentes reutilizables que forman la interfaz de usuario.
    - `Header.tsx`: Componente que muestra el encabezado y el formulario de búsqueda.
    - `DrinkCard.tsx`: Componente que representa una tarjeta de bebida.
    - `DrinksList.tsx`: Componente que muestra una lista de bebidas.
    - `Modal.tsx`: Componente que muestra los detalles de una receta en un modal.
    - `Spinner.tsx`: Componente que muestra un indicador de carga.
  - **pages/**: Contiene las páginas de la aplicación.
    - `IndexPage.tsx`: Página principal de la aplicación.
    - `FavoritePage.tsx`: Página que muestra las recetas favoritas del usuario.
  - **types/**: Tipos y interfaces compartidos que definen la estructura de los datos.
    - `index.ts`: Tipos y interfaces utilizados en toda la aplicación.
  - **schemas/**: Define los esquemas de validación utilizando Zod.
    - `index.ts`: Esquemas para validar la estructura de los datos de bebidas y recetas.
  - **data/**: Contiene datos estáticos como los estados iniciales.
    - `initialStates.ts`: Estado inicial para la búsqueda de bebidas.
  - **store/**: Gestiona el estado global de la aplicación utilizando Zustand.
    - `recipeSlice.ts`: Configuración del estado relacionado con las recetas y categorías.
    - `FavoriteSlice.ts`: Configuración del estado para manejar las recetas favoritas.
    - `useAppStore.ts`: Hook para acceder al estado global.
  - **services/**: Contiene los servicios para interactuar con APIs y realizar operaciones.
    - `recipeService.ts`: Servicio para obtener información de bebidas y recetas.
  - `AppRouter.tsx`: Configuración de las rutas de la aplicación.
  - `main.tsx`: Punto de entrada de la aplicación.

## 🚀 Características Principales

- **Búsqueda de Bebidas**: Permite a los usuarios buscar recetas de bebidas ingresando un ingrediente y seleccionando una categoría.
- **Interfaz Responsiva**: Asegura que la aplicación se vea bien en dispositivos de diferentes tamaños.
- **Validación de Datos**: Utiliza Zod para validar la entrada del usuario antes de realizar la búsqueda.
- **Manejo de Estado**: Utiliza Zustand para gestionar el estado de la aplicación de manera eficiente.
- **Favoritos**: Los usuarios pueden agregar o eliminar recetas de su lista de favoritos.
- **Despliegue Automático**: Facilita el acceso a la aplicación en línea a través de GitHub Pages.

## 🛠️ Instalación y Uso

1. Clona el repositorio:

   ```bash
   git clone https://github.com/JMatochePascual/Bebidas-React-TS.git
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre tu navegador en:
   ```bash
   http://localhost:5173
   ```

## 🤝 Contribución

Si deseas contribuir al proyecto, sigue estos pasos:

1. Haz un Fork del repositorio:

   ```bash
   git remote add upstream https://github.com/JMatochePascual/Bebidas-React-TS.git
   ```

2. Crea una nueva rama:

   ```bash
   git checkout -b feature/nueva-caracteristica
   ```

3. Realiza tus cambios y haz commit:

   ```bash
   git add .
   git commit -m "Agrega nueva característica"
   ```

4. Sube los cambios a tu Fork:

   ```bash
   git push origin feature/nueva-caracteristica
   ```

5. Abre un Pull Request desde tu repositorio al repositorio original.

Por favor, antes de realizar cambios importantes:

- Abre un Issue para discutir las modificaciones propuestas.
- Asegúrate de que tu código sigue las convenciones del proyecto.
- Incluye tests si es necesario.
- Actualiza la documentación según corresponda.

## 📝 Licencia

Este proyecto está bajo la licencia [MIT](https://opensource.org/licenses/MIT).

<p style="text-align: center">Hecho con 💚 por JMCode | ©2025 - Transformando ideas en realidad.</p>
