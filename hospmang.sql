-- MySQL dump 10.13  Distrib 5.7.28, for Linux (x86_64)
--
-- Host: localhost    Database: miniproject
-- ------------------------------------------------------
-- Server version	5.7.28-0ubuntu0.18.04.4

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
-- Table structure for table `available`
--

DROP TABLE IF EXISTS `available`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `available` (
  `did` int(10) DEFAULT NULL,
  `timestart` varchar(10) DEFAULT NULL,
  `timeend` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `available`
--

LOCK TABLES `available` WRITE;
/*!40000 ALTER TABLE `available` DISABLE KEYS */;
INSERT INTO `available` VALUES (2001,'9 AM','11 PM'),(2002,'12 PM','12 AM'),(2003,'10 AM','5 PM'),(2004,'11 AM','8 PM'),(2005,'12 PM','4 PM'),(2006,'11 AM','3 PM'),(2007,'10 AM','8 PM');
/*!40000 ALTER TABLE `available` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `def`
--

DROP TABLE IF EXISTS `def`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `def` (
  `defid` int(10) NOT NULL,
  `deficiency` varchar(20) DEFAULT NULL,
  `symptoms` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`defid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `def`
--

LOCK TABLES `def` WRITE;
/*!40000 ALTER TABLE `def` DISABLE KEYS */;
INSERT INTO `def` VALUES (8701,'Vitamin D','Weakness, Brittle Bones'),(8702,'B12','Blood Disorder, Impaired Brain function, Prone to diseases'),(8703,'Calcium','Osteoporosis, Cramps, Weak joints'),(8704,'Vitamin A','Night Blindness, Delayed Growth, Acne, Throat and Chest Infections'),(8705,'Iron','Anemia, Weakness, Fatigue');
/*!40000 ALTER TABLE `def` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dis`
--

DROP TABLE IF EXISTS `dis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dis` (
  `disid` int(10) NOT NULL,
  `disease` varchar(20) DEFAULT NULL,
  `symptoms` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`disid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dis`
--

LOCK TABLES `dis` WRITE;
/*!40000 ALTER TABLE `dis` DISABLE KEYS */;
INSERT INTO `dis` VALUES (9701,'Malaria','High Fever, Abdominal Pain, Nausea'),(9702,'Typhoid','Poor Appetite, Lethargy, Intestinal Bleeding'),(9703,'Jaundice','Fatigue, Dark Urine, Pale Stools, Vomiting, Yellow Skin'),(9704,'Cholera','Dehydration, Lethargy, High heart rate, Low BP'),(9705,'H1N1','Fever, Red Eyes, Sore Throat, Fatigue'),(9706,'Dengue','High Fever, Skin Rash, Burning Eyes, Headaches, Nausea'),(9707,'Food Poisoning','Diarrhea, Indigestion, Stomach Cramps, Appetite Loss, Chills'),(9708,'AIDS','Weight Loss, Lymph Glands Swelling, Fever and Sweating, Pneumonia'),(9709,'Hypothyrodism','Hair Loss, Weight Gain, Dry Skin, Depression, Fatigue, Feeling Cold'),(9710,'Hyperthyroid','Weight Loss, Depression, Appetite Loss, Sleep Deprivation');
/*!40000 ALTER TABLE `dis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `disdef`
--

DROP TABLE IF EXISTS `disdef`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `disdef` (
  `pid` int(10) DEFAULT NULL,
  `defid` int(10) DEFAULT NULL,
  `disid` int(10) DEFAULT NULL,
  KEY `pid` (`pid`),
  KEY `defid` (`defid`),
  KEY `disid` (`disid`),
  CONSTRAINT `disdef_ibfk_1` FOREIGN KEY (`pid`) REFERENCES `family` (`pid`),
  CONSTRAINT `disdef_ibfk_2` FOREIGN KEY (`defid`) REFERENCES `def` (`defid`),
  CONSTRAINT `disdef_ibfk_3` FOREIGN KEY (`disid`) REFERENCES `dis` (`disid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `disdef`
--

LOCK TABLES `disdef` WRITE;
/*!40000 ALTER TABLE `disdef` DISABLE KEYS */;
INSERT INTO `disdef` VALUES (1001,8702,9710),(1011,8701,9709),(1012,8703,9709),(1002,8705,NULL),(1021,8704,NULL),(1022,8702,NULL),(1003,NULL,9701),(1014,NULL,9706);
/*!40000 ALTER TABLE `disdef` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctor`
--

DROP TABLE IF EXISTS `doctor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `doctor` (
  `did` int(10) NOT NULL,
  `fname` varchar(10) DEFAULT NULL,
  `lname` varchar(10) DEFAULT NULL,
  `specialisation` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`did`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor`
--

LOCK TABLES `doctor` WRITE;
/*!40000 ALTER TABLE `doctor` DISABLE KEYS */;
INSERT INTO `doctor` VALUES (2001,'Rithesh','Shetty','Sexologist'),(2002,'Michael','Philip','Cardiologist'),(2003,'Prateek','Bhopi','General Physician'),(2004,'Karthik','Nagesh','Pediatrician'),(2005,'Anji','Pirkish','Dermatologist'),(2006,'Maansi','Pande','Gynaecologist'),(2007,'Priya','Chinappa','Dietician');
/*!40000 ALTER TABLE `doctor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `family`
--

DROP TABLE IF EXISTS `family`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `family` (
  `pid` int(10) NOT NULL,
  `fname` varchar(10) DEFAULT NULL,
  `lname` varchar(10) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `blood` varchar(10) DEFAULT NULL,
  `age` int(3) DEFAULT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `family`
--

LOCK TABLES `family` WRITE;
/*!40000 ALTER TABLE `family` DISABLE KEYS */;
INSERT INTO `family` VALUES (1001,'Jack','Ryan','1972-02-26','Male','A +ve',47),(1002,'Harriet','Ryan','1975-04-18','Female','O +ve',44),(1003,'Jim','Ryan','1999-06-01','Male','A +ve',20),(1011,'Rohan','Mammen','1966-12-21','Male','B +ve',52),(1012,'Disha','Mammen','1967-09-29','Female','O +ve',52),(1013,'Karthik','Mammen','1992-06-29','Male','O +ve',27),(1014,'Ela','Mammen','2001-05-20','Female','B +ve',18),(1021,'Nithin','Shetty','1969-06-01','Male','O +ve',50),(1022,'Natasha','Shetty','1971-02-16','Female','AB +ve',48),(1023,'Prerana','Shetty','2005-07-22','Female','AB +ve',14),(1024,'Adhya','Shetty','2005-07-22','Female','AB +ve',14);
/*!40000 ALTER TABLE `family` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`manavi`@`localhost`*/ /*!50003 trigger agetrig before insert on family for each row
begin
if new.age < 0 then
set new.age=abs(new.age);
elseif new.age>=120 then
set new.age=NULL;
end if;
end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `medication`
--

DROP TABLE IF EXISTS `medication`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `medication` (
  `mid` int(10) NOT NULL,
  `medname` varchar(20) DEFAULT NULL,
  `defid` int(10) DEFAULT NULL,
  `disid` int(10) DEFAULT NULL,
  PRIMARY KEY (`mid`),
  KEY `defid` (`defid`),
  KEY `disid` (`disid`),
  CONSTRAINT `medication_ibfk_1` FOREIGN KEY (`defid`) REFERENCES `def` (`defid`),
  CONSTRAINT `medication_ibfk_2` FOREIGN KEY (`disid`) REFERENCES `dis` (`disid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medication`
--

LOCK TABLES `medication` WRITE;
/*!40000 ALTER TABLE `medication` DISABLE KEYS */;
INSERT INTO `medication` VALUES (7601,'Calciferol',8701,NULL),(7602,'B12 Supplement',8702,NULL),(7603,'Calcitrol Systemic',8703,NULL),(7604,'VAD-A',8704,NULL),(7605,'FeroSul',8705,NULL),(7606,'Malarone',NULL,9701),(7607,'Cipro',NULL,9702),(7608,'Jaunji',NULL,9703),(7609,'Cholyeet',NULL,9704),(7610,'hinipit',NULL,9705),(7611,'Denji',NULL,9706),(7612,'EatIT',NULL,9707),(7613,'Hyppo9',NULL,9709),(7614,'Hyper100',NULL,9710);
/*!40000 ALTER TABLE `medication` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'miniproject'
--
/*!50003 DROP PROCEDURE IF EXISTS `deficiency_med` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`manavi`@`localhost` PROCEDURE `deficiency_med`(IN name varchar(20))
begin
(select first.DefName, first.Symp, second.MedN from (select deficiency as 'DefName', symptoms as 'Symp' from def where deficiency =name) as first inner join (select medname as "MedN" from medication m where m.defid = (select defid from def where deficiency =name)) as second);
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `disease_med` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`manavi`@`localhost` PROCEDURE `disease_med`(IN name varchar(20))
begin
(select first.DisName, first.Symp, second.MedN from (select disease as 'DisName', symptoms as 'Symp' from dis where disease =name) as first inner join (select medname as "MedN" from medication m where m.disid = (select disid from dis where disease =name)) as second);
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `fam_def` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`manavi`@`localhost` PROCEDURE `fam_def`(IN name1 varchar(10), IN name2 varchar(10))
begin
DECLARE dsid INT DEFAULT NULL;
select disid into dsid from disdef where pid = (select pid from family where fname = name1 and lname = name2);
IF (dsid IS NOT NULL) THEN
select disease from dis where disid = (select disid from disdef where pid = (select pid from family where fname = name1 and lname =name2));
END IF;
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `fam_det` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`manavi`@`localhost` PROCEDURE `fam_det`(IN name1 varchar(10), IN name2 varchar(10))
begin
select * from family where fname = name1 and lname = name2;
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `fam_dis` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`manavi`@`localhost` PROCEDURE `fam_dis`(IN name1 varchar(10), IN name2 varchar(10))
begin
DECLARE dfid INT DEFAULT NULL;
select defid into dfid from disdef where pid = (select pid from family where fname = name1 and lname = name2);
IF (dfid IS NOT NULL) THEN
select deficiency from def where defid = (select defid from disdef where pid = (select pid from family where fname = name1 and lname =name2));
END IF;
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `fam_dis_def` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`manavi`@`localhost` PROCEDURE `fam_dis_def`(IN name1 varchar(10), IN name2 varchar(10))
begin
DECLARE dfid, dsid INT DEFAULT NULL;
select defid into dfid from disdef where pid = (select pid from family where fname = name1 and lname = name2);
IF (dfid IS NOT NULL) THEN
select deficiency from def where defid = (select defid from disdef where pid = (select pid from family where fname = name1 and lname =name2));
END IF;
select disid into dsid from disdef where pid = (select pid from family where fname = name1 and lname = name2);
IF (dsid IS NOT NULL) THEN
select disease from dis where disid = (select disid from disdef where pid = (select pid from family where fname = name1 and lname =name2));
END IF;
select * from family where fname = name1 and lname = name2;
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-05 18:36:05
