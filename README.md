## Todo App

![Imagem do Projeto](/src/assets/og-image.png)

Este é um aplicativo de lista de tarefas (Todo App) desenvolvido em React Native utilizando Expo, NativeWind (Tailwind CSS para React Native) e armazenamento local com AsyncStorage.

---

## Funcionalidades

- Adicionar, marcar/desmarcar e remover tarefas
- Contador de tarefas criadas e concluídas
- Interface responsiva e estilizada com Tailwind via NativeWind
- Armazenamento persistente das tarefas no dispositivo

---

## Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [NativeWind](https://www.nativewind.dev/) (Tailwind CSS para React Native)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)
- [Expo Router](https://expo.github.io/router/docs/)
- [Expo Google Fonts](https://docs.expo.dev/guides/using-custom-fonts/)

---

## Estrutura do Projeto

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

- Os componentes principais estão em components
- O armazenamento das tarefas está em taskStorage.ts
- As configurações de estilos estão em colors.ts e global.css

---

## Como rodar o projeto

1. Instale as dependências:

```sh
npm install
```

2. Inicie o projeto:

```sh
npm start
```

3. Siga as instruções do Expo para rodar no emulador ou dispositivo físico.

---

## Scripts Disponíveis

- `npm start` — inicia o servidor de desenvolvimento Expo
- `npm run android` — inicia no emulador Android
- `npm run ios` — inicia no emulador iOS
- `npm run web` — inicia no navegador

---

## Personalização

- As cores podem ser alteradas em colors.ts
- Os estilos globais estão em global.css
- Os ícones estão em assets

---

## Licença

Este projeto é apenas para fins de estudo e aprendizado.

---

Desenvolvido com 💜 por Rocketseat e desenvolvido por mim! 🚀
