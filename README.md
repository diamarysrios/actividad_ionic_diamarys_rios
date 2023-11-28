# Proyecto IONIC Diamarys Rios V-20.589.352 
### Sección 1 Trayecto III

Esta es la actividad de IONIC, luego de ejecutar los comandos del framework, tengo una aplicación base con 3 pestañas (tabs) las cuales usé para terminar la actividad.

# Rutas
El sistema posee 4 rutas, siendo la "barra" una redirección al inicio.

Parte del [archivo](https://github.com/diamarysrios/actividad_ionic_diamarys_rios/blob/master/src/app/tabs/tabs-routing.module.ts) con el módulo de enrutamiento es este:

```javascript
const routes: Routes = [
  {
    path: 'tabs', 
    component: TabsPage,
    children: [
      {
        path: 'inicio', 
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'informacion-personal',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'contacto',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/inicio',
    pathMatch: 'full'
  }
];
```
Donde se evidencia que tengo las siguientes 4 rutas:

| Ruta        | Componente          
| ----------- |-------------
| /    | [tab1](https://github.com/diamarysrios/actividad_ionic_diamarys_rios/tree/master/src/app/tab1)
| /tabs/inicio | [tab1](https://github.com/diamarysrios/actividad_ionic_diamarys_rios/tree/master/src/app/tab1)
| /tabs/informacion-personal | [tab2](https://github.com/diamarysrios/actividad_ionic_diamarys_rios/tree/master/src/app/tab2)
| /tabs/contacto | [tab3](https://github.com/diamarysrios/actividad_ionic_diamarys_rios/tree/master/src/app/tab3)

# Componentes
Como se evidencia en el enrutamiento, tengo 3 componentes, no tuve la necesidad de programar typescript, sólo hice el HTML y algo de CSS (o mejor dicho SASS) para cada uno.

### Sobre los estilos
No configuré SASS para cada componente, me bastó crear algunas clases en el archivo [global.scss ](https://github.com/diamarysrios/actividad_ionic_diamarys_rios/blob/documentacion/src/global.scss), a continuación las líneas en cuestión:

```scss
/* Imágen de fondo */
ion-content.background{
    --background: url(/assets/fondo.webp) 0 0/100% 100% no-repeat;
}

/* Para alinear al centro algunos elementos */
.text-align-center {
    text-align: center;
}

/* Para darle un ancho máximo a la tarjeta del contenido */
.col-tarjeta-diama {
    max-width: 750px;
}

/* Redondeando un poco las esquinas de mis fotos */
.img-redondeada {
    border-radius: 5px;
}
```
### [Tab 1](https://github.com/diamarysrios/actividad_ionic_diamarys_rios/blob/documentacion/src/app/tab1/tab1.page.html)
HTML con una imágen y algo de texto usando tarjetas para crear un punto de inicio para la aplicación.

```html
<ion-content [fullscreen]="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Inicio</ion-title>
      
    </ion-toolbar>
  </ion-header>
   <ion-content class="background">
  <ion-grid>
    <ion-row class="ion-justify-content-center ion-align-items-center">
    
      <ion-col class="col-tarjeta-diama">
        <ion-card class="ion-padding">
          <img class="img-redondeada" alt="Silhouette of mountains" src="/assets/diama1.jpeg" />
          <ion-card color="primary"> 
          <ion-card-header>
            <ion-card-title>¡Hola, soy Diamarys!</ion-card-title>
            <ion-card-subtitle>Ingeniera en formación</ion-card-subtitle>
          </ion-card-header>
        </ion-card>
  
          <ion-card-content>
            Amante de la música y de los instrumentos de cuerda.<br><br> Comparto lo que afirmó Albert Einstein "No tengo ningún talento especial, sólo soy apasionadamente curioso".
          </ion-card-content>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
  
</ion-content>
```

### [Tab2](https://github.com/diamarysrios/actividad_ionic_diamarys_rios/blob/documentacion/src/app/tab2/tab2.page.html)
En este componente volví a agregar otra imágen mía y volví a hacer uso de las tarjetas pero con diversos colores y el contenido de información personal deseado.

```html

<ion-content [fullscreen]="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Información personal</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="background">

  <ion-grid>
    <ion-row class="ion-justify-content-center ion-align-items-center">
      <ion-col class="col-tarjeta-diama">
        
        <ion-card class="ion-padding">
          <img class="img-redondeada" alt="Silhouette of mountains" src="/assets/diama2.jpeg" />
          
            <ion-card-title>
              <ion-text color="primary">
                <h1>¡Diamarys Yorlis Rios Rojas TSU en Informática!</h1>
              </ion-text>
            </ion-card-title>
            <ion-card-subtitle><h2>Acerca de mí:</h2></ion-card-subtitle>

            <p>Soy una profesional con espíritu crítico y creativo, altruista y con apertura al diálogo con capacidad para
            trabajar en proyectos innovadores y colaborar con profesionales de las más diversas áreas <ion-icon name="moon"></ion-icon></p>

            <ion-text color="primary">
              <h2>Experiencia</h2>
            </ion-text>

            <ion-card color="primary">
              <ion-card-header>
                <ion-card-title> Especialista de sistemas</ion-card-title>
                <ion-card-subtitle>Ministerio Público</ion-card-subtitle>
              </ion-card-header>
            
              <ion-card-content> Participo en el desarrollo de sistemas de diversa complejidad, efectuando análisis de requerimientos, 
                diseños físicos, diseños lógicos y ejecuto tareas de programación. Coordino el trabajo de programadores en proyectos de diversa naturaleza y dimensión. 
              </ion-card-content>
            </ion-card>
            
            <ion-card color="tertiary">
              <ion-card-header>
                <ion-card-title>Marketing Digital</ion-card-title>
                <ion-card-subtitle>GTSUPPORT C.A</ion-card-subtitle>
              </ion-card-header>
            
              <ion-card-content> Responsable de construir, gestionar y administrar la comunidad online alrededor de una marca en Internet,
                creando y manteniendo relaciones estables y duraderas con sus clientes, sus fans y, en general, cualquier usuario
                interesado en la marca.Responsable de construir, gestionar y administrar la comunidad online alrededor de una marca 
                en Internet, creando y manteniendo relaciones estables y duraderas con sus clientes, sus fans y, en general, 
                cualquier usuario interesado en la marca. </ion-card-content>
            </ion-card>

            <ion-card color="dark">
              <ion-card-header>
                <ion-card-title>Docente</ion-card-title>
                <ion-card-subtitle>U.E Colegio Juan XXIII</ion-card-subtitle>
              </ion-card-header>
            
              <ion-card-content> Profesora de informática en educación primaria y secundaria. </ion-card-content>
            </ion-card>

        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>

  </ion-content>
```  
### [Tab3](https://github.com/diamarysrios/actividad_ionic_diamarys_rios/blob/documentacion/src/app/tab3/tab3-routing.module.ts)
En este componente agregué mi información de contacto y un formulario "dummy" de contacto.

```html

<ion-content [fullscreen]="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Contacto</ion-title>
    </ion-toolbar>

  </ion-header>
    <ion-content class="background">
  <ion-row class="ion-justify-content-center ion-align-items-center">

    <ion-col class="col-tarjeta-diama">

      <ion-card class="ion-padding">
        <ion-card-header>
          <ion-card-title><ion-text color="primary">Información de Contacto</ion-text></ion-card-title>
        </ion-card-header>
        
        <ion-row>
          <ion-col size="auto">
            <ion-avatar>
              <img alt="Diamarys" src="/assets/diama2.jpeg" />
            </ion-avatar>
          </ion-col>
          <ion-col>
            <ion-label>Teléfono: 04127103505</ion-label>
              <p>Email: diamarysrios&#64;gmail.com</p>
              <p>Dirección: Caracas, La Candelaria</p>
          </ion-col>
        </ion-row>
          
      </ion-card>

      <ion-card class="ion-padding">
        <ion-card-header>
          <ion-card-title><ion-text color="primary">Para más Información</ion-text></ion-card-title>
        </ion-card-header>
      
        <ion-textarea class="ion-margin-bottom" label="Nombre" labelPlacement="floating" fill="outline" placeholder="Ingresar Nombre"></ion-textarea>
        
        <ion-textarea class="ion-margin-bottom" label="Teléfono" labelPlacement="floating" fill="outline" placeholder="Ingresar Número de Teléfono"></ion-textarea>
        
        <ion-textarea
          class="ion-margin-bottom"
          fill="outline"
          label="Email"
          labelPlacement="floating"
          helperText=" " >

        </ion-textarea>
        
        <ion-textarea class="ion-margin-bottom" label="Mensaje" labelPlacement="floating" fill="outline" placeholder="Ingresar Mensaje"></ion-textarea>

        <div class="text-align-center"> 
          <ion-button fill="outline">Enviar</ion-button>
        </div>
      </ion-card>
    </ion-col>
  </ion-row>

</ion-content>
```

# Archivos
Los archivos de imágen quedaron almacenados [en la carpeta assets](https://github.com/diamarysrios/actividad_ionic_diamarys_rios/tree/documentacion/src/assets).

