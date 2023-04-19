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
    <h1>Alarme</h1>
    <div id="timeDiv"></div>
    <p id="current-time"></p>
    <form>
        <label for="time">Heure :</label>
        <input type="time" id="time" name="time">
        <br><br>
        <label for="name">Nom de l'alarme :</label>
        <input type="text" id="name" name="name">
        <br><br>
        <input type="button" value="Ajouter alarme" onclick="addAlarm()">
    </form>
    <div id="warning"></div>
    <div id="alarms"></div>
    <script src="../js/reveil.js"></script>
</body>

</html>