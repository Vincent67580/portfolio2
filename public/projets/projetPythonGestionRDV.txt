"""
BONNET Vincent

PROJET GESTION DE RENDEZ-VOUS EN PYTHON 
Fonctionnalités :

création de la base de donnée, création de la table rendez vous, affichage de tout les rendez-vous pris, ajouter un rendez-vous avec 
envoie de mail lors de la prise de rdv , suppression d'un rdv , mail suppression de RDV
- ajout compte utilisateur avec inscription et connexion
     ajout admin , affichage des rdv structuré, affichage des compte utilisateur pour admin
     affiche profil de l'utilisateur et modification de celui ci possible
     modification d'un rdv
"""

import sqlite3 #Gestion base de donnée
from datetime import datetime # Vérification des format date pour prise de rdv
import getpass #n'affiche pas les saisie
import re # vérifie des chaine de caractere

#Gestion envoie mail
import smtplib, ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


#Variable globale
chemin_base_donnee = "base_donnee.db"
utilisateur_connecte = None
infos_utilisateur = {}

def connexion_base_donnee():
    try:
        # Connexion à la base de donnée
        conn = sqlite3.connect(chemin_base_donnee)
        return conn
    except sqlite3.Error as e:
        print(" Erreur SQLite :", e)
        return None

def deconnexion_base_donnee(conn):
    if conn:
        conn.close()


def drop_table():
    try:
        conn = connexion_base_donnee()
        cursor = conn.cursor()
        cursor.executescript("""
            DROP TABLE IF EXISTS utilisateurs;
            DROP TABLE IF EXISTS rendez_vous;
        """)
        conn.commit()
        print("Suppression des tables réussie.")
    except sqlite3.Error as e:
        print("Erreur SQLite :", e)
    finally:
        deconnexion_base_donnee(conn)

def creation_tables():
    try:
        conn = connexion_base_donnee()
        cursor = conn.cursor()
        cursor.execute("""
        CREATE TABLE IF NOT EXISTS utilisateurs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nom_utilisateur TEXT NOT NULL UNIQUE,
            nom TEXT NOT NULL,
            prenom TEXT NOT NULL,
            email TEXT NOT NULL,
            mot_de_passe TEXT NOT NULL
        )
    """)
        conn.commit()
        print("Table utilisateurs vérifiée/créée avec succès.")
        cursor.execute("""
                CREATE TABLE IF NOT EXISTS rendez_vous (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                id_utilisateur INTEGER NOT NULL,
                objet TEXT NOT NULL,
                date TEXT NOT NULL,
                heure TEXT NOT NULL,
                FOREIGN KEY (id_utilisateur) REFERENCES utilisateurs(id)
            )
        """)
        conn.commit()
        print("Table rendez_vous vérifiée/créée avec succès.")
        cursor.execute("SELECT * FROM utilisateurs WHERE nom_utilisateur = ?", ("admin",))
        admin = cursor.fetchone()
        if not admin:
            cursor.execute("""
                INSERT INTO utilisateurs (id,nom_utilisateur, nom, prenom, email, mot_de_passe)
                VALUES (?, ?, ?, ?, ?, ?)
            """, (0, "admin", "system", "admin", "admin", "admin"))
            conn.commit()
    except sqlite3.Error as e:
        print("Erreur SQLite :", e)
    finally:
        deconnexion_base_donnee(conn)

def email_valide(email):
    pattern = r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
    return re.match(pattern, email) is not None

def demander_saisie(message, secret=False):
    while True:
        if secret:
            saisie = getpass.getpass(message)
        else:
            saisie = input(message)
        if saisie == "0" or saisie == "":
            print("Saisie annulée.")
            return None
        return saisie

def inscription():
    print(f"{' INSCRIPTION ':=^100}")
    print("Vous pouvez taper '0' ou laisser un champ vide à tout moment pour annuler l'inscription.\n")
    nom = demander_saisie("Votre nom :\n")
    if nom is None: 
        return
    else :
        nom=nom.upper()
    
    prenom = demander_saisie("Votre prénom :\n")
    if prenom is None: 
        return
    else:
        prenom=prenom.capitalize()
    
    
    nom_utilisateur = demander_saisie("Votre d'utilisateur :\n")
    if nom_utilisateur is None: 
        return
    
    email = demander_saisie("Votre mail :\n")
    if email is None: 
        return
    if not email_valide(email):
        print("Adresse e-mail invalide.")
        return
    
    mot_de_passe = demander_saisie("Votre mot de passe :\n",secret=True)
    if mot_de_passe is None: 
        return

    confirmation = demander_saisie("Confirmez le mot de passe : \n",secret=True)
    if confirmation is None: 
        return

    if mot_de_passe != confirmation:
        print("Erreur, Les mots de passe ne correspondent pas.")
        return
    

    conn = connexion_base_donnee()
    cursor = conn.cursor()
    try:
        cursor.execute(
            "INSERT INTO utilisateurs (nom_utilisateur,nom,prenom,email, mot_de_passe) VALUES (?, ?, ?, ?, ?)",
            (nom_utilisateur,nom,prenom,email, mot_de_passe)
        )
        conn.commit()
        print("Compte créé avec succès !")
    except sqlite3.IntegrityError:
        print("Ce nom d'utilisateur existe déjà.")
    except sqlite3.Error as e:
        print("Erreur SQLite :", e)
    finally:
        deconnexion_base_donnee(conn)

def connexion():
    global utilisateur_connecte, infos_utilisateur
    print(f"{' CONNEXION ':=^100}")
    print("Vous pouvez taper '0' ou laisser un champ vide à tout moment pour annuler la connexion.\n")
    nom_utilisateur = demander_saisie("Nom d'utilisateur :\n")
    if nom_utilisateur is None:
        return
    mot_de_passe = demander_saisie("Mot de passe : \n",secret=True)
    if mot_de_passe is None:
        return

    conn = sqlite3.connect(chemin_base_donnee)
    cursor = conn.cursor()
    cursor.execute("""
        SELECT id, nom_utilisateur, nom, prenom, email
        FROM utilisateurs
        WHERE nom_utilisateur=? AND mot_de_passe=?
    """, (nom_utilisateur, mot_de_passe))
    user = cursor.fetchone()
    conn.close()

    if user:
        utilisateur_connecte = user[0]
        infos_utilisateur = {
            "id": user[0],
            "nom_utilisateur": user[1],
            "nom": user[2],
            "prenom": user[3],
            "email": user[4]
        }
        print(f"Connexion réussie \nBienvenue {infos_utilisateur['prenom']} {infos_utilisateur['nom']}")
    else:
        print("Identifiants incorrects")

def deconnexion():
    global utilisateur_connecte
    utilisateur_connecte = None
    print("Deconnexion réussie")

def afficher_rdv(Affichage):
    ID_utilisateur = infos_utilisateur["id"]
    conn = connexion_base_donnee()
    if conn:
        try:
            cursor = conn.cursor()
            if Affichage == "tout":
                Titre_tableau = f"Tout les rendez-vous de {infos_utilisateur['nom_utilisateur']}"
                cursor.execute("SELECT * FROM rendez_vous WHERE id_utilisateur = ?",(ID_utilisateur,))
            elif Affichage == "futur":
                Titre_tableau = f"Les prochains rendez-vous de {infos_utilisateur['nom_utilisateur']}"
                cursor.execute("SELECT * FROM rendez_vous WHERE datetime(date || ' ' || heure) >= datetime('now') AND id_utilisateur = ?",(ID_utilisateur,))
            elif Affichage == "passee":
                Titre_tableau = f"Les rendez-vous efféctué de {infos_utilisateur['nom_utilisateur']}"
                cursor.execute("SELECT * FROM rendez_vous WHERE datetime(date || ' ' || heure) < datetime('now') AND id_utilisateur = ?",(ID_utilisateur,))
            lignes = cursor.fetchall()
            if lignes:
                print(f"{Titre_tableau:-^100}")
                print(f"{'ID':<15}{'Objet':<65}{'Date':<12}{'Heure':<8}")
                print("-" * 100)
                for ligne in lignes:
                    print(f"{ligne[0]:<15}{ligne[2]:<65}{ligne[3]:<12}{ligne[4]:<8}")
            else:
                print("Aucun rendez-vous a afficher")
                return 0

        except sqlite3.Error as e:
            print("Erreur lors de l'affichage :", e)
            return 0
        finally:
            deconnexion_base_donnee(conn)

def afficher_rdv_ADMIN(Affichage):
    conn = connexion_base_donnee()
    if conn:
        try:
            cursor = conn.cursor()
            if Affichage == "tout":
                Titre_tableau = f"Tout les rendez-vous"
                cursor.execute("""
                               SELECT r.* , u.nom,u.prenom,u.nom_utilisateur
                               FROM rendez_vous r
                               JOIN utilisateurs u on u.id = r.id_utilisateur
                               ORDER BY datetime(r.date || ' ' || r.heure) ASC;
                               """)
            elif Affichage == "futur":
                Titre_tableau = f"Les prochains rendez-vous"
                cursor.execute("""
                               SELECT r.* , u.nom,u.prenom,u.nom_utilisateur
                               FROM rendez_vous r
                               JOIN utilisateurs u on u.id = r.id_utilisateur
                               WHERE datetime(date || ' ' || heure) >= datetime('now', 'localtime')
                               ORDER BY datetime(r.date || ' ' || r.heure) ASC;
                               """)
            elif Affichage == "passee":
                Titre_tableau = f"Les rendez-vous efféctué"
                cursor.execute("""
                               SELECT r.* , u.nom,u.prenom,u.nom_utilisateur
                               FROM rendez_vous r
                               JOIN utilisateurs u on u.id = r.id_utilisateur
                               WHERE datetime(date || ' ' || heure) < datetime('now','localtime')
                               ORDER BY datetime(r.date || ' ' || r.heure) ASC;
                               """)
            lignes = cursor.fetchall()
            if lignes:
                print(f"{Titre_tableau:-^100}")
                print(f"{'ID':<5}{'Utilisateur':<15}{'Nom':<15}{'Prenom':<15}{'Objet':<30}{'Date':<12}{'Heure':<8}")
                print("-" * 100)
                for ligne in lignes:
                    print(f"{ligne[0]:<5}{ligne[7]:<15}{ligne[5]:<15}{ligne[6]:<15}{(ligne[2][:27] + '...' if len(ligne[2]) > 30 else ligne[2]):<30}{ligne[3]:<12}{ligne[4]:<8}")
            else:
                print("Aucun rendez-vous a afficher")

        except sqlite3.Error as e:
            print("Erreur lors de l'affichage :", e)
        finally:
            deconnexion_base_donnee(conn)

def afficher_utilisateurs():
    conn = connexion_base_donnee()
    if conn:
        try:
            cursor = conn.cursor()
            cursor.execute("""
                               SELECT u.id, u.nom_utilisateur, u.nom, u.prenom,  u.email
                               FROM utilisateurs u;
            """)
            utilisateurs = cursor.fetchall()
            if utilisateurs:
                print(f"{'Liste des utilisateurs':-^100}")
                print(f"{'ID':<5}{'Utilisateur':<25}{'Nom':<15}{'Prenom':<15}{'mail':<40}")
                print("-" * 100)
                for u in utilisateurs:
                    print(f"{u[0]:<5}{u[1]:<25}{u[2]:<15}{u[3]:<15}{u[4]:<40}")
            else:
                print("Aucun utilisateur enregistrer dans la base de donnée")
        except sqlite3.Error as e:
            print("Erreur lors de l'affichage :", e)
        finally:
            deconnexion_base_donnee(conn)

def demander_date(message):
    while True:
        saisie = demander_saisie(message)
        if saisie is None:
            return None
        try:
            # Vérifie le format
            datetime.strptime(saisie, "%Y-%m-%d")
            return saisie
        except ValueError:
            print("Format de date invalide ! Exemple : 2025-10-21")

def demander_heure(message):
    while True:
        saisie = demander_saisie(message)
        if saisie is None:
            return None
        try:
            datetime.strptime(saisie, "%H:%M")
            minutes = int(saisie.split(":")[1])
            if minutes not in (0, 15, 30, 45):
                raise ValueError("Les rendez-vous doivent être pris à :00, :15, :30 ou :45 uniquement.")
            return saisie
        except ValueError as e:
            print(e)
            print("Format d'heure invalide ! Exemple : 18:30")

def ajout_rdv():
    conn = connexion_base_donnee()
    if conn:
        try:
            cursor = conn.cursor()
            print(f"{' PRISE DE RENDEZ-VOUS ':=^100}")
            print("Vous pouvez taper '0' ou laisser un champ vide à tout moment pour annuler.\n")
         
            # --- Demande de la date ---
            Date_ajout = demander_date("Date du rendez-vous (AAAA-MM-JJ) :\n")
            if Date_ajout is None:
                return

            # --- Demande de l'heure ---
            Heure_ajout = demander_heure("Heure du rendez-vous (HH:MM) :\n")
            if Heure_ajout is None:
                return
            
          #Vérif si date pas déja passé
            rdv_datetime = datetime.strptime(f"{Date_ajout} {Heure_ajout}", "%Y-%m-%d %H:%M")
            if rdv_datetime < datetime.now():
                print("Vous ne pouvez pas prendre un rendez-vous dans le passé.")
                return

             # --- Vérification disponibilité ---
            cursor.execute("SELECT COUNT(*) FROM rendez_vous WHERE date = ? AND heure = ?", (Date_ajout, Heure_ajout))
            nb_rdv = cursor.fetchone()[0]
            if nb_rdv > 0:
                print("Erreur : le créneau n'est plus disponible.")
                return
            
            # --- Objet du rendez-vous ---
            Objet_ajout = demander_saisie("Votre demande de RDV :\n")
            if Objet_ajout is None:
                return
            
            # --- Insertion dans la base ---
            ID_utilisateur = infos_utilisateur["id"]
            Mail=infos_utilisateur["email"]
            Nom=infos_utilisateur["nom"]
            Prenom=infos_utilisateur["prenom"]

            cursor.execute("""
                           INSERT INTO rendez_vous (id_utilisateur,objet, date, heure) 
                           VALUES (?, ?, ?, ?)""", (ID_utilisateur, Objet_ajout,Date_ajout,Heure_ajout )
                        )
            conn.commit()  # Sauvegarder les changements

            envoie_mail("ajout",Mail,Nom,Prenom, Objet_ajout , Date_ajout , Heure_ajout)
            print("Rendez-vous pris avec succès !")
        except sqlite3.Error as e:
            print("Erreur lors de l'ajout :", e)
        finally:
            deconnexion_base_donnee(conn)

def supprime_rdv():
    print("Voici les RDV, le quel shouaite tu supprimer ?")
    if afficher_rdv("futur") == 0:
        return
    
    rdv_a_supprimer = demander_saisie("Entrez l'ID du rendez-vous à supprimer (0 pour annuler) :\n")
    if not rdv_a_supprimer:
        return
    if not rdv_a_supprimer.isdigit():
        print("Veuillez entrer un numéro d'ID valide.")
        return
    conn = connexion_base_donnee()
    ID_utilisateur = infos_utilisateur["id"]
    if conn:
        try:
            cursor = conn.cursor()
            # Vérifie si le rendez-vous existe
            cursor.execute("""
                           SELECT rendez_vous.*, utilisateurs.nom, utilisateurs.prenom, utilisateurs.email
                           FROM rendez_vous
                           JOIN utilisateurs on rendez_vous.id_utilisateur = utilisateurs.id
                           WHERE rendez_vous.id = ? AND id_utilisateur = ?""", (rdv_a_supprimer,ID_utilisateur,))
            rdv = cursor.fetchone()

            if not rdv:
                print("Aucun rendez-vous trouvé avec cet ID.")
            else:
                # Confirmation avant suppression
                print(f"Vous allez supprimer le rendez-vous {rdv[2]} de {rdv[5]} {rdv[6]} le {rdv[3]} à {rdv[4]}.")
                confirmation = input("Confirmez-vous la suppression ? (o/n) : ").lower()
                if confirmation == "o":
                    cursor.execute("DELETE FROM rendez_vous WHERE id = ?", (rdv_a_supprimer,))
                    conn.commit()
                    print("Rendez-vous supprimé avec succès.")
                    envoie_mail("suppr",rdv[7] , rdv[5] , rdv[6] , rdv[2] , rdv[3] , rdv[4])
                else:
                    print("Suppression annulée.")
        except sqlite3.Error as e:
            print("Erreur lors de la suppression :", e)
        finally:
            deconnexion_base_donnee(conn)

def modification_rdv():
    print("Voici vos rendez-vous à venir :")
    if afficher_rdv("futur") == 0:
        return

    # Saisie de l'ID du rendez-vous
    rdv_id = demander_saisie("Entrez l'ID du rendez-vous à modifier (0 pour annuler) :\n")
    if rdv_id is None:
        return
    if not rdv_id.isdigit():
        print("Veuillez entrer un numéro d'ID valide.")
        return

    conn = connexion_base_donnee()
    ID_utilisateur = infos_utilisateur["id"]

    if conn:
        try:
            cursor = conn.cursor()
            cursor.execute("""
                SELECT rendez_vous.*, utilisateurs.nom, utilisateurs.prenom, utilisateurs.email
                FROM rendez_vous
                JOIN utilisateurs ON rendez_vous.id_utilisateur = utilisateurs.id
                WHERE rendez_vous.id = ? AND id_utilisateur = ?
            """, (rdv_id, ID_utilisateur))
            rdv = cursor.fetchone()

            if not rdv:
                print("Aucun rendez-vous trouvé avec cet ID.")
                return
            
            # Sauvegarde des anciennes infos pour l'e-mail
            ancienne_date_rdv = rdv[3]
            ancienne_heure_rdv = rdv[4]

            print(f"Rendez-vous actuel : {rdv[2]} le {rdv[3]} à {rdv[4]}")

            # Nouvelle date
            nouvelle_date = demander_date("Nouvelle date (AAAA-MM-JJ) ou 0 pour annuler :\n")
            if nouvelle_date is None:
                return

            # Nouvelle heure
            nouvelle_heure = demander_heure("Nouvelle heure (HH:MM) ou 0 pour annuler :\n")
            if nouvelle_heure is None:
                return

            # Vérif si la date n’est pas passée
            rdv_datetime = datetime.strptime(f"{nouvelle_date} {nouvelle_heure}", "%Y-%m-%d %H:%M")
            if rdv_datetime < datetime.now():
                print("Vous ne pouvez pas fixer un rendez-vous dans le passé.")
                return

            # Vérification disponibilité
            cursor.execute(
                "SELECT COUNT(*) FROM rendez_vous WHERE date = ? AND heure = ? AND id != ?",
                (nouvelle_date, nouvelle_heure, rdv_id)
            )
            if cursor.fetchone()[0] > 0:
                print("Erreur : ce créneau est déjà réservé.")
                return

            # Objet du rendez-vous
            print(f"Objet actuel : {rdv[2]}")
            print("Appuyez sur Entrée pour conserver l'objet actuel ou tapez un nouveau texte.")
            nouvel_objet = input("Nouvel objet : ")
            if nouvel_objet == "0":
                print("Modification annulée.")
                return
            if nouvel_objet.strip() == "":
                nouvel_objet = rdv[2]

            # Confirmation
            confirmation = demander_saisie(
                f"Confirmez-vous la modification pour le {nouvelle_date} à {nouvelle_heure} ? (o/n, 0 pour annuler)\n"
            )
            if confirmation is None or confirmation.lower() != "o":
                print("Modification annulée.")
                return

            # Mise à jour
            cursor.execute("""
                UPDATE rendez_vous
                SET objet = ?, date = ?, heure = ?
                WHERE id = ? AND id_utilisateur = ?
            """, (nouvel_objet, nouvelle_date, nouvelle_heure, rdv_id, ID_utilisateur))
            conn.commit()

            # Mail
            envoie_mail("modif", rdv[7], rdv[5], rdv[6], nouvel_objet, nouvelle_date, nouvelle_heure, Ancienne_Date=ancienne_date_rdv ,Ancienne_Heure=ancienne_heure_rdv)
            print("Rendez-vous modifié avec succès ")

        except sqlite3.Error as e:
            print("Erreur lors de la modification :", e)
        finally:
            deconnexion_base_donnee(conn)

def envoie_mail(type_mail, Email_destinataire, Nom, Prenom, Objet_RDV, Date_RDV, Heure_RDV, Ancienne_Date=None, Ancienne_Heure=None):
    smtp_address = 'smtp.gmail.com'
    smtp_port = 465
    email_address = '' # Adresse e-mail de l'expéditeur A MODIFIER
    email_password = ''  # Mot de passe de l'expéditeur A MODIFIER

    # Création du message MIME
    message = MIMEMultipart("alternative")

    # Sujet et texte du mail
    if type_mail == "ajout":
        message["Subject"] = "Confirmation de votre rendez-vous"
        texte = f"""
Bonjour {Nom} {Prenom},

Votre rendez-vous pour "{Objet_RDV}" a bien été enregistré.
 Date : {Date_RDV}
 Heure : {Heure_RDV}

Cordialement,
Le service des rendez-vous
"""

    elif type_mail == "suppr":
        message["Subject"] = "Suppression de votre rendez-vous"
        texte = f"""
Bonjour {Nom} {Prenom},

Votre rendez-vous du {Date_RDV} à {Heure_RDV} pour "{Objet_RDV}" a été supprimé.

Cordialement,
Le service des rendez-vous
"""

    elif type_mail == "modif":
        message["Subject"] = "Modification de votre rendez-vous"

        # Si ancienne date/heure fournies, on les affiche
        texte = f"""
Bonjour {Nom} {Prenom},

Votre rendez-vous initialement prévu :
 {Ancienne_Date}
 {Ancienne_Heure}

a été modifié comme suit :
 Nouvelle date : {Date_RDV}
 Nouvelle heure : {Heure_RDV}
 Objet : {Objet_RDV}

Cordialement,
Le service des rendez-vous
"""

    message["From"] = email_address
    message["To"] = Email_destinataire
    message.attach(MIMEText(texte, "plain"))

    # Envoi du mail
    context = ssl.create_default_context()
    try:
        with smtplib.SMTP_SSL(smtp_address, smtp_port, context=context) as server:
            server.login(email_address, email_password)
            server.send_message(message)
            print(f"E-mail envoyé avec succès à {Email_destinataire}")
    except Exception as e:
        print(f"Erreur lors de l’envoi de l’e-mail : {e}")


def profil_utilisateur():
    conn = connexion_base_donnee()
    ID_utilisateur = infos_utilisateur["id"]
    if conn:
        try:
            cursor = conn.cursor()
            cursor.execute("""
                           SELECT *
                           FROM utilisateurs
                           WHERE id = ? 
                           """,(ID_utilisateur,))
            profil = cursor.fetchone()
            if profil:
                print(f"{' Vos données utilisateur ':=^100}")
                print(f"Nom d'utilisateur : {profil[1]}")
                print(f"Nom               : {profil[2]}")
                print(f"Prénom            : {profil[3]}")
                print(f"Email             : {profil[4]}")
                print(f"Mot de passe      : {profil[5]}")
                print("=" * 100)
            else:
                print("Aucun profil trouvé.")
        except sqlite3.Error as e:
            print("Erreur lors de l'affichage :", e)
        finally:
            deconnexion_base_donnee(conn)

def modification_profile():
    ID_utilisateur = infos_utilisateur["id"]
    while True :
        print(f"{' MODIFICATION PROFILE ':=^100}")
        print(f"1.\tNom d'utilisateur ")
        print(f"2.\tNom ")
        print(f"3.\tPrénom ")
        print(f"4.\tEmail")
        print(f"5.\tMot de passe")
        print(f"0.\tRetour")
        print("=" * 100)
        choix = input("Votre choix : ")
        colonne = None
        nouveau = None

        match choix:
            case "0":
                return
            case "1":
                colonne = "nom_utilisateur"
                nouveau = demander_saisie("Nouveau nom d'utilisateur :\n")
            case "2":
                colonne = "nom"
                saisie = demander_saisie("Nouveau nom :\n")
                if saisie:
                    nouveau = saisie.upper()
            case "3":
                colonne = "prenom"
                saisie = demander_saisie("Nouveau prénom :\n")
                if saisie:
                    nouveau = saisie.capitalize()
            case "4":
                colonne = "email"
                nouveau = demander_saisie("Nouvel email :\n")
                if nouveau and not email_valide(nouveau):
                    print("Adresse email invalide.")
                    continue
            case "5":
                colonne = "mot_de_passe"
                nouveau = demander_saisie("Nouveau mot de passe :\n", secret=True)
                if not nouveau:
                    continue
                confirmation = demander_saisie("Confirmez le mot de passe :\n", secret=True)
                if not confirmation or nouveau != confirmation:
                    print("Erreur : les mots de passe ne correspondent pas.")
                    continue
            case _:
                print("Choix invalide.")
                continue

        # Si l'utilisateur a annulé pendant la saisie
        if not nouveau:
            continue

        # Confirmation avant enregistrement
        confirmation = input(f"Confirmez-vous la modification de {colonne.replace('_', ' ')} ? (o/n) : \n").lower()
        if confirmation != "o":
            print("Modification annulée.")
            continue
        # --- Mise à jour dans la base ---
        conn = connexion_base_donnee()
        if conn:
            try:
                cursor = conn.cursor()
                cursor.execute(f"UPDATE utilisateurs SET {colonne} = ? WHERE id = ?", (nouveau, ID_utilisateur))
                conn.commit()
                print(f"{colonne.replace('_', ' ').capitalize()} modifié avec succès !")

                # Mettre à jour le dictionnaire local infos_utilisateur
                infos_utilisateur[colonne] = nouveau

            except sqlite3.IntegrityError:
                if colonne == "nom_utilisateur":
                    print("Erreur, Ce nom d'utilisateur est déjà pris.")
                else:
                    print("Erreur d'intégrité des données.")
            except sqlite3.Error as e:
                print("Erreur SQLite :", e)
            finally:
                deconnexion_base_donnee(conn)
        profil_utilisateur()
        



def programme_principale():
    creation_tables()
    while True:
        if utilisateur_connecte == None:
            print(f"{' ACCUEIL ':=^100}")
            print(f"1.\tSe connnecter \n"
                  "2.\tCréer un compte \n"
                  "0.\tQuitter le programme")
            print("=" * 100)
            choix = input("Votre choix : ")
            match choix:
                case "0":
                    break
                case "1":
                    connexion()
                case "2":
                    inscription()
                case _:
                    print("Choix invalide, veuillez réessayer.\n")
        elif utilisateur_connecte == 0:
            print(f"{' MENU ADMIN ':=^100}")
            print(f"1.\tTous les rendez-vous \n"
                  "2.\tLes rendez-vous futur \n"
                  "3.\tLes rendez-vous passé \n"
                  "4.\tVoir les utilisateurs \n"
                  "11.\tDéconnexion \n"
                  "0.\tQuiiter le programme")
            print("=" * 100)
            choix = input("Votre choix : ")
            match choix:
                case "0":
                    break
                case"1":
                    afficher_rdv_ADMIN("tout")
                case "2":
                    afficher_rdv_ADMIN("futur")
                case"3":
                    afficher_rdv_ADMIN("passee")
                case "4":
                    afficher_utilisateurs()
                case "11":
                    deconnexion()
                case _:
                    print("Choix invalide, veuillez réessayer.\n")
        else:
            print(f"{' MENU UTILISATEUR ':=^100}")
            print(
                "1.\tTous vos rendez-vous \n"
                "2.\tVos rendez-vous futurs \n"
                "3.\tVos rendez-vous passés \n"
                "4.\tAjouter un rendez-vous \n"
                "5.\tSupprimer un rendez-vous \n"
                "6.\tModifier un rendez-vous\n"
                "7.\tProfil utilisateur \n"
                "11.\tDéconnexion \n"
                "0.\tQuitter le programme"
            )
            print("=" * 100)
            choix = input("Votre choix : ")
            match choix:
                case "0":
                    break
                case "1":
                    afficher_rdv("tout")
                case "2":
                    afficher_rdv("futur")
                case "3":
                    afficher_rdv("passee")
                case "4":
                    ajout_rdv()
                case "5":
                    supprime_rdv()
                case "6":
                    modification_rdv()
                case "7":
                    profil_utilisateur()
                    modifi_profile = input("Voulez vous modifier un éléments du profil ? (o / n)\n").lower()
                    if modifi_profile =="o":
                        modification_profile()
                case "11":
                    deconnexion()
                case _:
                    print("Choix invalide, veuillez réessayer.\n")



programme_principale()