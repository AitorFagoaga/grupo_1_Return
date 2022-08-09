-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: registro
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `description` text,
  `price` int DEFAULT NULL,
  `image` text,
  `name` text,
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES ('La MacBook Pro ofrece una pantalla de 13 pulgadas y un diseño en color Space Grey. Además, cuenta con M1 Chip, un procesador Octa-Core (8-core CPU 8-core GPU) y una memoria de 256GB SSD.',750,'Macbook Pro.png','MacBook Pro 13\'\' M1 Chip 8-core CPU 8-core GPU 256GB SSD Space Grey',1,NULL),('iPhone 13 Pro 256GB Silver Marca: Apple Modelo: iPhone 13 Pro Color: Silver Memoria interna: 256 GB Memoria RAM: 4 GB Dual SIM: Sistema operativo: iOS 15 Tamaño de la pantalla: 6.1\'\' Resolución de la cámara: 12 MP',250,'iPhone 13 Pro.png','iPhone 13 Pro 256GB Silver',2,NULL),('Descripcion de Televisor Samsung Crystal UHD',900,'Televisor Samsung Crystal UHD.png','Televisor Samsung Crystal UHD',3,NULL),('Descripcion de Google ChromeCast',27000,'Google ChromeCast.png','Google ChromeCast',4,NULL),('Descripcion de PlayStation',210,'PlayStation 5.png','PlayStation 5 ',5,NULL),('asdsdasd',23,'1659992714366.jpg','dassdasda',6,NULL),('sdaasdasd',23,'1659997424645.jpg','pruebaforeingKey',7,NULL),('asdasdasd',23,'1659997461367.jpg','pruebaforeingKey',8,NULL),('asdsadsad',24,'1659997601066.jpg','pruebaforeingKey12',9,22),('sdasda',445,'1659998409568.jpg','dsasd',10,22),('sdsd',23,'1659998712600.jpg','ds',11,27),('dssd',34,'1660000465339.jpg','pruebaforeingKey',12,27),('sadsd',34,'1660000529420.jpg','Brunito',13,27);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `category` text,
  `email` text,
  `password` text,
  `name` text,
  `id` int NOT NULL AUTO_INCREMENT,
  `image` varchar(80) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('Comprador','juno@mail.com','$2a$10$ufK/6ux1lagMLIm.WDhoN.IySQdPJm.DUBWJsaPOuBCJkV.vMBvEG','juno',1,''),('Comprador','juno@mail.com','1234','juno',2,''),('Comprador','hola@gmail.com','$2a$10$U/yRcos.OolJOxRuvSCaqeOr8am2dJqK3k6At0gwLFUSB2PFxfG8m','hola',3,''),('Comprador','tr@mail.com','$2a$10$.CXkiwQ/PUjmCXmS2dEkDOkMiwuYwEk9mOv9d8yoFxkLIkFbC//bu','tr',4,''),('Comprador','martin@gmail.com','$2a$10$/ak/7QGWswNBcSTAoNwVPe9gt6OiXn7hL9tYcnYMPfRbohDXhsVS.','MARTIN',5,''),('Vendedor','aj@mail.com','$2a$10$ewPccXNp338gMd.K95mkNOBkfP9lOXXJlkQnVVGjz4z42EK2Y.2Pe','Aj',6,''),('Comprador','rl@mail.com','$2a$10$7OJijowa44nMI3a1kfGkOuzeZk3GY1rQ65/3x0BWshn346CSzvUV2','Rl',7,''),('Comprador','bruno@gmail.com','$2a$10$P8/7MJEZdYyFw5S0GAmsJub84tC0.EYHHmlNcVIaWeqP0aFIp.If6','Bruno',8,''),('Comprador','brunoooooo@gmail.com','$2a$10$04Iwnvuvtw1PZ81z3XuFN.c2B0Mk8RwLJlhlW86xsQDm96rsr/d42',NULL,9,''),('Comprador','josee@gmail.com','$2a$10$HJRHnh1AWCMW54gJGVfideyyJrM9Mn.im67QSQHZbMnRpfSi0GYU.','jose el pepe',10,''),('Vendedor','nada@gmail.com.ar','$2a$10$dkaAyn8sllgGvgdDfqg4UeEbZWoTJlZkXFSlmv7zdWTdsE9d9RDZ6','nada',11,''),('Comprador','nose@hotmail.com','$2a$10$lQ6KV7IajQZd.XTZfL4leuTs019FrOM4fieHpX763Q7tMryT/TxCG','nose12',12,''),('Comprador','no@gmail.com','$2a$10$15axeLEN4jNDWhyR5OOoI.bHLzocA7RZdSyucBjIsE6YWyfD3NRXW','no',13,''),('Comprador','bruno@gmail.com.ar','$2a$10$AvcQzA7FaRLanK/1ob0uzuG0ulCH0FK.bLQqjdTJ/gwnyzUm5fxJi','bruneitor',14,''),('Comprador','nel@gmail.com','$2a$10$En/8qZHqu0bL4SqsIlitmeIgQrC42vS.3F6nCzdhsElxDcmM6rzaG','Bruno',15,''),('Comprador','na@gmail.com','$2a$10$S8bf2Fcpod.AxuQhYi8R5.y2Tr25sLLFVMhkwta6cdxUPzdcNTDBC','nana',16,''),('Comprador','e@gmail.com','$2a$10$dA6w5oK0h/16NRMFhisxyOkgyy0ezlvHODKOCNbecv2kj5B8tidPq','e',17,''),('Comprador','s@hotmail.com','$2a$10$HBQ7k7qso790.4mYnOcedeD3ig6nvoqhY5ArJClR.EpzF7SAWRM9q','s@hotmail.com',18,''),('Comprador','nose@hotmail.com','$2a$10$19vCaEq0jzLC7gkIrE6uAe7mmaZ0jhcHj84cJv0G/njAWieUoo2eG','Brunito',19,''),('Comprador','nose@hotmail.com','$2a$10$iErb31Imzf7UhtYOHGkBTOwLa9.8uEVxhydImDd4Fyi7D8HbbO0k6','Brunito',20,''),('Comprador','nada@gmail.com.ar','$2a$10$3DvTtJzqkClgJU5gleiExevBDPZnqdyqlLeokuueEkHrp381/31UK','nadassss',21,''),('Comprador','pepe@hotmail.com','$2a$10$UgeWfB4CRuAsNStwmOBroe7zs2XOjOOgvTLZrlB1til/o0REwapgm','pepito',22,''),('Comprador','pepe@hotmail.com','$2a$10$zgKFzl1BegnuWo4VMWSOROjK/TTkhHdoJiWrtpj9gIIxBs4YpW9HC','Brunito',23,''),('Comprador','pepe222@hotmail.com','$2a$10$ACt.bGyj/z7gd1TsUMJWu.ajhrd8/qE.TPI3mUGer8T2KwHMZ/yqG','Brunito',25,'1659754612027-.jpg'),('Comprador','pepe2222@hotmail.com','$2a$10$fVOv0EvpdJmyWWHB1JJw.ugddZNXfqRlzRJICDeCmwHtSE9BjDMg6','josecachoo',26,'1659755164733-.jpg'),('Comprador','jose@hotmail.com','$2a$10$muFEHcGzuDlHPByVyPiu0.kXq3F07SqLpIZ1Jz.zt0fIv6KZKYjOe','jose',27,'1659993430034-.jpg');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-08 21:23:51
