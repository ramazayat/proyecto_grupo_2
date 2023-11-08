-- MariaDB dump 10.19  Distrib 10.4.27-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: keko
-- ------------------------------------------------------
-- Server version	10.4.27-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ingredienteporreceta`
--

DROP TABLE IF EXISTS `ingredienteporreceta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ingredienteporreceta` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_receta` int(11) NOT NULL,
  `id_ingrediente` int(11) NOT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `unidad_de_medida` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingredienteporreceta`
--

LOCK TABLES `ingredienteporreceta` WRITE;
/*!40000 ALTER TABLE `ingredienteporreceta` DISABLE KEYS */;
INSERT INTO `ingredienteporreceta` VALUES (0,0,0,0,NULL),(1,1,1,4,''),(2,1,2,120,'g'),(3,2,1,4,''),(4,2,4,1,'kg'),(5,3,1,1,''),(6,3,2,250,'g'),(8,3,5,125,'g'),(9,4,3,100,'cc'),(10,4,4,1,'kg'),(11,4,5,1,'cda'),(12,5,9,100,'g'),(13,5,12,1,''),(14,5,13,50,'g'),(15,5,14,0,''),(16,6,1,6,NULL),(17,6,8,1,'kg'),(18,6,7,0,''),(19,7,1,6,NULL),(20,7,9,1,'kg'),(21,7,7,0,NULL),(22,8,17,1,'kg'),(23,8,23,0,''),(24,8,32,0,NULL),(25,8,16,0,'g'),(26,8,2,200,'g'),(27,8,13,200,'g'),(28,9,1,2,NULL),(29,9,3,1,'vaso'),(30,9,2,1,'vaso'),(31,9,11,1,'copa'),(32,9,21,1,'kg'),(33,10,6,150,'g'),(34,10,15,1,NULL),(35,10,18,NULL,NULL),(36,10,19,2,NULL),(37,10,25,NULL,NULL),(38,10,31,1,NULL),(39,10,32,NULL,NULL),(40,11,29,250,'g'),(41,11,24,160,'g'),(42,11,17,1,NULL),(43,11,31,1,NULL),(44,11,1,2,NULL),(45,12,10,1,'kg'),(46,12,30,1,'vaso de jugo de'),(47,12,24,0,''),(48,12,13,1,'puñado'),(49,12,22,360,'g'),(50,13,20,1,' '),(51,13,26,0,''),(52,13,27,75,'g'),(53,13,28,1,' ');
/*!40000 ALTER TABLE `ingredienteporreceta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ingredientes`
--

DROP TABLE IF EXISTS `ingredientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ingredientes` (
  `id_ingredientes` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_ingrediente` varchar(45) NOT NULL,
  PRIMARY KEY (`id_ingredientes`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingredientes`
--

LOCK TABLES `ingredientes` WRITE;
/*!40000 ALTER TABLE `ingredientes` DISABLE KEYS */;
INSERT INTO `ingredientes` VALUES (1,'Huevo'),(2,'Harina'),(3,'Leche'),(4,'Papa'),(5,'Manteca'),(6,'Cerdo'),(7,'Pan rallado'),(8,'Carne'),(9,'Pollo'),(10,'Pescado'),(11,'Coñac'),(12,'Lechuga'),(13,'Queso'),(14,'Salsa César'),(15,'Ajo'),(16,'Levadura'),(17,'Tomate'),(18,'Salsa de soja'),(19,'Morrón'),(20,'Palta'),(21,'Manzana'),(22,'Crema'),(23,'Albahaca'),(24,'Arroz'),(25,'Puerro'),(26,'Semillas de sésamo'),(27,'Salmón'),(28,'Bagel'),(29,'Lentejas'),(30,'Limón'),(31,'Cebolla'),(32,'Aceite');
/*!40000 ALTER TABLE `ingredientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recetas`
--

DROP TABLE IF EXISTS `recetas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recetas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `dificultad` int(11) NOT NULL,
  `pasos` varchar(2000) NOT NULL,
  `faltantes` int(100) DEFAULT NULL,
  `img` varchar(450) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recetas`
--

LOCK TABLES `recetas` WRITE;
/*!40000 ALTER TABLE `recetas` DISABLE KEYS */;
INSERT INTO `recetas` VALUES (1,'Bizcocho',1,'Separamos las claras de las yemas en dos recipientes distintos. Batimos las claras con unas varillas a velocidad baja. Cuando empiecen a espumar y sin dejar de batir, añadimos poco a poco la mitad del azúcar. Continuamos batiendo durante unos seis-ocho minutos más a velocidad alta hasta conseguir un merengue firme.A continuación, sin necesidad de lavar las varillas, batimos las yemas junto con el resto del azúcar. El color cambiará y se volverán pálidas, también aumentarán en volumen por la cantidad de aire incorporado. Paramos de batir cuando las varillas dibujen un trazo en las yemas. Añadimos la harina, tamizada, y las claras, batidas, al recipiente con las yemas. Lo haremos de forma alterna y en tres partes, integrando la harina o las claras con movimientos envolventes y mucha suavidad. No añadimos el ingrediente siguiente hasta que no esté bien incorporado el anterior.',0,'bizcocho.jpeg'),(2,'Tortilla de Papa',2,'Pelar y cortar las papas en cuadraditos, poner en un recipiente(sarten) a freir, junto con la cebolla y el morron picados, batir los huevos con la sal , el oregano y la pimienta. Luego que las papas ya esten cocidas quitarles el aceite dejandole muy poquito casi nada, y colocar los huevos batidos sobre las papas , revolver un poco acomodar la preparacion que quede en una forma chata dejar cocinar 4 o 5 minutos y tratar de dar vuelta la preparacion para dorarla del otro lado (recomiendo darla vuelta de la siguiente manera). Colocar la tapa de una olla sobre la sarten colocar la preparacion tratando de no volcar nada y luego deslizar con cuidado nuevamente del otro lado sobre la sarten y dejar dorar otro 4 o 5 minutos , luego desmoldar sobre un plato o fuente y asi estara lista la tortilla.',0,'tortilla-de-papa.jpg'),(3,'Galletitas de Manteca',2,'Incorporar los ingredientes de a uno hasta lograr una masa homogénea. Estirar para que la masa tenga el espesor de 1/2 cm. Armar formas con cortantes para galletitas, y disponerlas sobre una placa enmantecada. Cocinar en horno a 160º hasta que las galletitas estén doradas.',0,'galletitas_de_manteca.jpeg'),(4,'Puré de papa',1,'Para comenzar a hacer el pure de papa debemos pelar las papas y lavar, para luego proceder a cortarlas en cubos de tamaño mediano, 2 o 3 centímetros esta bien. Colocamos las papas cortas en una cacerola con aguara hervida y sal. Las cocinamos por aproximadamente 20 minutos, nos vamos a dar cuenta cuando esten lista ya que al intentar pincharlas con un tenedor los cubos se van a desarmar. Colamos las papas y procedemos a agregarle la manteca y la leche, revolvemos para homogenizar la mezcla y salpimentamos a gusto.',0,'pure.jpg'),(5,'César',1,'Deshojar y trozar la lechuga con las manos. Baña las hojas de lechuga con el aderezo César. Agrega crutones (opcional) y queso parmesano espolvoreado encima. ¡Disfruta inmediatamente!',0,'cesar.jpg'),(6,'Milanesa de Carne',2,'Para empezar con la receta de milanesa de carne, primero debes sazonar la carne con la sal, la pimienta y el orégano al gusto. Luego, pasa cada uno de los filetes de ternera por el pan rallado que necesites (por ambos lados).En un recipiente aparte, bate los huevos y baña los filetes de carne en ellos. Después, para fijar el rebozado de las milanesas, vuelve a pasarlos por el pan rallado.Ahora, pon el aceite a calentar y, cuando esté caliente, fríe los filetes de carne rebozados a fuego medio. Deberás freírlos hasta que estén dorados por ambos lados.Para retirar el exceso de aceite de las milanesas de carne puedes colocarlas en papel absorbente. ¡Listas para comer!',0,'milacarne.jpg'),(7,'Milanesa de Pollo',2,'Para empezar con la receta de milanesa de pollo, primero debes sazonar el pollo con la sal, la pimienta y el orégano al gusto. Luego, pasa el pollo por el pan rallado que necesites (por ambos lados).En un recipiente aparte, bate los huevos y baña el pollo en ellos. Después, para fijar el rebozado de las milanesas, vuelve a pasarlos por el pan rallado. Ahora, pon el aceite a calentar y, cuando esté caliente, fríe el pollo rebozado a fuego medio. Deberás freírlos hasta que estén dorados por ambos lados.Para retirar el exceso de aceite de las milanesas de pollo puedes colocarlas en papel absorbente. ¡Listas para comer!',0,'milapolla.jpg'),(8,'Pizza Napolitana',2,'En un bol grande integrar 200 g de harina tipo “00” con 0,5 g de levadura seca.Agregar 130 ml de agua tibia poco a poco, mezclando con un cornet, y agregar un chorrito de aceite de oliva. Amasar unos 10/12 minutos y en el medio del amasado agregar 1 cucharadita y ½ de sal. La masa tiene que estar suave y elástica.Una vez armado el bollo de masa dejarlo reposar en un recipiente cubierto con un paño a temperatura ambiente, hasta que doble su volumen. Una vez que levó, llevar a la heladera por 24 h para una buena fermentación. Precalentar el horno a 250°C, temperatura máxima. También se puede usar una piedra refractaria. Poner agua a hervir en una cacerola, colocar los tomates y dejarlos por unos 5 minutos hasta que se desprenda la cáscara. Pelar los tomates y machacarlos en un bol con un poco de sal y pimienta, y un chorrito de aceite de oliva. Cocinar por unos 10 minutos en una cacerola a fuego medio. Dejar que tome temperatura ambiente. Dividir el bollo de masa en dos y sobre una mesada levemente enharinada estirarla siempre de adentro hacia afuera y cuidando que quede un borde sin estirar.Colocar las pizzas en una bandeja de horno levemente enharinada y esparcir la salsa de tomate de adentro hacia afuera, dejando un borde alrededor sin salsa. No poner demasiada salsa porque puede humedecer mucho la masa. Desmenuzar la mozzarella y colocar encima de la salsa de tomate.Rociar con un poco de aceite de oliva y llevar las pizzas al horno.Hornear unos 3 o 4 minutos a horno bien fuerte. Retirar del horno y decorar con hojas de albahaca fresca.',0,'napo.jpg'),(9,'Tarta de Manzana',2,'Se pelan y se trocean las manzanas y se bate todo junto en la batidora.Se mete en al horno (180°-200°) con papel de aluminio untado con mantequilla. Dejar hacer hasta que la aguja salga limpia.Se adorna con gajos de manzana pintados con clara de huevo y se hornea al grill hasta que se dore.',0,'tartamanzana.jpg'),(10,'Wok de Cerdo',2,'En un wok, salteamos las verduras cortadas en aceite de sésamo. Las salteamos durante unos 10 minutos. Agregamos el solomillo de cerdo salpimentado. Salteamos. Incorporamos un chorrito de salsa de soja, las especias que queramos y un toque de salsa picante. Sal no necesitará porque le hemos incorporado soja y con eso ya será suficiente. Dejamos que se termine de hacer el solomillo de cerdo y emplatamos. Un plato sano y delicioso.',0,'cerdo.jpg'),(11,'Ensalada de Lentejas',1,'Dejá en remojo las lentejas toda la noche. Pasado ese tiempo colocalas en una olla junto a la cebolla pelada y 750 cc. de agua. Llevá la olla a fuego fuerte hasta que el agua hierva y cuando eso pase bajá el fuego a medio. Cociná 35 minutos más. Retirá del fuego y colá el agua. Cociná el arroz integral en agua hirviendo durante 25 minutos a fuego medio. Retirá del fuego y colalo. Cortá el tomate en cubos pequeños. Picá las cebollas. Cociná los huevos de 8 a 10 minutos, quitales la cáscara y picalos. En un bol mezclá las lentejas con el arroz, el tomate, las cebollas y los huevos. Condimentar a gusto.',0,'lenteja.jpg'),(12,'Filet de pescado con Crema y Limón',2,'En una fuente aceitada distribuir los filetes. Se pueden hacer 2 pisos si la fuente no alcanza para 1. Salar un poquito. Batir un poco la crema con el jugo de limón (no se corta) y condimentar.Volcar esta mezcla sobre los filetes. Si hacemos una fuente de 2 pisos ponemos la mitad, otra capa de pescado y terminamos cubriendo con la crema y esparcir por encima el queso rallado.Al horno hasta que esté dorado, borbotee desde el fondo de la fuente y el pescado esté cocido. Servir con arroz blanco.',0,'concremaylimon.jpg'),(13,'Bagel de salmón',2,'Ya teniendo los Bagels, colocamos queso,  el salmón, la palta,  la lechuga  y unos tomates cortados en rodajas. Luego tirar semillas de sésamo por encima. Tendremos en nuestras manos un pequeño bocado de felicidad.',0,'bagel-de-salmon-.jpg');
/*!40000 ALTER TABLE `recetas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-08  8:55:38
