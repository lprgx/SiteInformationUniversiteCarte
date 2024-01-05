<?php
session_start(); // Démarre la session

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Récupère et stocke les valeurs du formulaire dans des variables de session
  $_SESSION["identifiant"] = $_POST["identifiant"];
  $_SESSION["universite"] = $_POST["universite"];
}
?>
