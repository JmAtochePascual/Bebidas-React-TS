# Receta de Bebidas

Esta aplicación web ofrece a los usuarios la posibilidad de explorar recetas de bebidas, proporcionando información detallada sobre los ingredientes, instrucciones y más. Los usuarios pueden buscar recetas específicas por nombre o ingrediente, y visualizar los detalles de cada bebida.

## 🛠️ Tecnologías Utilizadas

- **React**: Framework principal para la construcción de la interfaz de usuario.
- **TypeScript**: Lenguaje de programación que agrega tipado estático a JavaScript.
- **Vite**: Herramienta de compilación que ofrece un entorno de desarrollo más rápido.
- **TailwindCSS**: Framework para los estilos del proyecto.
- **zustand**: Biblioteca para la gestión del estado global de la aplicación.
- **Zod**: Biblioteca para la validación de esquemas y tipos.
- **ESLint**: Para mantener la calidad y consistencia del código.
- **Git**: Sistema de control de versiones.
- **GitHub Pages**: Para el despliegue de la aplicación.

## 📁 Estructura del Proyecto

- **src/**: Contiene el código fuente de la aplicación.
  - **components/**: Componentes reutilizables que forman la interfaz de usuario.
    - `DrinkCard.tsx`: Componente que muestra una tarjeta de bebida con sus detalles.
    - `Modal.tsx`: Componente que muestra un modal con los detalles de una bebida.
    - `Header.tsx`: Componente que muestra el encabezado de la aplicación.
    - `DrinksList.tsx`: Componente que muestra una lista de tarjetas de bebida.
  - **types/**: Tipos y interfaces compartidos que definen la estructura de los datos.
    - `index.ts`: Tipos y interfaces utilizados en toda la aplicación.
  - **schemas/**: Define los esquemas de validación utilizando Zod.
    - `index.ts`: Esquema para validar la estructura de los datos de bebidas.
  - **data/**: Contiene datos estáticos como las bebidas disponibles.
    - `initialStates.ts`: Estado inicial para la selección de bebidas.
  - **store/**: Gestiona el estado global de la aplicación utilizando Zustand.
    - `recipeSlice.ts`: Slice para gestionar recetas y su estado.
    - `FavoriteSlice.ts`: Slice para gestionar los favoritos de las recetas.
    - `useAppStore.ts`: Hook para acceder al estado global de la aplicación.
  - **services/**: Contiene los servicios para interactuar con APIs y realizar operaciones.
    - `recipeService.ts`: Servicio para obtener información de bebidas.
  - **pages/**: Contiene las páginas de la aplicación.
    - `HomePage.tsx`: Página principal que muestra una lista de bebidas.
    - `Favorites.tsx`: Página que muestra una lista de bebidas favoritas.
  - **layouts/**: Contiene la estructura de la aplicación.
    - `Layout.tsx`: Componente que define la estructura general de la aplicación.
  - `AppRouter.tsx`: Componente que gestiona las rutas de la aplicación.

## 🚀 Características Principales

- **Búsqueda de Bebidas**: Permite a los usuarios buscar el precio de una bebida ingresando el nombre de la bebida y el ingrediente.
- **Interfaz Responsiva**: Asegura que la aplicación se vea bien en dispositivos de diferentes tamaños.
- **Validación de Datos**: Utiliza Zod para validar la entrada del usuario antes de realizar la búsqueda.
- **Manejo de Estado**: Utiliza hooks personalizados para gestionar el estado de la aplicación de manera eficiente.
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
