<template>
  <section class="reviews section">
    <div class="reviews__wrapper">
      <div class="reviews__top">
        <div class="reviews__imageContainer">
          <figure class="reviews__image">
            <img
              src="~/assets/images/services/service-template-20-b.png"
              alt="altText"
            />
          </figure>
        </div>
        <div class="reviews__description">
          <h2 class="reviews__heading">WHY TRUST BEST REVIEWS?</h2>
          <p class="reviews__detail">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div class="reviews__middleSection">
        <div class="reviews__middleContainer">
          <div class="reviews__middle">
            <!-- Card Start -->
            <div class="reviewCard">
              <div class="reviewCard__imagecard">
                <div class="reviewCard__heading">
                  <h3 class="reviewCard__title">{{ title }}</h3>
                </div>
                <div>
                  <figure class="reviewCard__image">
                    <img :src="getImage" alt="" />
                  </figure>
                  <div class="reviewCard__Detail">
                    <h3 class="reviewCard__imgname">{{ name }}</h3>
                    <p class="reviewCard__imgCaption">{{ text }}</p>
                    <button class="reviewCard__imgBtn" :title="btnText">
                      {{ btnText }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Card End -->
            <!-- <reviews-cards-Style1
              title="Best of Best"
              name="Hydro"
              text="Connected Rower"
              btn-text="Check Price"
              source-url="products/product-img1.jpg"
            /> -->

            <div class="reviews__cardDescription">
              <h2>Bottom Line</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div class="reviews__cardDescription">
              <h2>Pros</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div class="reviews__cardDescription">
              <h2>Cons</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="reviews__middleSection">
        <div class="reviews__middleContainer">
          <div class="reviews__middle">
            <!-- Card Start -->
            <div class="reviewCard">
              <div class="reviewCard__imagecard">
                <div class="reviewCard__heading">
                  <h3 class="reviewCard__title">{{ title }}</h3>
                </div>
                <div>
                  <figure class="reviewCard__image">
                    <img :src="getImage" alt="" />
                  </figure>
                  <div class="reviewCard__Detail">
                    <h3 class="reviewCard__imgname">{{ name }}</h3>
                    <p class="reviewCard__imgCaption">{{ text }}</p>
                    <button class="reviewCard__imgBtn" :title="btnText">
                      {{ btnText }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Card End -->
            <!-- <reviews-cards-Style1
              title="Best of Best"
              name="Hydro"
              text="Connected Rower"
              btn-text="Check Price"
              source-url="products/product-img1.jpg"
            /> -->

            <div class="reviews__cardDescription">
              <h2>Bottom Line</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div class="reviews__cardDescription">
              <h2>Pros</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div class="reviews__cardDescription">
              <h2>Cons</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="reviews__middleSection">
        <div class="reviews__middleContainer">
          <div class="reviews__middle">
            <!-- Card Start -->
            <div class="reviewCard">
              <div class="reviewCard__imagecard">
                <div class="reviewCard__heading">
                  <h3 class="reviewCard__title">{{ title }}</h3>
                </div>
                <div>
                  <figure class="reviewCard__image">
                    <img :src="getImage" alt="" />
                  </figure>
                  <div class="reviewCard__Detail">
                    <h3 class="reviewCard__imgname">{{ name }}</h3>
                    <p class="reviewCard__imgCaption">{{ text }}</p>
                    <button class="reviewCard__imgBtn" :title="btnText">
                      {{ btnText }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Card End -->
            <!-- <reviews-cards-Style1
              title="Best of Best"
              name="Hydro"
              text="Connected Rower"
              btn-text="Check Price"
              source-url="products/product-img1.jpg"
            /> -->

            <div class="reviews__cardDescription">
              <h2>Bottom Line</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div class="reviews__cardDescription">
              <h2>Pros</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div class="reviews__cardDescription">
              <h2>Cons</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="reviews__middleSection">
        <div class="reviews__middleContainer">
          <div class="reviews__middle">
            <!-- Card Start -->
            <div class="reviewCard">
              <div class="reviewCard__imagecard">
                <div class="reviewCard__heading">
                  <h3 class="reviewCard__title">{{ title }}</h3>
                </div>
                <div>
                  <figure class="reviewCard__image">
                    <img :src="getImage" alt="" />
                  </figure>
                  <div class="reviewCard__Detail">
                    <h3 class="reviewCard__imgname">{{ name }}</h3>
                    <p class="reviewCard__imgCaption">{{ text }}</p>
                    <button class="reviewCard__imgBtn" :title="btnText">
                      {{ btnText }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Card End -->
            <!-- <reviews-cards-Style1
              title="Best of Best"
              name="Hydro"
              text="Connected Rower"
              btn-text="Check Price"
              source-url="products/product-img1.jpg"
            /> -->

            <div class="reviews__cardDescription">
              <h2>Bottom Line</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div class="reviews__cardDescription">
              <h2>Pros</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div class="reviews__cardDescription">
              <h2>Cons</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="reviews__bottomSection">
        <div class="reviews__bottomDetail">
          <h2 class="reviews__bottomHeading">How we Decided</h2>
          <p class="reviews__bottomdescription">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <div class="reviews__bottomCards grid-col-4">
            <!-- <review-card-Style1-One
              name="Models Considered"
              count="52"
              source-url="services/service-icon-1.png"
            /> -->
            <div class="reviews__bottomImageCard">
              <font-awesome-icon
                :icon="['far', 'check-square']"
                class="reviews__checkSquareIcon"
              />
              <h2>52</h2>
              <p>Models Consider</p>
            </div>
            <div class="reviews__bottomImageCard">
              <font-awesome-icon
                :icon="['fas', 'clock']"
                class="reviews__clockIcon"
              />
              <h2>16</h2>
              <p>Hours Researched</p>
            </div>
            <div class="reviews__bottomImageCard">
              <!-- <font-awesome-icon
                :icon="['fas', 'bars']"
                class="reviews__barsIcon"
              /> -->
              <div class="reviews__barsIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                >
                  <g
                    id="Group_21"
                    data-name="Group 21"
                    transform="translate(-531 -3373)"
                  >
                    <g
                      id="Rectangle_20"
                      data-name="Rectangle 20"
                      transform="translate(531 3373)"
                      fill="#fff"
                      stroke="#000"
                      stroke-width="2"
                    >
                      <rect width="50" height="50" stroke="none" />
                      <rect x="1" y="1" width="48" height="48" fill="none" />
                    </g>
                    <line
                      id="Line_13"
                      data-name="Line 13"
                      x2="31.667"
                      transform="translate(540.167 3384.25)"
                      fill="none"
                      stroke="#000"
                      stroke-width="2"
                    />
                    <line
                      id="Line_14"
                      data-name="Line 14"
                      x2="29.167"
                      transform="translate(541 3395.917)"
                      fill="none"
                      stroke="#000"
                      stroke-width="2"
                    />
                    <line
                      id="Line_15"
                      data-name="Line 15"
                      x2="23.333"
                      transform="translate(540.167 3405.917)"
                      fill="none"
                      stroke="#000"
                      stroke-width="2"
                    />
                  </g>
                </svg>
              </div>

              <h2>2</h2>
              <p>Experts Interviewed</p>
            </div>
            <div class="reviews__bottomImageCard">
              <font-awesome-icon
                :icon="['fas', 'user']"
                class="reviews__userIcon"
              />
              <h2>168</h2>
              <p>Consumer Consulted</p>
            </div>
          </div>
        </div>
        <div class="reviews__bottomImg">
          <figure class="reviews__bottomImage">
            <img src="~/assets/images/game/similar1.png" alt="altText" />
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Review1',

  data() {
    return {
      title: 'Best of Best',
      name: 'Hydro',
      text: 'Connected Rower',
      btnText: 'Check Price',
      sourceUrl: 'products/product-img1.jpg',
    }
  },

  computed: {
    getImage() {
      if (this.sourceUrl) {
        return require(`~/assets/images/${this.sourceUrl}`)
      }
      return ''
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
