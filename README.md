# mi-vitrine mi-shop

Sur la base de ce template:

- rendre fonctionnelle :
  - le menu burger
    - sur la vérification d'un état, le clic sur le bouton burger va ouvrir le menu (qui devra être fonctionnelle)
      - au clic sur un lien du menu, on va se rendre sur ce composant, le menu devra se fermer
      - si le menu est ouvert, au clic sur le bouton burger, le menu se fermera
  - le panier
    - un context + le local storage
      - au clic sur un produit on ajoute son id dans le context, le context va également sauvegarder le nouvel état du panier dans le LS (donnée multiple (complexe))
        - si un produit existe déjà on incrément la quantité
        - s'il n'existe pas, on lui affecte une quantité à 1
      - on veut refléter le nombre de produit sur l'icône du panier dans le header
        - l'icône du panier permettra de se rendre sur le composant Panier pour afficher tous les produits inclus
    - sur la page home, en plus de l'ajout dans le panier, au clic sur le lien see more, se rendre sur la page détail du produit et depuis cette page permettre également l'ajout dans le panier



Lien repo'