import requests   # Pour envoyer des requêtes HTTP (API Nominatim & Overpass)
import json       # Pour traiter les données JSON renvoyées par les API
import csv        # Pour exporter les résultats dans un fichier CSV
import os         # Pour gérer les fichiers (vérifier/supprimer un fichier existant)

# --- Fonction pour obtenir les coordonnées d'une ville ---
def coordonne_ville(nom_Ville):
    """
    Récupère les coordonnées géographiques (latitude, longitude) d'une ville
    en utilisant le service Nominatim d'OpenStreetMap.
    """
    url = "https://nominatim.openstreetmap.org/search"
    params = {
        "q": nom_Ville,       # Nom de la ville saisi par l'utilisateur
        "format": "json",     # Format de sortie
        "limit": 1            # On ne garde que le premier résultat
    }
    # Envoi de la requête HTTP
    response = requests.get(url, params=params, headers={"User-Agent": "python-script"})
    data = response.json()
    if data:  # Si une ville correspondante est trouvée
        return float(data[0]["lat"]), float(data[0]["lon"])
    else:     # Sinon, renvoie None
        return None, None

# --- Programme principal ---
ville = input("Entrez le nom d'une ville : ")  # Demande à l'utilisateur la ville
lat_ville, lon_ville = coordonne_ville(ville)  # Récupération des coordonnées

# Vérification si la ville existe
if lat_ville is None:
    print("Erreur : Ville introuvable. Veuillez vérifier l'orthographe et réessayer.")
else:
    # Paramètres supplémentaires demandés à l'utilisateur
    rayon = int(input("Quel est votre rayon de recherche ? (en km) ")) * 1000  # Conversion km → m
    nb_element = int(input("Combien d'éléments voulez-vous afficher ? "))

    # URL de l'API Overpass (interroge la base Open Street Map)
    overpass_url = "https://overpass-api.de/api/interpreter"
    
    # Requête en langage Overpass QL pour chercher les restaurants ("amenity=restaurant")
    query = f"""
    [out:json][timeout:25]; 
    (
      node["amenity"="restaurant"](around:{rayon},{lat_ville},{lon_ville});
      way["amenity"="restaurant"](around:{rayon},{lat_ville},{lon_ville});
      relation["amenity"="restaurant"](around:{rayon},{lat_ville},{lon_ville});
    );
    out center;
    """
    #[out:json][timeout:25] Permet d'avoir une sortie en json et la duré max de la requete est de 25 secondes 

    # Envoi de la requête à Overpass et récupération des données
    response = requests.post(overpass_url, data={'data': query})
    data = response.json()

    # Liste qui va contenir les restaurants trouvés
    restaurants = []

    # Parcours des résultats JSON
    for element in data['elements']:
        tags = element.get('tags', {})  # Récupération des informations descriptives
        name = tags.get('name', "Inconnu")  # Nom du restaurant (si renseigné)
        cuisine = tags.get('cuisine', "Non précisé")  # Type de cuisine
        city = tags.get('addr:city', "")  # Ville
        street = tags.get('addr:street', "")  # Rue (si absente → vide)
        housenumber = tags.get('addr:housenumber', "")  # Numéro de rue
        postcode = tags.get('addr:postcode', "")  # Code postal

        # Les coordonnées dépendent du type d'élément (node/way/relation)
        if element['type'] == 'node':
            lat_elem, lon_elem = element['lat'], element['lon']
        else:
            lat_elem, lon_elem = element['center']['lat'], element['center']['lon']

        # --- Construction de l'adresse ---
        if street:  # Si une rue est renseignée → on peut ajouter ville et CP
            address_parts = [housenumber, street, postcode, city]
        else:  # Sinon, on n'affiche que "Inconnu" (pas de ville toute seule)
            address_parts = []

        address = ", ".join([part for part in address_parts if part])

        # Ajout du restaurant dans la liste
        restaurants.append({
            "nom": name,
            "cuisine": cuisine,
            "adresse": address if address else "Adresse non précisée",
            "lat": lat_elem,
            "lon": lon_elem
        })

    # --- Affichage console ---
    print(f"\n Restaurants trouvés à {ville} (rayon {rayon} m) : {len(restaurants)}")
    for resto in restaurants[:nb_element]:
        print(f"- {resto['nom']} ({resto['cuisine']}) – {resto['adresse']}  , Latitude et Longitude : {resto['lat']}, {resto['lon']}")

    # --- Suppression d'un ancien fichier CSV s'il existe ---
    if os.path.exists("restaurants.csv"):
        os.remove("restaurants.csv")
        

    # --- Export des résultats dans un fichier CSV ---
    with open("restaurants.csv", "w", newline="", encoding="utf-8") as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=["nom", "cuisine", "adresse", "lat", "lon"], delimiter=";")
        writer.writeheader()        # Écrit l'en-tête (noms des colonnes)
        writer.writerows(restaurants)  # Écrit chaque restaurant dans le fichier

    print(f"\n Les résultats ont été exportés dans le fichier : restaurants.csv")


