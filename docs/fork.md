# Fork the Project

## Rename Application

Do you want to fork the project and build your own Web3 smartphone application? No problem!

Run the following commands to switch the name and icon.

`npx react-native-rename`

https://github.com/junedomingo/react-native-rename#readme

## Update Icon

https://blog.bam.tech/developer-news/change-your-react-native-app-icons-in-a-single-command-line

### Dependecies

```
npm install -g yo generator-rn-toolbox

brew install imagemagick
```

### Update Icon

```s
yo rn-toolbox:assets --icon <path to your icon>
# For instance
yo rn-toolbox:assets --icon ../icon.png
```
