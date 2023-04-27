<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <script src="https://kit.fontawesome.com/9a09d189de.js" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
    <title>Réveil</title>
</head>

<body>
    <nav>
        <?php
        include("./header.php");
        ?>
    </nav>
    <div class="contenu">
        <div id="timeDiv"></div>
        <div id="errorMessage" class="alarmText"></div>
        <input type="time" class="inputTimeText" id="time" required />
        <input type="text" class="inputTimeText" id="name" required />
        <button onclick="addAlarm()"><i class="fa-solid fa-check"></i></button>
        <br>
        <p class="alarmText">Alarmes programmées : </p>
        <div id="alarmsPost" class="alarmList">
        </div>
        <br>
        <p class="alarmText">Alarmes passées : </p>
        <div id="alarmsPast" class="alarmList">
        </div>
    </div>
    <script src="../js/reveil.js"></script>
</body>

</html>