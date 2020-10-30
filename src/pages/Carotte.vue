<template>
  <div>
    <BaseHeader />
    <main>
      <div class="bg-red"></div>
      <div class="introduction">
        <h1>Rejoins la team</h1>
        <p>
          Depuis 2014, les supporters de l’UBB représentent le premier public
          Europpéen. Si toi aussi tu veux faire partir de cette grande famille
          soudée, n’attend plus pour rejoindre l’équipe Coeur de Rugby !
        </p>
        <router-link to="/" class="link">Devenir donateur</router-link>
      </div>
      <div class="input">
        <input type="text" placeholder="Rechercher..." />
      </div>
      <div class="album">
        <div
          v-for="(avatar, index) in avatars"
          :key="index + avatar"
          class="albumimg"
        >
          <img :src="avatar" />
        </div>
      </div>
      <div
        class="arrow"
        @click="
          () => {
            this.avatars = [...this.avatars, ...this.avatars.slice(0, 12)];
          }
        "
      >
        <img :src="arrow" />
      </div>
    </main>
    <BaseFooter />
  </div>
</template>

<script>
import BaseHeader from "@/components/BaseHeader";
import BaseFooter from "@/components/BaseFooter";
import Image1 from "@/assets/images/avatars/UBB CARD 5-02.png";
import Image2 from "@/assets/images/avatars/UBB CARD 5-03.png";
import Image3 from "@/assets/images/avatars/UBB CARD 5-04.png";
import Image4 from "@/assets/images/avatars/UBB CARD 5-05.png";
import Image5 from "@/assets/images/avatars/UBB CARD 5-06.png";
import Image6 from "@/assets/images/avatars/UBB CARD 5-07.png";
import Image7 from "@/assets/images/avatars/UBB CARD 5-08.png";
import Image8 from "@/assets/images/avatars/UBB CARD 5-09.png";
import Image9 from "@/assets/images/avatars/UBB CARD 5-10.png";
import Image10 from "@/assets/images/avatars/UBB CARD 5-11.png";
import Image11 from "@/assets/images/avatars/UBB CARD 5-12.png";
import Image12 from "@/assets/images/avatars/UBB CARD 5-12.png";
import Arrow from "@/assets/images/arrow-down.svg";

export default {
  name: "CarottePage",
  components: {
    BaseHeader,
    BaseFooter,
  },
  data() {
    return {
      avatars: [
        Image2,
        Image8,
        Image4,
        Image10,
        Image6,
        Image1,
        Image9,
        Image3,
        Image11,
        Image5,
        Image12,
        Image7,
      ],
      arrow: Arrow,
    };
  },
};
</script>

<style lang="scss" scoped>
main {
  background: white;
}

.bg-red {
  background-color: $color-primary;
  height: 500px;
}

.introduction {
  padding: 8%;
  margin: 0 150px;
  background: url("../assets/images/image 15.png");
  background-size: cover;
  transform: translateY(-50%);

  h1 {
    font-size: 44px;
    font-family: $font-secondary;
    font-weight: normal;
    text-transform: uppercase;
    color: $color-primary;
  }

  p {
    color: $color-primary;
    width: 50%;
    line-height: 35px;
    font-size: 0.8em;
    margin-top: 2%;
  }

  a {
    max-width: 350px;
    margin-top: 2%;
  }
}

.input {
  display: flex;
  justify-content: end;
  margin-top: -100px;
  margin-bottom: 50px;

  input {
    background-color: #f4f4f4;
    border-radius: 12px;
    border: solid 1px transparent;
    padding: 13px 20px;
    color: black;
    width: 20%;
    margin-right: calc(10% + 10px);

    &::placeholder {
      font-style: italic;
      color: $color-primary;
    }
  }
}

.album {
  padding: 0 10% 30px 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.albumimg {
  width: 16%;
  padding: 10px;

  img {
    width: 100%;
  }
}

.arrow {
  text-align: center;
  padding-bottom: 50px;
  cursor: pointer;
}
</style>
