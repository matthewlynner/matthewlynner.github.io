<?php
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From: TCStrength';
    $to = 'matthewlynner@gmail.com';
    $subject = 'Hello';
    
    $body = "From: $name\n E-Mail: $email\n Message:\n $message";
    
    if ($_POST['submit'] && $human == '4') {
        if (mail ($to, $subject, $body, $from)) {
            echo '<p>Your message has been sent!</p>';
        } else {
            echo '<p>Something went wrong, go back and try again!</p>';
        }
    } else if ($_POST['submit'] && $human != '4') {
        echo '<p>You answered the anti-spam question incorrectly!</p>';
    }
?>
