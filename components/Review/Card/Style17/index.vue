<template>
  <div class="reviewCard">
    <div div class="reviewCard__wrapper">
      <div class="reviewCard__block">
        <div class="reviewCard__block__left">
          <span class="reviewCard__block__left__line"></span>
          <span class="reviewCard__block__left__text">sameer siddiqui</span>
        </div>
        <div class="reviewCard__block__right">
          <div class="reviewCard__block__right__pic">
            <picture>
              <img src="https://tinyjpg.com/images/social/website.jpg" alt="" />
            </picture>
          </div>
          <div class="reviewCard__block__right__text">
            <div class="reviewCard__block__right__text__title">alexcendra</div>
            <div>
              <span class="reviewCard__block__right__text__icon">
                <i><font-awesome-icon :icon="['fas', 'circle']" /></i>
              </span>
            </div>
            <div class="reviewCard__block__right__text__text">
              <h1>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Adipisci officiis hic, nihil repellat iusto rerum fugiat
                consectetur a nam assumenda, voluptas nobis deserunt aliquid
                nulla, velit numquam perspiciatis dolorem? Repellendus.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ReviewCard17',
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
