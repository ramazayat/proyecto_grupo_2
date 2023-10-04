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
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingredienteporreceta`
--

LOCK TABLES `ingredienteporreceta` WRITE;
/*!40000 ALTER TABLE `ingredienteporreceta` DISABLE KEYS */;
INSERT INTO `ingredienteporreceta` VALUES (0,0,0,NULL,NULL),(1,1,1,4,''),(2,1,2,120,'gr'),(3,2,1,4,''),(4,2,4,1,'kg'),(5,3,1,1,''),(6,3,2,250,'gr'),(8,3,5,125,'gr'),(9,4,3,100,'cc'),(10,4,4,1,'kg'),(11,4,5,1,'cda'),(12,5,9,100,'gr'),(13,5,12,1,''),(14,5,13,50,'gr'),(15,5,14,NULL,'a gusto');
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
INSERT INTO `ingredientes` VALUES (1,'Huevo'),(2,'Harina'),(3,'Leche'),(4,'Papa'),(5,'Manteca'),(6,'Cerdo'),(7,'Pan rallado'),(8,'Carne'),(9,'Pollo'),(10,'Pescado'),(11,'Salsa de tomate'),(12,'Lechuga'),(13,'Queso'),(14,'Salsa César'),(15,'Crema'),(16,'Levadura'),(17,'Tomate'),(18,'Salsa de soja'),(19,'Cacao'),(20,'Palta'),(21,'Manzana'),(22,'Banana'),(23,'Chips de chocolate'),(24,'Arroz'),(25,'Brócoli'),(26,'Champiiñones'),(27,'Espinaca'),(28,'Frutilla'),(29,'Lentejas'),(30,'Limón'),(31,'Langostinos'),(32,'Melón');
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
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recetas`
--

LOCK TABLES `recetas` WRITE;
/*!40000 ALTER TABLE `recetas` DISABLE KEYS */;
INSERT INTO `recetas` VALUES (1,'Bizcocho',1,'Separamos las claras de las yemas en dos recipientes distintos. Batimos las claras con unas varillas a velocidad baja. Cuando empiecen a espumar y sin dejar de batir, añadimos poco a poco la mitad del azúcar. Continuamos batiendo durante unos seis-ocho minutos más a velocidad alta hasta conseguir un merengue firme.A continuación, sin necesidad de lavar las varillas, batimos las yemas junto con el resto del azúcar. El color cambiará y se volverán pálidas, también aumentarán en volumen por la cantidad de aire incorporado. Paramos de batir cuando las varillas dibujen un trazo en las yemas. Añadimos la harina, tamizada, y las claras, batidas, al recipiente con las yemas. Lo haremos de forma alterna y en tres partes, integrando la harina o las claras con movimientos envolventes y mucha suavidad. No añadimos el ingrediente siguiente hasta que no esté bien incorporado el anterior.',0,'bizcocho.jpeg'),(2,'Tortilla de Papa',2,'Pelar y cortar las papas en cuadraditos, poner en un recipiente(sarten) a freir, junto con la cebolla y el morron picados, batir los huevos con la sal , el oregano y la pimienta. Luego que las papas ya esten cocidas quitarles el aceite dejandole muy poquito casi nada, y colocar los huevos batidos sobre las papas , revolver un poco acomodar la preparacion que quede en una forma chata dejar cocinar 4 o 5 minutos y tratar de dar vuelta la preparacion para dorarla del otro lado (recomiendo darla vuelta de la siguiente manera). Colocar la tapa de una olla sobre la sarten colocar la preparacion tratando de no volcar nada y luego deslizar con cuidado nuevamente del otro lado sobre la sarten y dejar dorar otro 4 o 5 minutos , luego desmoldar sobre un plato o fuente y asi estara lista la tortilla.',0,'tortilla-de-papa.jpg'),(3,'Galletitas de Manteca',5,'Incorporar los ingredientes de a uno hasta lograr una masa homogénea. Estirar para que la masa tenga el espesor de 1/2 cm. Armar formas con cortantes para galletitas, y disponerlas sobre una placa enmantecada. Cocinar en horno a 160º hasta que las galletitas estén doradas.',0,'galletitas_de_manteca.jpeg'),(4,'Puré de papa',4,'Para comenzar a hacer el pure de papa debemos pelar las papas y lavar, para luego proceder a cortarlas en cubos de tamaño mediano, 2 o 3 centímetros esta bien. Colocamos las papas cortas en una cacerola con aguara hervida y sal. Las cocinamos por aproximadamente 20 minutos, nos vamos a dar cuenta cuando esten lista ya que al intentar pincharlas con un tenedor los cubos se van a desarmar. Colamos las papas y procedemos a agregarle la manteca y la leche, revolvemos para homogenizar la mezcla y salpimentamos a gusto.',0,'pure.jpg'),(5,'César',3,'Deshojar y trozar la lechuga con las manos. Baña las hojas de lechuga con el aderezo César. Agrega crutones (opcional) y queso parmesano espolvoreado encima. ¡Disfruta inmediatamente!',0,'cesar.jpg');
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

-- Dump completed on 2023-10-04  8:53:01
