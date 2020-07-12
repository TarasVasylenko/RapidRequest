<?
$name  = $_REQUEST["name"];
$email = $_REQUEST["email"];
$phone = $_REQUEST["phone"];
$to    = "contact@rapidrequest.de"; // ENTER YOUR EMAIL ADDRESS

if (isset($name) && isset($email) || isset($phone)) {
    $email_subject = "RapidRequest register"; // ENTER YOUR EMAIL SUBJECT
		$headers .= "Content-type: text/html; charset=utf-8 \r\n";
		$headers .= "From: RapidRequest <administration@rapidrequest.de>\r\n";
		$msg     = "From: $name<br/> Email: $email <br/> Phone: $phone";
	
   $mail =  mail($to, $email_subject, $msg, $headers);
  if($mail)
	{
		echo 'success';
	}

else
	{
		echo 'failed';
	}
}

?>