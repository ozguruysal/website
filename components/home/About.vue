<template>
    <section class="about text-center pt-10 pb-10 pl-4 pr-4 pl-sm-0 pr-sm-0" id="about">
        <div class="container">
            <h1 class="mb-5">About Me &amp; My Skills</h1>
            <div class="row justify-content-md-center">
                <div class="col-md-8">
                    <p class="lead mb-8">After 15+ years of expertise in foreign business relations and a simultaneous 5+ years in graphics design and software development both in open-source and freelance projects, I have decided to follow my passion for design and programming and I’m currently working remotely for <a href="http://object.net/">Object.NET, Inc.</a> as a <strong>Designer &amp; Front End Developer.</strong></p>
                </div>
            </div>
            <div class="row no-gutters">
                <div class="col-md-6">
                    <div class="about-card designer mb-3">
                        <icon name="design" class="text-primary mb-5" width="48" height="48"></icon>
                        <h2 class="text-primary mb-5">Designer</h2>
                        <p class="text-secondary mb-5">I'm a multidisciplinary designer. I love and follow simple, minimalistic and UX oriented design rules.</p>
                        <p class="text-primary mb-2">I love to design:</p>
                        <p class="text-secondary mb-5">UI, UX, Web, App, Illustration, Logo &amp; Brand Identity</p>
                        <p class="text-primary mb-2">Softwares I use:</p>
                        <p class="text-secondary">Adobe Illustrator <br />Adobe Photoshop <br />Adobe Lightroom</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="about-card developer">
                        <icon name="console" class="text-primary mb-5" width="48" height="48"></icon>
                        <h2 class="text-primary mb-5">Developer</h2>
                        <p class="text-secondary mb-5">I love coding my own designs using the latest technologies and trends by chosing the right tools for the job.</p>
                        <p class="text-primary mb-2">Favourite Languages:</p>
                        <p class="text-secondary mb-5">JavaScript, HTML, CSS, Less, Sass, PHP</p>
                        <p class="text-primary mb-2">Frameworks &amp; Libraries:</p>
                        <p class="text-secondary mb-5">Vue.js, React, jQuery, Node, Bootstrap</p>
                        <p class="text-primary mb-2">Database:</p>
                        <p class="text-secondary">MongoDB, MySQL</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Icon from "../../components/Icon.vue";

export default {
  name: "About",

  components: {
    Icon
  }
};
</script>

<style lang="scss">
@import "../../assets/scss/overrides/bootstrap/variables";
@import "../../assets/scss/vendor/bootstrap/functions";
@import "../../assets/scss/vendor/bootstrap/variables";
@import "../../assets/scss/vendor/bootstrap/mixins";

.about-card {
  margin-bottom: 1.875rem;
  padding: 4.5rem 2rem;
  height: 100%;
  border: 1px solid $gray-300;
  position: relative;
  overflow: hidden;

  @include media-breakpoint-up(sm) {
    padding: 5.25rem 6.25rem;
  }

  &:after {
    position: absolute;
    display: block;
    border-radius: 20rem;
    background-color: theme-color("primary");
    content: "";
    z-index: -1;
    opacity: 0.07;
  }

  &.designer {
    border-bottom-width: 0;

    &:after {
      width: 20rem;
      height: 20rem;
      bottom: 5rem;
      left: -35%;
    }

    @include media-breakpoint-up(md) {
      border-right-width: 0;
      border-bottom-width: 1px;
    }
  }

  &.developer {
    &:after {
      width: 25rem;
      height: 25rem;
      top: 5rem;
      right: -40%;
    }
  }
}
</style>
