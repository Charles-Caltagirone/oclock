<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <script src="https://kit.fontawesome.com/9a09d189de.js" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
    <title>Chronomètre</title>
</head>

<body>
    <nav>
        <?php
        include("./header.php");
        ?>
    </nav>
    <div class="contenu">
        <!-- <div class="timerContenu"> -->
            <div id="timerStart"><time>00:00:00</time></div>
            <button id="start" placeholder=""><i id="startIcon" class="fa-solid fa-play"></i></button>
            <button id="tourBtn"><i class="fa-solid fa-stopwatch-20"></i></button>
            <button id="reset"><i class="fa-solid fa-trash-can-arrow-up"></i></button>
        <!-- </div> -->
        <div id="tour"></div>
    </div>
    <script src="../js/chrono.js"></script>
</body>

</html>