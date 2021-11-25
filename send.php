<?php
$_POST = json_decode(file_get_contents("php://input"), true);

$name = $_POST["name"];
$phone = $_POST["phone"];
$mail = $_POST["email"];
$service = $_POST["service"];
$comment = $_POST["comment"];

$to = "info@yerchenko.com";

$subject = "Заявка з сайта";
$message = "
Ви отримали листа від нового клієнта. <br>
Ім`я: ".htmlspecialchars($name)."<br>
Телефон: ".htmlspecialchars($phone)."<br>
Комментарий:".htmlspecialchars($comment);

$headers = "From: $mail\r\nContent-type: text/html; charset=utf-8\r\n";
mail($to, $subject, $message, $headers);

var_dump($_POST);
var_dump($_REQUEST);

file_get_contents('php://input');

exit
?>