## Repo to Replicate issue https://github.com/vercel/next.js/issues/25230

This is a weird one and I am not able to pinpoint the exact root cause, but definitely looks like a bug.

Given the following component:
```jsx
// app-bar.js
import React from "react";
import styles from "./app-bar.module.scss";

const AppBar = ({ brand }) => {
  console.log(styles);
  return (
    <div className={styles.appBar}>
      <span className={styles.text}>App Bar</span>
    </div>
  );
};

export default AppBar;
```
and a corresponding scss module

```scss
// app-bar.scss
.app-bar {
  padding: 20px;
  display: flex;
  flex-direction: row;
  background-color: #757575;

  .text{
    font-size: 20px;
    color: red;
  }
}
```
The styles for `div` i.e `styles.appBar` class name does not get added to the DOM.


If I change the scss to this, and use `className={styles.container}` it works.

```scss
.container {
  padding: 20px;
  display: flex;
  flex-direction: row;
  background-color: #757575;

  .text{
    font-size: 20px;
    color: red;
  }
}
```


It's something to do with either the file name or the component name?

## Steps to Replicate Issue

- Clone Repo
- Run `npm install`
- Run `npm run dev`
- Navigate to `localhost:3000/sub-folder` (I was testing an issue related to the [basePath](https://github.com/vercel/next.js/issues/21131), hence the sub-folder)
- Update scss for app bar as mentioned above
- Fast refresh, and the styles get reflected.