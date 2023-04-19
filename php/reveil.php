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
    <main>
        <div id="timeDiv"></div><br>

        <input type="time" id="heure">
        <input type="text" id="alarmText" placeholder="Description">
        <input type="button" id="confirm" value="Valider">
        <div id="warning"></div>
        <div id="alarmList"></div>
    </main>
    <script src="../js/reveil.js"></script>
</body>

</html>