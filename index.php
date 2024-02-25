<!doctype html>
<html>

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
  <title>Replit</title>
  <link href="css/style.css" rel="stylesheet" type="text/css" />
  <link href="css/mediaQueri.css" rel="stylesheet" type="text/css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
</head>

<body>
  <header>
    <div class="box">
      <div class="logo">
        <img src="Image/logo ECF.JPG"></img>
      </div>
      <nav class="navab">
        <li><a href="index.php">Accueil</a></li>
        <li><a href="#carouselExampleCaptions">Activités</a></li>
        <li><a href="evenement.php">Événements</a></li>
        <li><a href="contact.php">Contact</a></li>
      </nav>
      <div class="dropdown">
        <button class="btn btn-link dropdown-btn-lg" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
          </svg>

        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="index.php">Accueil</a></li>
          <li><a class="dropdown-item" href="#activite">Activité</a></li>
          <li><a class="dropdown-item" href="evenement.php">Evènements</a></li>
          <li><a class="dropdown-item" href="contact.php">Contact</a></li>
        </ul>
      </div>
    </div>
  </header>
  <main>
    <section class="main-content">
      <div class="image-accueil">
        <img src="Image/baniere accueil.JPG" atl="image de la page d'accueil" />
        <div class="text-acceuil">
          Bienvenue sur Jeunesse Sport avec sa Ville
        </div>
      </div>

      <div class="text">
        <h3>L'association en quelques mots</h3>
        <span>Bienvenue chez [Nom de l'Association Sportive] ! Depuis [année de
          création], nous rassemblons passionnés et amateurs de sports au sein
          d'une communauté dynamique. Nos activités variées, telles que [liste
          des principales activités sportives], offrent à chacun une
          opportunité de s'entraîner et de s'épanouir, que vous soyez débutant
          ou athlète chevronné. Fondée sur les principes de l'esprit d'équipe,
          du fair-play et du plaisir, notre association favorise la
          camaraderie et l'amitié. Rejoignez-nous pour repousser vos limites,
          célébrer les succès et partager votre passion pour le sport.
        </span>
      </div>
      <div class="text" id="activite">
        <h3>Nos activités</h3>
      </div>
      <div class="activite">
        <div class="sport">
          <img src="Image/sport basket.JPG" atl="image basket" />
          Basket
        </div>

        <div class="sport">
          <img src="Image/sport  foot.JPG" atl="image foot" />
          Foot
        </div>

        <div class="sport">
          <img src="Image/sport course.JPG" atl="image départ de course à pied" />
          Athletisme
        </div>

        <div class="sport">
          <img src="Image/sport equitation.JPG" atl="image d'un cavalière dans manège" />
          Equitation
        </div>
      </div>
      <!--Carrousel boostrap visible en Mode tablette et ordinateur -->
      <div id="carouselExampleCaptions" class="carousel slide " data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="Image/sport  foot.JPG" class="d-block w-100" alt="joueur de foot balle">
            <div class="carousel-caption d-none d-md-block">
              <h5>Football en salle ou en extérieur</h5>
              <p>Vient faire du foot avec nous.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="Image/sport basket.JPG" class="d-block w-100" alt="peignet de basquet">
            <div class="carousel-caption d-none d-md-block">
              <h5>Basketball</h5>
              <p>Rejoins notre équipe de basket.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="Image/sport equitation.JPG" class="d-block w-100" alt="Une cavalière sur son cheval">
            <div class="carousel-caption d-none d-md-block">
              <h5>Équitation</h5>
              <p>La discipline au contact de l'animal.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="Image/sport course.JPG" class="d-block w-100" alt="courreur sur les startin block">
            <div class="carousel-caption d-none d-md-block">
              <h5>Athlétisme</h5>
              <p>Course à pied mais pas que .</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev bg-transparent border-0" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next bg-transparent border-0" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="text">
        <h3>Nos évènements</h3>
      </div>
      <div class="text">
        <p>
          Nous organisons des évènements réguliers pour promouvoir le sport et
          la culture avec les la ville dans des lieu de rencontre sport
          intergénérationnel.
          Rejoignez-nous pour partager l'un de nos nombreux évenements orgnisé
          tout au long l'année.
          Pour en savoir plus viens t'aventurer avec
          <a href="evenement.php">nous </a>
        </p>
      </div>
    </section>
  </main>

  <script type="module" src="script.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>
<footer>
  <div class="footer-content">
    <div class="footer-navig">
      <nav>
        <ul>
          <li>
            <h5>Liens</h5>
          </li>
          <li><a href="index.php">Accueil</a></li>
          <li><a href="#activite">Les activités</a></li>
          <li><a href="evenement.php">Événements</a></li>
          <li><a href="contact.php">Contact</a></li>
        </ul>
      </nav>
    </div>
    <div class="footer-contact">
      <li>
        <h5>Contactez-nous</h5>
      </li>
      <li>Téléphone:0101010101</li>
      <li>Email:jsv@jsv.com</li>
      <li>Adresse: 10 rue du sport 75018</li>
      <li><a href="contact.php">Formulaire de contact</a></li>
    </div>
    <div class="footer-social">
      <li>
        <h5>Réseaux sociaux</h5>
      </li>
      <li>
        <a href="https://www.facebook.com/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
          </svg>Facebook</a>
      </li>
      <li>
        <a href="https://www.instagram.com/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
          </svg>Instagram</a>
      </li>
      <li>
        <a href="https://www.twitter.com/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>Twitter</a>
      </li>
    </div>
  </div>
  <div class="footer-copyright">
    <p>&copy; 2023 Jeunesse Sport avec sa Ville. Tous droits réservés</p>


  </div>
</footer>

</html>