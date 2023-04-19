<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../css/style.css" />
    <title>Document</title>
</head>

<body>
    <nav>
        <?php
        include("./header.php");
        ?>
    </nav>
    <form action="">
        <input type="number" id="selectTimer" placeholder="Choisir"/>
        <input type="button" id="up" value="up" placeholder="" />
        <input type="button" id="down" value="down" placeholder="" />
        <input type="button" id="start" value="start" placeholder="" />
        <input type="button" id="pause" value="pause" placeholder="" />
        <input type="button" id="reset" value="reset" placeholder="" />
    </form>
    <div id="timer">
    </div>
    <script src="../js/minuteur.js"></script>
</body>

</html>