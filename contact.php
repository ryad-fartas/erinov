<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // --- Sécuriser les données ---
    $nom = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $sujet = htmlspecialchars(trim($_POST["subject"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    // --- Vérifier les champs ---
    if (empty($nom) || empty($email) || empty($message)) {
        echo "❌ Veuillez remplir tous les champs.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "❌ Adresse e-mail invalide.";
        exit;
    }

    // --- Détails du message ---
    $destinataire = "ryadfatas.rf@gmail.com";
    $titre = "📬 Message du site : $sujet";
    $contenu = "
        <h3>Nouveau message depuis le site de l'école</h3>
        <p><strong>Nom :</strong> $nom</p>
        <p><strong>Email :</strong> $email</p>
        <p><strong>Sujet :</strong> $sujet</p>
        <p><strong>Message :</strong><br>$message</p>
    ";

    // --- En-têtes du mail ---
    $headers  = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";
    $headers .= "From: $nom <$email>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";

    // --- Envoi du mail ---
    if (mail($destinataire, $titre, $contenu, $headers)) {
        echo "✅ Message envoyé avec succès ! Merci de nous avoir contactés.";
    } else {
        echo "⚠️ Erreur : le message n’a pas pu être envoyé.";
    }
} else {
    echo "🚫 Accès non autorisé.";
}
?>
