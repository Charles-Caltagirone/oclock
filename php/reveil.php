<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Réveil</title>
</head>

<body>
    <nav>
        <?php
        include("./header.php");
        ?>
    </nav>
    <h1>Réveil</h1>
    <p id="currentTime"></p>
    <input type="time" id="timeInput">
    <input type="text" id="messageInput">
    <button onclick="addAlarm()">Ajouter une alarme</button>
    <h2>Alarmes passées</h2>
    <div id="pastAlarms"></div>
    <h2>Alarmes à venir</h2>
    <div id="futureAlarms"></div>
    <script src="../js/reveil.js"></script>
</body>

</html>