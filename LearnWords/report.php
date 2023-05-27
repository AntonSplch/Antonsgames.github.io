
<body>
<?php


/*
$mysqli = new mysqli('sql113.epizy.com', 'epiz_34231700', 'A1WpW1swdtev', 'epiz_34231700_score');
if($mysqli->connect_error) {
  exit('Could not connect');
}

$sql = "SELECT customerid, companyname, contactname, address, city, postalcode, country
FROM customers WHERE customerid = ?";

$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $_GET['q']);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($cid, $cname, $name, $adr, $city, $pcode, $country);
$stmt->fetch();
$stmt->close();

echo "<table>";
echo "<tr>";
echo "<th>CustomerID</th>";
echo "<td>" . $cid . "</td>";
echo "<th>CompanyName</th>";
echo "<td>" . $cname . "</td>";
echo "<th>ContactName</th>";
echo "<td>" . $name . "</td>";
echo "<th>Address</th>";
echo "<td>" . $adr . "</td>";
echo "<th>City</th>";
echo "<td>" . $city . "</td>";
echo "<th>PostalCode</th>";
echo "<td>" . $pcode . "</td>";
echo "<th>Country</th>";
echo "<td>" . $country . "</td>";
echo "</tr>";
echo "</table>";

*/

/*
  $first_name = $_POST['firstname'];
  $last_name = $_POST['lastname'];
  $when_it_happened = $_POST['whenithappened'];
  $how_long = $_POST['howlong'];
  $how_many = $_POST['howmany'];
  $alien_description = $_POST['aliendescription'];
  $what_they_did = $_POST['whattheydid'];
  $fang_spotted = $_POST['fangspotted'];
  $email = $_POST['email'];
  $other = $_POST['other'];
//этот пример с Ютуба
  define ('DB_HOST', 'sql110.epizy.com');
  define('DB_USER', 'epiz_33750066');
  define ('DB_PASSWORD', 'Zt27Ua6LVo2i8Cm');
  define ('DB_NAME','epiz_33750066_aliendatabase');

  $mysql = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
  if ($mysql->connect_errno) exit ('ошибка подключения к БД');
  if ($mysql) echo 'успешный коннект';
  $mysql-> set_charset('utf8');

  /*
  $query = "INSERT INTO aliens_abduction (first_name, last_name, when_it_happened, how_long, " .
  "how_many, alien_description, what_they_did, fang_spotted, other, email) " .
  "VALUES ('$first_name', '$last_name', '$when_it_happened', '$how_long', '$how_many', " .
  "'$alien_description', '$what_they_did', '$fang_spotted', '$other', '$email')";
  

$query = "SELECT * from `aliens_abduction`";



//result = $conn->query($query);
//echo '<br/>'.$result;

$result = mysqli_query($mysql, $query)
  or die('Error querying database.');

 // $result2 = mysqli_query($mysql, $query2)
 // or die('Error querying database.');

 
$result = $conn->query($query);
  
    echo $result;



mysqli_close($dbc);

/* ЭТОТ пример из HEAD FIRST

  $dbc = mysqli_connect( 'sql113.epizy.com', 'epiz_34231700', 'A1WpW1swdtev', 'epiz_34231700_score')
    or die('Error connecting to MySQL servesssssrrrrr.');
  

  $query = "INSERT INTO score (first_name, last_name, when_it_happened, how_long, " .
    "how_many, alien_description, what_they_did, fang_spotted, other, email) " .
    "VALUES ('$first_name', '$last_name', '$when_it_happened', '$how_long', '$how_many', " .
    "'$alien_description', '$what_they_did', '$fang_spotted', '$other', '$email')";

  $result = mysqli_query($dbc, $query)
    or die('Error querying database.');

  mysqli_close($dbc);
*/


/*
  echo 'Thanks for submitting the form.<br />';
  echo 'You were abducted ' . $when_it_happened;
  echo ' and were gone for ' . $how_long . '<br />';
  echo 'Number of aliens: ' . $how_many . '<br />';
  echo 'Describe them: ' . $alien_description . '<br />';
  echo 'The aliens did this: ' . $what_they_did . '<br />';
  echo 'Was Fang there? ' . $fang_spotted . '<br />';
  echo 'Other comments: ' . $other . '<br />';
  echo 'Your email address is ' . $email;


 $include =  include ("INCLUDED2.html");
 //if ($include)
 //{echo '<h1>'.$include.'</h1>';}
 
 // readfile("INCLUDED.html");
  $query = " CREATE TABLE score (
  Nick varchar(255),
  Place varchar(255),
  Dict varchar(255),
  Timer varchar(255),
  Score varchar(255) )
";

SELECT * FROM score ORDER BY Score


//$result2 = $_GET['q'];
//$result3 = json_decode($result2);

$dbc = mysqli_connect('sql113.epizy.com', 'epiz_34231700', 'A1WpW1swdtev', 'epiz_34231700_score')
or die('Error connecting to MySQL servesssssrrrrr.');
//работает! тест на дабл
//$query = "INSERT INTO score (Nick, Timer, Dict, Score) " .
  //  "VALUES ('$result3->name', '$result3->seconds', '$result3->DICT', ../.$result3->score)";
    $query = "SELECT Nick, Place, Score FROM score";
   //$arr = mysqli_fetch_row($query);

$result = mysqli_query($dbc, $query)
or die('Error querying database.');

//$row = mysql_fetch_array($result);

mysqli_close($dbc);


//работает
//$result4 =  json_encode($result);
//echo 'ssss';
//echo $arr;
*/

$result2 = $_GET['q'];
$result3 = json_decode($result2);

//https://www.geeksforgeeks.org/how-to-fetch-data-from-the-database-in-php/
$servername = "sql113.epizy.com";
$username = "epiz_34231700";
$password = "A1WpW1swdtev";
$databasename = "epiz_34231700_score";

// CREATE CONNECTION
$conn = new mysqli($servername,
  $username, $password, $databasename);

// GET CONNECTION ERRORS
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL QUERY "SELECT * FROM `score` ORDER BY Score;" .
//$query = "INSERT INTO score (Nick, Place, Timer, Dict, Score) " .  "VALUES ('$result3->name', '$result3->place', '$result3->seconds', '$result3->DICT', '$result3->score');";


// FETCHING DATA FROM DATABASE EXP -> МУЛЬТИЗАПРОС есть multiquery
// CAST - сбор
$conn->query("INSERT INTO score (Nick, Place, currentTime, Timer, Dict, Score) " .  "VALUES ('$result3->name', '$result3->place', '$result3->currentTime', '$result3->seconds', '$result3->DICT', '$result3->score');");
$result = $conn->query("SELECT * FROM `score` ORDER BY CAST(Score AS INTEGER) DESC LIMIT 10;");
// DESC --- To sort the records in DESCending order, use the DESC keyword.
// INTEGER нужен для сортировки как таковой
  if ($result->num_rows > 0) 
  {
      // OUTPUT DATA OF EACH ROW, в виде ассоц массива
      // how to make a count-l number
     $counter=1;
      while($row = $result->fetch_assoc())
      {
          echo  "<br>" . $counter . " <i class ='red'>" .
           $row["Nick"]. " from " . 
           $row["Place"]. " - </i><br>" .
           $row["Dict"]. " - " .
           $row["Timer"]. "sec. - "  .
             $row["Score"]. "%";
             $counter =  $counter + 1;
           //$row["Dict"]. " - " . 
      }
  } 
  else {
      echo "0 results";
  }

  $conn->close();

?>

  </body>