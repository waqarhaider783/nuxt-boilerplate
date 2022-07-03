<template>
  <div class="container">
    <div class="section">
      <heading-style-1 title="RichTextContent Style 1" />
      <rich-text-content-style-1 :content="content1" />
    </div>

    <div class="section">
      <heading-style-1 title="RichTextContent Style 2" />
      <rich-text-content-style-2 :content="content2" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'RichTextContent',
  data() {
    return {
      content1: `<h2>EFFECTIVE AS OF: APRIL 29,2021</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam corrupti ut
      quos, aliquid officia iste architecto iusto mollitia aut voluptatem, id
      similique! Numquam soluta nulla alias laborum eveniet asperiores culpa.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
      obcaecati nulla dolore aut. Pariatur adipisci expedita, quam nobis
      sapiente suscipit obcaecati sit iure iste, dolor accusamus eaque qui
      necessitatibus ea.
    </p>

    <h2>
      Savingpromocode.com brings you the best savings you can get anywhere on
      the market
    </h2>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, beatae
      nulla expedita nesciunt atque tenetur iure odit voluptatibus
      exercitationem earum soluta in, ad cumque laboriosam quisquam accusantium,
      cupiditate ipsam magnam.
    </p>

    <h3>Informstion We Collect</h3>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia suscipit
      a voluptate assumenda nam vitae quae cumque tenetur incidunt,
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
      laudantium debitis cumque fugit voluptate architecto inventore iste
      delectus, dicta illo? Delectus, voluptatibus iste? Sed eum distinctio
      soluta incidunt quasi repellat.
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
      laudantium debitis cumque fugit voluptate architecto inventore iste
      delectus, dicta illo? Delectus,
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
      laudantium debitis cumque fugit voluptate architecto inventore iste
      delectus, dicta illo? Delectus, voluptatibus iste? Sed eum distinctio
      soluta incidunt quasi repellat.
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
      laudantium debitis cumque fugit voluptate architecto inventore iste
      delectus, dicta illo? Delectus, voluptatibus iste? Sed eum distinctio
      soluta incidunt quasi repellat.
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
      laudantium debitis cumque fugit voluptate architecto inventore iste
      delectus, dicta illo? Delectus, voluptatibus iste? Sed eum distinctio
      soluta incidunt quasi repellat.
    </p>

    <h4>When You use our social media pages</h4>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit magni
      dolore aliquam necessitatibus earum, placeat repudiandae laborum. Sunt
      libero, nostrum quo optio veniam temporibus doloribus. Ratione nisi
      architecto perspiciatis. Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Fugit magni dolore aliquam necessitatibus earum, placeat
      repudiandae laborum. Sunt libero, nostrum quo optio veniam temporibus
      doloribus. Ratione nisi architecto perspiciatis. Lorem ipsum, dolor sit
      amet consectetur adipisicing elit. Fugit magni dolore aliquam
      necessitatibus earum, placeat repudiandae l aborum. Sunt libero, nostrum
      quo optio veniam temporibus doloribus. Ratione nisi architecto
      perspiciatis.
    </p>

    <h5>managing your onine and mobile preference</h5>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
      voluptatum tempore molestias voluptates eos dignissimos distinctio
      similique perspiciatis neque, repellendus, incidunt, sequi assumenda?
      Omnis, magnam voluptas. Sint, atque odit. Laboriosam!
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
      voluptatum tempore molestias voluptates eos dignissimos distinctio
      similique perspiciatis neque, repellendus, incidunt, sequi assumenda?
      Omnis, magnam voluptas. Sint, atque odit. Laboriosam!. Lorem ipsum dolor,
      sit amet consectetur adipisicing elit. Possimus voluptatum tempore
      molestias voluptates eos dignissimos distinctio similique perspiciatis
      neque,
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
      voluptatum tempore molestias voluptates eos dignissimos distinctio
      similique perspiciatis neque, repellendus, incidunt, sequi assumenda?
      Omnis, magnam voluptas. Sint, atque odit. Laboriosam!. Lorem ipsum dolor,
      sit amet consectetur adipisicing elit. Possimus voluptatum tempore
      molestias voluptates eos dignissimos distinctio similique perspiciatis
      neque,
    </p>`,
      content2: `<img
      src="https://tinyjpg.com/images/social/website.jpg"
      alt="Image"
      width="300"
      height="300"
      style="float: left"
    />
    <h1>Who we are?</h1>
    <h3>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
      nulla optio sequi explicabo placeat.
    </h3>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officiis
      aliquam ullam, voluptatibus pariatur animi dignissimos in numquam nostrum!
      Possimus.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officiis
      aliquam ullam, voluptatibus pariatur animi dignissimos in numquam nostrum!
      Possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
      officiis aliquam ullam, voluptatibus pariatur animi dignissimos in numquam
      nostrum!
    </p>

    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid animi
      iure in quibusdam quam quod:
    </p>

    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi quia
      libero corrupti. Eligendi dicta corrupti animi expedita vero provident
      eaque iure architecto laudantium ad iusto ipsum magni deleniti, qui, optio
      placeat dolorum? Harum praesentium quibusdam nihil, libero dolorem omnis
      hic!
    </p>`,
    }
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
