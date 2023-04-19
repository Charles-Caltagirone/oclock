<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chronomètre</title>
</head>

<body>
    <nav>
        <?php
        include("./header.php");
        ?>
    </nav>
    <h1><time>00:00:00</time></h1>
    <button id="strt">start/stop</button>
    <button id="tourBtn">tour</button>
    <button id="rst">reset</button>
    <div id="tour"></div>
    <script src="../js/chrono.js"></script>
</body>

</html>