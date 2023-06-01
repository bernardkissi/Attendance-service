<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        }

        .center-div {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    </style>
</head>

<body class="bg-red">
    <div>
        Sunday Service, 27.08.2023
    </div>
    <div class="center-div">
        <img src="data:image/png;base64,{{ base64_encode($url) }}" />
    </div>
    <div style="color: #475569">e
        SCAN QRCODE
    </div>
</body>

</html>