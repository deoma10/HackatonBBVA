★ Vincula inteligente BBVA - (Hackton BBVA 2021)

★ Solución a construir

    ○ Nuestro modelo analítico hará un clustering haciendo uso del método Silhouette Score para escoger de acuerdo a diversas segmentaciones el número de clusters adecuados para maximizar la rentabilidad. Estas segmentaciones sobre la rentabilidad podrán ser hechas teniendo en cuenta diferentes criterios como: socioeconómicos, psicográficos, relacionado con el tipo del producto, según la frecuencia de compra e inclusive el volumen de saldos.

    Teniendo en cuenta que método k-mean no es compatible con variables no numéricas, hemos decidido que las variables cualitativas serán estratificadas o binarizadas dependiendo de si son dicotómicas o no. De esta manera podemos vincular o relacionar variables que a simple inspección no podrían ser relacionadas.

    Luego de determinar la cantidad de clusters que serán óptimos para identificar los factores que maximizan la rentabilidad, aplicaremos técnicas de machine learning  que permitan encontrar las máscaras adecuadas para clasificar los productos que aumentan la rentabilidad y tienen un mayor beneficio para el cliente de acuerdo a su perfil.

★ Descripción técnica de la solución

    ○ Nuestro modelo analítico hará un clustering haciendo uso del método Silhouette Score para escoger de acuerdo a diversas segmentaciones el número de clusters adecuados para maximizar la rentabilidad. Estas segmentaciones sobre la rentabilidad podrán ser hechas teniendo en cuenta diferentes criterios como: socioeconómicos, psicográficos, relacionado con el tipo del producto, según la frecuencia de compra e inclusive el volumen de saldos.

    Teniendo en cuenta que método k-mean no es compatible con variables no numéricas, hemos decidido que las variables cualitativas serán estratificadas o binarizadas dependiendo de si son dicotómicas o no. De esta manera podemos vincular o relacionar variables que a simple inspección no podrían ser relacionadas.

    Luego de determinar la cantidad de clusters que serán óptimos para identificar los factores que maximizan la rentabilidad, aplicaremos técnicas de machine learning  que permitan encontrar las máscaras adecuadas para clasificar los productos que aumentan la rentabilidad y tienen un mayor beneficio para el cliente de acuerdo a su perfil.

    Para empezar cargamos las 7 bases de datos proporcionadas al drive de cada uno. Luego, se conectan estas bases de datos a Google Colaboratory y haciendo uso de la librería Pandas, hacemos un cast de estos archivos .csv a DataFrames con los cuales trabajar. Colaboratory nos permite manipular con mayor fluidez los datos, ya que al ser tan voluminosos se hacen engorrosos en su manejo.

    Con las bases cargadas y formateadas en DataFrames, empezamos a gráficar las variables para obtener correlaciones, sacar conclusiones a partir de estas y luego, haciendo uso de la librería Scikit Learn que provee las herramientas para desarrollar el clustering por medio del método Silhouette Score. Los datos proporcionados en los Data Frames fueron particionados de la siguiente forma:

    20% de la BD original para desarrollar el modelo
    20% de la BD original para pruebas
    60% de la BD para hacer validar y mostrar los resultados.

    El paso a seguir es terminar de relacionar las variables para llegar al número óptimo de clusters y sacar conclusiones que nos permitan diseñar un pull de productos teniendo en cuenta los ya existentes y otros que propongamos; para ofrecer a los clientes que estén en cada cluster.

★ Lista de las principales tecnologías

    ○ Google Drive, Webex,  Python con las librerías: Pandas, scikit learn, matplotlib por medio del intérprete en Spyder 3.0. Servicios en la nube: Google Colaboratory Para el Frontend tenemos pensado crearlo usando JavaScript, HTML, CSS y montarlo en Heroku.
