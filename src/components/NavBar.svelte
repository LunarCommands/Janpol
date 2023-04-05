<div id="menu">
  <div id="menu-items">
    <div class="menu-item text-gray-300">
      <a href="akcesoria">Akcesoria Meblowe</a>
    </div>
    <div class="menu-item text-gray-300">
      <a href="park-maszynowy">Park maszynowy</a>
    </div>
    <div class="menu-item text-gray-300">
      <a href="realizacje">Realizacje</a>
    </div>
    <div class="menu-item text-gray-300"><a href="kontakt">Kontakt</a></div>
    <div class="menu-item text-gray-300"><a href="o-nas">O nas</a></div>
  </div>

  <div id="menu-background-image" />
</div>

<style>
  #menu {
    align-items: center;
    display: flex;
    height: 100vh;
    width: 100vw;
  }

  #menu-items {
    margin-right: clamp(4rem, 10vw, 40rem);
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }

  #menu-background-image {
    background-image: url("/welder-janpol.jpg");
    background-position: center 60%;
    background-size: 120vmax;
    height: 100%;
    left: 0px;
    opacity: 0.9;
    position: absolute;
    top: 0px;
    transition: opacity 800ms ease, background-size 800ms ease,
      background-position 800ms ease;
    width: 100%;
    z-index: 0;
  }

  #menu-items:hover ~ #menu-background-image {
    background-size: 100vmax;
    opacity: 1;
  }

  #menu-items:hover > .menu-item {
    opacity: 0.3;
  }

  #menu-items:hover > .menu-item:hover {
    opacity: 1;
  }

  .menu-item {
    cursor: pointer;
    display: block;
    font-size: clamp(2rem, 2vw, 4rem);
    padding: clamp(0.25rem, 0.5vw, 1rem) 0rem;
    text-decoration: none;
    transition: opacity 400ms ease;
  }

  .menu-item a {
    text-align: right;
    display: block;
  }
</style>
