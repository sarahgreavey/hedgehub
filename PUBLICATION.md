# Mémo publication HedgeHub

Récapitulatif des étapes et commandes pour publier et mettre à jour l'application HedgeHub.

## Informations clés

| Élément | Valeur |
|---|---|
| Package ID | `org.hedgehub.app` |
| Projet EAS | `d8ed90f3-829e-403f-b144-ffc07836e627` |
| Clé de signature app | `hedgehub.keystore` (alias `hedgehub`) |
| Empreinte SHA-256 (app) | `58:E8:28:7B:72:DB:E1:93:10:9C:6F:A5:8C:73:B7:A6:44:9A:FA:68:8E:51:9E:FE:BF:24:F2:03:C8:D9:73:8C` |
| Dépôt GitHub (F-Droid) | `sarahgreavey/hedgehub-fdroid` |
| URL du dépôt F-Droid | `https://sarahgreavey.github.io/hedgehub-fdroid/repo` |
| Clé de signature dépôt | `fdroid-repo/keystore.p12` |
| Empreinte SHA-256 (dépôt) | `1E:85:D1:78:A2:4A:BE:80:9C:AD:A8:B6:85:3C:7B:50:E4:1B:7E:42:0E:59:B2:C0:65:03:7A:EB:74:3E:9B:73` |

## Fichiers à sauvegarder précieusement (jamais sur GitHub)

- `hedgehub.keystore` — clé de signature de l'application (perte = plus de mises à jour possibles)
- `fdroid-repo/keystore.p12` — clé de signature du dépôt
- `fdroid-repo/config.yml` — contient le mot de passe du keystore du dépôt

## Publier une mise à jour de l'app

### 1. Builder le nouvel APK (signé avec ta clé)

```bash
cd /Users/chrystelle/Documents/applis/hedgehub
npx eas-cli build -p android --profile production
```

À la fin, EAS affiche une URL `https://expo.dev/artifacts/eas/....apk`.

### 2. Télécharger l'APK

```bash
curl -L -o hedgehub-v1.0.0.apk "URL_DU_NOUVEL_APK"
```

> Note : `eas.json` est configuré avec `buildType: apk` et `app.json` cible
> `arm64-v8a` + `armeabi-v7a` (pour rester sous 100 Mo).

### 3. Mettre à jour le dépôt F-Droid

```bash
cd /Users/chrystelle/Documents/applis/hedgehub/_importante/fdroid-repo

# Copier le nouvel APK dans le dépôt
cp ../hedgehub-v1.0.0.apk repo/hedgehub-v1.0.0.apk

# Régénérer l'index
export PATH="/opt/homebrew/bin:$PATH"
export ANDROID_HOME="$HOME/Library/Android/sdk"
fdroid update

# (optionnel) mettre à jour la version dans metadata/org.hedgehub.app.yml
# puis : fdroid rewritemeta org.hedgehub.app

# Committer et pousser
git add -A
git commit -m "vX.Y.Z"
git push origin main
```

L'index est alors mis à jour sur `https://sarahgreavey.github.io/hedgehub-fdroid/repo`
(compter ~1 minute pour la propagation de GitHub Pages).

## Ajouter le dépôt dans F-Droid (côté utilisateur)

1. Installer F-Droid depuis https://f-droid.org/fr/
2. **Paramètres → Dépôts → +**
3. Coller : `https://sarahgreavey.github.io/hedgehub-fdroid/repo`
4. Accepter la clé du dépôt

## Publier sur Google Play (optionnel)

```bash
cd /Users/chrystelle/Documents/applis/hedgehub
npx eas-cli submit -p android
```

Nécessite un compte Google Play Developer (25 $ une fois) et une fiche Play Console.
Le keystore `hedgehub.keystore` est déjà configuré dans EAS.

## Publier sur iOS App Store (optionnel)

```bash
npx eas-cli build -p ios
npx eas-cli submit -p ios
```

Nécessite un compte Apple Developer (99 $/an) et un certificat iOS.
