<template>
    <div class="site-content">
        <hero></hero>
        <about></about>
        <work :dribbbleShots="dribbbleShots"></work>
        <contact></contact>
    </div>
</template>

<script>
import axios from "axios";
import Hero from "../components/home/Hero.vue";
import About from "../components/home/About.vue";
import Work from "../components/home/Work.vue";
import Contact from "../components/home/Contact.vue";

export default {
  name: "Home",

  components: {
    Hero,
    About,
    Work,
    Contact
  },

  async asyncData() {
    try {
      const { data } = await axios.get(
        "https://api.dribbble.com/v2/user/shots?page=1&per_page=15",
        {
          headers: { Authorization: `Bearer ${process.env.dribbbleToken}` }
        }
      );

      const excludedShots = [
        3752525, // Dribbble invites
        3882608, // This website
        3663209, // UI for Bridge.NET Unit Test Results
        3489448 // XLRStats Dashboard
      ];

      const filteredShots = data.filter(
        shot => !excludedShots.includes(shot.id)
      );
      const dribbbleShots = filteredShots.slice(0, 9);

      return { dribbbleShots };
    } catch (err) {
      return { dribbbleShots: [] };
    }
  }
};
</script>
