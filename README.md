# Upload vers une API Node.js avec Flutter, Multer et http

> 📃 Ce projet est utilisé dans le cadre d'un article disponible depuis le blog technique d'Ingéniance :
https://techblog.ingeniance.fr/gerer-upload-fichiers-flutter-nodejs-http-multer

Ce dépôt propose un POC permettant d'uploader un fichier provenant d'une application mobile développée sous [Flutter](https://flutter.dev/) vers une API [Node.js](https://nodejs.org/) dont la gestion des fichiers est gérée par le middleware [Multer](https://github.com/expressjs/multer). L'application mobile s'appuie sur le plugin [http](https://pub.dev/packages/http) pour transmettre la requête vers l'API.

L'ensemble des explications pour l'utilisation de ce POC sont détaillées dans l'article en lien au début de ce Readme. Cependant voici un condensé de ce qu'il faut faire pour pouvoir l'installer.

## Prérequis

Vous devez disposer d'une installation d'**Android Studio** sur votre poste : https://developer.android.com/studio?hl=fr

Veuillez suivre ensuite les indications fournies par les équipes de **Flutter** pour mettre en place votre environnement de développement mobile : https://docs.flutter.dev/get-started/install

Assurez vous simplement que le niveau de l'API utilisée est au moins de 30.

## Installation et exécution de l'API Node.js

Vous devez disposer d'une installation LTS de [Node.js](https://nodejs.org/en/download/) sur votre poste (14.X ou supérieure recommandée).

Vous devez ensuite cloner le contenu du dossier `api` sur votre poste puis lancer la commande suivante pour installer les dépendances :
```bash
npm i
```
Une fois l'installation terminée vous pourrez ensuite exécuter l'API à l'aide de la commande suivante à la racine du dossier `api` :
```bash
node index.js
```
Une instance du serveur [express.js](https://expressjs.com/) sera exécutée sur le port 8000 de votre poste et visible depuis l'adresse http://localhost:8000 de votre navigteur Web.

## Installation et exécution de l'application Flutter

Vous devez tout d'abord créer un nouveau projet à l'aide de la CLI de **Flutter** :
```bash
flutter create <your-flutter-project-folder-name>
```
Remplacez le contenu du fichier `main.dart` situé dans le dossier `lib` du projet nouvellement créé par celui contenu dans le dossier `mobile` de ce dépôt. Enfin remplacez les fichiers `pubspec.yaml` et `pubspec.lock` de votre projet par ceux du dépôt et exécutez la commande suivante à la racine de votre projet **Flutter** :
```bash
dart get pub
```
Reste plus qu'à vérifier votre environnement de développement en vous assurant qu'un émulateur Android est exécuté avant de taper la commande :
```bash
flutter run
```
L'initialisation prendra un peu de temps, mais vous n'aurez plus à le refaire temps que vous laisserez votre application tourner. Flutter s'assure d'une relance à chaud des modifications que vous effecturez dans votre code.

## Niveau de l'API

Vous devez vérifier que le niveau par défaut de l'API Google est suffisant pour être compatible avec les plugins installés pour ce POC. Par défaut Flutter applique un niveau minimum de 16. Or Camera requière un niveau de 21.

Pour changer ça, ouvrez le fichier `build.gradle` situé dans le dossier `android` de votre projet et recherchez la ligne suivante :
```kotlin
defaultConfig {
  [...]
  minSdkVersion flutter.minSdkVersion
  [...]
}
```
Changez la valeur `flutter.minSdkVersion` par 21.

Happy coding !