<?
$name  = $_REQUEST["name"];
$firma = $_REQUEST["firma"];
$phone = $_REQUEST["phone"];
$email = $_REQUEST["email"];
$msg   = $_REQUEST["msg"];
$to    = "contact@rapidrequest.de"; // ENTER YOUR EMAIL ADDRESS

if (isset($email) && isset($name) && isset($msg)) {
    $email_subject = "RapidRequest contact"; // ENTER YOUR EMAIL SUBJECT
		$headers .= "Content-type: text/html; charset=utf-8 \r\n";
		$headers .= "From: RapidRequest <administration@rapidrequest.de>\r\n";
		$msg     = "From: $name<br/>  Firma: $firma <br/> Phone: $phone <br/>  Email: $email <br/> Message: $msg";
	
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