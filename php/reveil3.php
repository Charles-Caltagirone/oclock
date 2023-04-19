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
    <h1>Système de réveil</h1>
    <p>Heure actuelle: <span id="currentTime"></span></p>
    <form>
        <label for="time">Heure de l'alarme:</label>
        <input type="time" id="time" name="time">
        <label for="name">Nom de l'alarme:</label>
        <input type="text" id="name" name="name">
        <input type="button" value="Ajouter" onclick="addAlarm()">
    </form>
    <ul id="alarmList"></ul>
    <script src="../js/reveil.js"></script>
</body>

</html>