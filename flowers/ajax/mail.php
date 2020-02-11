<?php 
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$sumject = "=?utf-8?B?".base64_encode("Сообшение з сайта")."?=";
$headers = "From: $email\r\nReplay-to: $email\r\nContentType: text/html; charset=utf-8\r\n";

$success = mail("innaloveflowers@gmail.com", $sumject, $message, $headers);
echo $success;

?>