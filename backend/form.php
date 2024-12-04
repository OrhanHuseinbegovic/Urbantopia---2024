<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Prikupite podatke iz forme
    $fullname = htmlspecialchars($_POST['fullname']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);
    
    // Postavite primaoca i naslov
    $to = "info@urbantopia.ba"; // Zamijenite s vašom email adresom
    $subject = "Novi upit za Urbantopiu od: $fullname";

    // Sastavite email poruku za administratora
    $body = '
    <!DOCTYPE html>
    <html lang="bs">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Novi upit za Urbantopiu</title>
        <style>
            @media (max-width: 600px) {
                a {
                    display: block;
                    margin: 10px auto;
                    width: 80%;
                }
            }
        </style>
    </head>
    <body style="font-family: Arial, sans-serif; background-color: #f9f9f9; margin: 0; padding: 0;">
        <div style="max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="padding: 20px; background-color: #007BFF; color: #ffffff; text-align: center;">
                <h2 style="margin: 0;">Novi upit za Urbantopiu</h2>
            </div>
            <div style="padding: 20px;">
                <p style="color: #555; line-height: 1.5; margin-bottom: 20px;">
                    <strong>Ime i prezime:</strong> '.$fullname.'<br>
                    <strong>Email:</strong> '.$email.'<br>
                    <strong>Telefon:</strong> '.$phone.'<br>
                </p>
                <p style="color: #555; line-height: 1.5; margin-bottom: 20px;">
                    <strong>Poruka:</strong><br>
                    '.nl2br($message).'
                </p>
                <div style="margin-top: 30px; text-align: center;">
                    <a href="mailto:'.$email.'" style="text-decoration: none; background-color: #28a745; color: #ffffff; padding: 10px 20px; border-radius: 5px; margin-right: 10px; display: inline-block;">Odgovori na email</a>
                    <a href="tel:'.$phone.'" style="text-decoration: none; background-color: #dc3545; color: #ffffff; padding: 10px 20px; border-radius: 5px; margin-left: 10px; display: inline-block;">Pozovi korisnika</a>
                </div>
            </div>
        </div>
    </body>
    </html>
    ';



    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Pošaljite email administratoru
    if (mail($to, $subject, $body, $headers)) {
        // Email za korisnika sa HTML stilom
        $user_subject = "Hvala što ste nas kontaktirali - Urbantopia";
        $user_body = '
        <!DOCTYPE html>
        <html lang="bs">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Hvala što ste nas kontaktirali</title>
        </head>
        <body style="font-family: Arial, sans-serif; background-color: #f9f9f9; margin: 0; padding: 0;">
            <div style="max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                <div style="padding: 20px; text-align: center; background-color: #f9f9f9;">
                    <img src="https://urbantopia.ba/ApartmaniMak/assets/urbantopia/Urban_Topia.png" alt="Urbantopia" style="margin-bottom: 20px; max-width: 150px; background-color: #d3d3d3; padding: 10px; border-radius: 8px;">
                </div>
                <div style="padding: 20px;">
                    <h2 style="margin: 0 0 10px; color: #333;">Hvala što ste nas kontaktirali, '.$fullname.'!</h2>
                    <p style="color: #555; line-height: 1.5; margin-bottom: 20px;">
                        Ovo je kopija vaše poruke:
                    </p>
                    <blockquote style="border-left: 4px solid #ddd; margin: 10px 0; padding-left: 10px; color: #555;">
                        '.nl2br($message).'
                    </blockquote>
                    <p style="color: #555; line-height: 1.5; margin-bottom: 20px;">
                        Ako želite saznati više o nama, posjetite našu web stranicu na <a href="https://www.urbantopia.ba" style="color: #007BFF; text-decoration: none;">www.urbantopia.ba</a> a naš tim će vam odgovoriti u najbržem mogućem roku.
                    </p>
                    <p style="color: #555; line-height: 1.5; margin-bottom: 20px;">
                        Pozdrav,<br>Vaš Urbantopia tim
                    </p>
                </div>
            </div>
        </body>
        </html>
        ';

        // Zaglavlja za HTML email
        $user_headers = "MIME-Version: 1.0\r\n";
        $user_headers .= "Content-type: text/html; charset=UTF-8\r\n";
        $user_headers .= "From: noreply@urbantopia.ba\r\n";

        // Slanje emaila korisniku
        if (mail($email, $user_subject, $user_body, $user_headers)) {
            echo "Poruka je uspješno poslana.";
        } else {
            echo "Došlo je do greške prilikom slanja emaila korisniku.";
        }
    } else {
        echo "Došlo je do greške prilikom slanja poruke.";
    }
}
?>
