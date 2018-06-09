<?php
 session_start();
?>

<!DOCTYPE html>
<html>
<head>
<title>includs</title>
<link rel="stylesheet" class="text/css" href="style.css">
</head>
<body>

<ul>
   <li><a href = "../lessons10-20.php">HOME</a></li>
   <li><a href = "contacts.php">CONTACTS</a></li>
</ul>
<?php
echo $_SESSION['username'];


?>
</body>
</html>