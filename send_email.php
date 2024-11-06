<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = $_POST['fullName'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Set the recipient email address (change it to your own email)
    $to = "maitrisuthar.prismhrc@gmail.com";
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Craft the email content
    $emailContent = "Name: $fullName\nEmail: $email\nMobile: $mobile\nSubject: $subject\n\nMessage: $message";

    // Send the email
    if (mail($to, $subject, $emailContent, $headers)) {
        // If the email is successfully sent
        echo json_encode(["success" => true]);
    } else {
        // If the email fails to send
        echo json_encode(["success" => false]);
    }
}
?>
