<?php include 'sendemail.php'; ?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Contact Form</title>
    <link rel="stylesheet" href="message.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css">
  </head>
  <body>

    <!--alert messages start-->
    <?php echo $alert; ?>
    <!--alert messages end-->

    <!--contact section start-->
    <div class="contact-section">
      <div class="contact-info">
        <div><i class="fas fa-map-marker-alt"></i>Lycée de Coulommiers</div>
        <div><i class="fas fa-envelope"></i>sekkeiofficial@outlook.com</div>
        <div><i class="fas fa-phone"></i>+33 000000000</div>
        <div><i class="fas fa-clock"></i>Mon - Fri 8:00 AM to 5:00 PM</div>
      </div>
      <div class="contact-form">
        <h2>Contacter Nous</h2>
        <form class="contact" action="" method="post">
          <input type="text" name="name" class="text-box" placeholder="Nom" required>
          <input type="email" name="email" class="text-box" placeholder="Email" required>
          <textarea name="message" rows="5" placeholder="Message" required></textarea>
          <input type="submit" name="submit" class="send-btn" value="Envoyer">
        </form>
      </div>
    </div>
    <!--contact section end-->

    <script type="text/javascript">
    if(window.history.replaceState){
      window.history.replaceState(null, null, window.location.href);
    }
    </script>

  </body>
</html>
      