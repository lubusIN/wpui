
# Getting Started

All of the design patterns in WPUI are designed for the latest version of [@wordpress/components](https://developer.wordpress.org/block-editor/reference-guides/components/) and related packages. To use WPUI in your projects copy or download designs patterns and use in your app or plugin. You can either setup your projects from scratch or use sample projects.

## WordPress Plugin

This sample project will provide you with WordPress plugin with admin menu and page to build your plugin in wp-admin. 

**To Build using this sample:**  

clone repo in your WordPress plugins folder
```
git clone git@github.com:lubusIN/wpui-sample-plugin.git
```

goto plugin directory
```
cd wpui-sample-plugin
```
install packages 
```
npm run install
```
build assets 
```
npm run build
```
watch for changes
```
npm run dev
```
**File and folders**  

-   index.php
-   package.json
-   style.css
-   src/app.js

[Browse](https://wpui.lubus.in/) and find UI patterns you would like to use. Add them to `app.js`  and
add your custom plugin styles to `style.css`

## Standalone App

This sample project will provide you with standalone app that can be used outside WordPress.  
**To Build using this sample:**  

clone sample app repo
```
git clone git@github.com:lubusIN/wpui-sample-app.git
```

goto app directory
```
cd wpui-sample-app
```
install packages 
```
npm run install
```
build assets 
```
npm run build
```
watch for changes
```
npm run dev
```

run app 
```
npm run serve
```

**File and folder structure**  
-   package.json
-   src/app.css
-   src/app.js

[Browse](https://wpui.lubus.in/)  and find UI you would like to use and add them to app.js  
Add your custom app styles to style.cs