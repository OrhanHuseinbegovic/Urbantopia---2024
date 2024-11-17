<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Prikupite podatke iz forme
    $fullname = htmlspecialchars($_POST['fullnametwo']);
    $email = htmlspecialchars($_POST['emailtwo']);
    $phone = htmlspecialchars($_POST['contacttwo']);
    $message = htmlspecialchars($_POST['messagetwo']);
    

    // Postavite primaoca i naslov
    $to = "info@urbantopia.ba"; // Zamijenite s vašom email adresom
    $subject = "Novi upit za Urbantopiu od: $fullname";

    // Sastavite email poruku
    $body = "Ime i prezime: $fullname\nEmail: $email\nPoruka od $fullname:\n$message";

    // Zaglavlja emaila
    $headers = "Od: $email\r\n";
    $headers .= "Odgovori na: $email\r\n";

    // Pošaljite email
    if (mail($to, $subject, $body, $headers)) {
        // Email za korisnika
        $user_subject = "Hvala što ste nas kontaktirali - Urbantopia";
        $user_body = "Poštovani $fullname,\n\nHvala što ste nas kontaktirali. Ovo je kopija vaše poruke:\n\n$message\n\nPozdrav,\nVaš Urbantopia tim";
        $user_headers = "From: noreply@urbantopia.ba";

        // Slanje emaila korisniku
        if (mail($email, $user_subject, $user_body, $user_headers)) {
            echo "Poruka je uspješno poslana. ";
        } else {
            echo "Došlo je do greške prilikom slanja poruke.";
        }
    } else {
        echo "Došlo je do greške prilikom slanja poruke.";
    }
}
?>