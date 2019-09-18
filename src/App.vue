<template>
  <div id="app">
    <keep-alive include="home">
      <router-view/>
    </keep-alive>
  </div>
</template>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #fff;
    height: 100vh;
    display: flex;
    justify-content: center;
  }

  #app > div {
    margin-top: 60px;
    width: 960px;
  }

  body {
    background: radial-gradient(circle at top left, #000 0, #222 100%);
    margin: 0;
  }

  a {
    color: #fff;
  }

  @media only screen and (max-width: 650px) {
    body { 
      background: #222;
    }

    #app > div {
      margin-top: 20px;
    }
  }
</style>
