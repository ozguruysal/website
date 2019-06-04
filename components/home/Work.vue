<template>
    <section class="about text-center pt-10 pb-10" id="work">
        <div class="container-fluid">
            <h1 class="mb-5">My Recent Work</h1>
            <div class="row">
                <div class="col">
                    <p class="lead mb-8">Here’s my design feed from <a href="https://dribbble.com/ozguruysal">Dribbble</a>. You can see more of my designs at <a href="https://dribbble.com/ozguruysal">Dribbble</a> and my code at <a href="https://github.com/ozguruysal">GitHub</a>.</p>
                </div>
            </div>

            <div class="row">
                <template v-if="dribbbleShots.length > 0">
                    <div class="col-lg-4" v-for="shot in dribbbleShots" :key="shot.id">
                        <figure>
                            <img class="img-fluid" :src="shot.images.hidpi" :alt="shot.title">
                            <figcaption class="d-flex flex-column justify-content-center">
                                <div class="title">{{ shot.title }}</div>
                                <a :href="shot.html_url" target="_blank"><icon name="link-external" class="mr-2 mb-1" width="16" height="16"></icon>View on Dribbble</a>
                            </figcaption>
                            <div class="overlay"></div>
                        </figure>
                    </div>
                </template>
                <template v-else>
                    <div class="col text-center"><p>Looks like there's a problem accessing Dribbble API. Please reload the page.</p></div>
                </template>
            </div>

            <div class="row">
                <div class="col pt-6">
                    <a class="btn btn-dribbble mr-sm-3 mb-3 mb-sm-0" href="https://dribbble.com/ozguruysal" target="_blank"><icon name="dribbble" class="mr-2 mb-1" width="22" height="22"></icon>See me on Dribbble</a>
                    <a class="btn btn-primary" href="https://github.com/ozguruysal" target="_blank"><icon name="github" class="mr-2 mb-1" width="22" height="22"></icon>See me on GitHub</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Icon from "../Icon.vue";

export default {
  name: "Work",

  components: {
    Icon
  },

  props: {
    dribbbleShots: {
      type: Array,
      default: []
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/overrides/bootstrap/variables";
@import "../../assets/scss/vendor/bootstrap/functions";
@import "../../assets/scss/vendor/bootstrap/variables";
@import "../../assets/scss/vendor/bootstrap/mixins";

.container-fluid {
  width: 85vw;

  @media (min-width: 1500px) {
    width: 75vw;
  }
}

section {
  border-bottom: 1px solid $gray-300;
}

figcaption,
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

figcaption {
  padding: 2rem;
  color: #fff;
  z-index: 1;
  transition: 0.45s ease-in-out;
}

.overlay {
  background-color: $gray-900;
  transition: 0.45s ease-in-out;
}

img {
  transform: scale(1);
  transition: 0.25s ease-in-out;
}

figure {
  margin-bottom: 1.875rem;
  position: relative;
  overflow: hidden;
  cursor: default;

  &:hover {
    figcaption {
      opacity: 1;
    }

    .overlay {
      opacity: 1;
    }

    img {
      transform: scale(1.15);
    }
  }

  a {
    color: lighten(theme_color("primary"), 10%);

    &:hover,
    &:active {
      color: theme_color("primary");
    }
  }
}

.title {
  margin-bottom: 0.3rem;
  font-size: 1.5rem;
  font-weight: 300;
}

.btn {
  width: 100%;

  @include media-breakpoint-up(sm) {
    width: 13.75rem;
  }
}
</style>
