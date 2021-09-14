# Vue3Cordova

This is a Vue3 + Cordova starter template. You can use it to start build you mobile application with power of Vue3. 

:fire: :fire: **LIVE RELOAD OF YOUR DEVICES INCLUDED!** :fire: :fire:

--

**PAY ATTENTION:**  This is a work in progress project and some things that be done yet!

--

**FOLLOW THE INSTRUCTIONS AND TIPS TO SET UP WELL YOUR PROJECT.**

---

### Project setup
First of all launch:

```
npm install
```

After you must start:

```
npm run add:platforms
```

In this way the platforms folders will be added to your project.

---

### Compiles and hot-reloads for development
You can start your development with following npm scripts:

```
npm run serve // this will serve only on browser as Vue default serve.
```
```
npm run serve:ios // this will run serve on localhost:8080 and will open your iOS device at the same time.
```
```
npm run serve:android // this will run serve on localhost:8080 and will open your Android device at the same time.
```

---

### Compiles and minifies for production
Launch at first: 
```
npm run build // this will build in /www folder
```

Then use classic cordova commands:

```
cordova build ios
cordova build android
```
To build your mobile application.

---

### Tips and Problems

- If you have some trouble with _serve_ commands you can cancel the following files from /www folder: _cordova.js_ _cordova_plugins.js_. Then you re-run serve command and it will be created again.

- If you want use cordova on browser you need to copy _cordova.js_ and _cordova_plugins.js_ into your /public folder. Then restart the serve commands.

---

### Contributors needed

Feel free to contribute to the project! :) 

If you want help me i appreciate it!

---