Guide for install while package is not at npm
```bash
cd ..
npm pack
cd ./fixture
# add this to deps "storybook21": "file:../storybook21*.tgz"
npm i storybook21
npx storybook21 init
```
