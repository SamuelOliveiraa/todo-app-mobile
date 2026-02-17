## Todo App

![Project Image](/src/assets/og-image.png)

This is a Todo App developed in React Native using Expo, NativeWind (Tailwind CSS for React Native), and local storage with AsyncStorage.

---

## Features

- Add, check/uncheck, and remove tasks
- Counter for created and completed tasks
- Responsive and styled interface with Tailwind via NativeWind
- Persistent storage of tasks on the device

---

## Technologies Used

- [React Native](httpss://reactnative.dev/)
- [Expo](httpss://expo.dev/)
- [NativeWind](httpss://www.nativewind.dev/) (Tailwind CSS for React Native)
- [AsyncStorage](httpss://react-native-async-storage.github.io/async-storage/)
- [Expo Router](httpss://expo.github.io/router/docs/)
- [Expo Google Fonts](httpss://docs.expo.dev/guides/using-custom-fonts/)

---

## Project Structure

```
src/
  app/
    _layout.tsx
    index.tsx
  assets/
  components/
  storage/
  styles/
```

- The main components are in `components`
- Task storage is in `taskStorage.ts`
- Style settings are in `colors.ts` and `global.css`

---

## How to run the project

1.  Install the dependencies:

```sh
npm install
```

2.  Start the project:

```sh
npm start
```

3.  Follow the Expo instructions to run on an emulator or physical device.

---

## Available Scripts

- `npm start` — starts the Expo development server
- `npm run android` — starts on the Android emulator
- `npm run ios` — starts on the iOS emulator
- `npm run web` — starts in the browser

---

## Customization

- Colors can be changed in `colors.ts`
- Global styles are in `global.css`
- Icons are in `assets`

---

## License

This project is for study and learning purposes only.

---

Developed with 💜 by Rocketseat and developed by me! 🚀
