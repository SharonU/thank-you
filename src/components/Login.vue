<template>
  <div class="login-wrapper">
    <div class="img-wrapper"></div>
    <div class="user-input-wrapper">
      <h2>Thank You</h2>
      <div>
        <div
          class="fb-login-button"
          data-width
          data-size="large"
          data-button-type="continue_with"
          data-layout="default"
          data-auto-logout-link="false"
          data-use-continue-as="false"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-wrapper {
  display: flex;
  flex-direction: row;
}
.user-input-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>