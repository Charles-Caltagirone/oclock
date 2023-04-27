<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../css/style.css">
    <script src="https://kit.fontawesome.com/9a09d189de.js" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">

    <title>Document</title>
</head>

<body>
    <nav>
        <?php
        include("./header.php");
        ?>
    </nav>
    <div class="contenu">
        <div id="timer">
        </div>
        <form action="">
            <input type="number" class="inputTimeText" id="selectTimer" placeholder="Choisir" />
            <button type="button" id="up" placeholder=""><i class="fa-solid fa-up-long"></i></button>
            <button type="button" id="down" placeholder=""><i class="fa-solid fa-down-long"></i></button>
            <button type="button" id="start" placeholder=""><i class="fa-solid fa-play"></i></button>
            <button type="button" id="pause" placeholder=""><i class="fa-solid fa-pause"></i></button>
            <button type="button" id="reset" placeholder=""><i class="fa-solid fa-trash-can-arrow-up"></i></button>
        </form>
    </div>
    <script src="../js/minuteur.js"></script>
</body>

</html>