<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- <link rel="stylesheet" href="./css/style.css" /> -->
  <link rel="stylesheet" href="./css/horloge.css">
  <script src="https://kit.fontawesome.com/9a09d189de.js" crossorigin="anonymous"></script>
  <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
  <title>Horloge</title>
</head>

<body>
  <nav>
    <?php
    include("./php/header_index.php");
    ?>
  </nav>
  <main>
    <div class="contenu" id="time"></div>
  </main>
  <script src="./js/horloge.js"></script>
</body>

</html>