<template>
  <div class="page">
    <BaseHeader :forceFixed="true" />
    <main class="page--game" :class="bgClass">
      <div v-if="!quizStarted && !quizFinished" class="introduction">
        <h1>
          Quel joueur <br />
          es-tu ?
        </h1>
        <p>
          Penses-tu être solidaire comme Marco Tauleigne ou as-tu plutôt l’âme
          d’un bon citoyen comme Matthieu Jalibert ? Découvre à quel joueur et à
          quel pilier tu corresponds !
        </p>
        <BaseButton @click="startGame" :white="true">
          Commencer le quiz
        </BaseButton>
      </div>
      <div v-if="quizStarted && !quizFinished" class="game">
        <span class="game__progress">
          Question : {{ currentStep }}/{{ steps.length }}
        </span>
        <div class="progress-bar">
          <span class="progress" :style="`width: ${progress}%`"></span>
        </div>
        <div class="game__step">
          <div class="game__question">{{ step.question }}</div>
          <div
            v-for="(response, indexResponse) in step.responses"
            :key="indexResponse"
            class="game__response"
            :class="
              indexResponse === indexSelectedResponse
                ? 'game__response--selected'
                : null
            "
            @click="selectResponse(indexResponse)"
          >
            <div class="tick"></div>
            <div class="response">{{ response }}</div>
          </div>
          <BaseButton v-if="indexSelectedResponse !== null" @click="nextStep">
            Suivant
          </BaseButton>
        </div>
      </div>
      <div v-if="quizStarted && quizFinished" class="result">
        <div class="titles">
          <p class="title">SOLIDAIRE</p>
          <p class="subtitle">SOLIDAIRE</p>
        </div>
        <div class="names">
          <p class="firstname">MARCO</p>
          <p class="lastname">TAULEIGNE</p>
        </div>
        <p class="paragraph">
          Membre de l’UBB depuis 2013, Marco Tauleigne est le symbole de la
          solidarité dans notre équipe. Toujours présent pour ses co-équipiers
          et très à l’écoute, il aime aider et soutenir son entourage. Marco
          aime participer à nos campagnes dans les hôpitaux et les écoles,
          auprès des plus jeunes. Toi aussi, rejoins la
          <strong>#TeamSolidaire</strong> !
        </p>
        <router-link to="/" class="link link--white">Je m'engage</router-link>
        <div class="rs">
          <p class="rs-share">Partage ton pilier</p>
          <div class="svg">
            <svg
              id="Twitter"
              xmlns="http://www.w3.org/2000/svg"
              width="41.801"
              height="41.801"
              viewBox="0 0 41.801 41.801"
            >
              <circle
                id="Ellipse_6"
                data-name="Ellipse 6"
                cx="20.9"
                cy="20.9"
                r="20.9"
                fill="#fff"
              />
              <path
                id="Icon_awesome-twitter"
                data-name="Icon awesome-twitter"
                d="M19.954,4.5c.014.2.014.4.014.593A12.88,12.88,0,0,1,7,18.063a12.881,12.881,0,0,1-7-2.046,9.429,9.429,0,0,0,1.1.056A9.129,9.129,0,0,0,6.76,14.126,4.566,4.566,0,0,1,2.5,10.965a5.748,5.748,0,0,0,.861.071,4.821,4.821,0,0,0,1.2-.155A4.559,4.559,0,0,1,.9,6.407V6.35a4.591,4.591,0,0,0,2.06.579A4.565,4.565,0,0,1,1.552.833a12.956,12.956,0,0,0,9.4,4.77,5.146,5.146,0,0,1-.113-1.044,4.563,4.563,0,0,1,7.889-3.119A8.974,8.974,0,0,0,21.62.339a4.546,4.546,0,0,1-2,2.512,9.138,9.138,0,0,0,2.625-.706A9.8,9.8,0,0,1,19.954,4.5Z"
                transform="translate(8.79 13.346) rotate(-8)"
                fill="#5f1332"
              />
            </svg>
          </div>
          <div class="svg">
            <svg
              id="Face"
              xmlns="http://www.w3.org/2000/svg"
              width="41.515"
              height="41.515"
              viewBox="0 0 41.515 41.515"
            >
              <circle
                id="Ellipse_6"
                data-name="Ellipse 6"
                cx="20.757"
                cy="20.757"
                r="20.757"
                fill="#fff"
              />
              <path
                id="Icon_awesome-facebook-f"
                data-name="Icon awesome-facebook-f"
                d="M14.506,14.494l.716-4.663H10.747V6.8a2.332,2.332,0,0,1,2.629-2.519H15.41V.315A24.807,24.807,0,0,0,11.8,0C8.114,0,5.706,2.234,5.706,6.277V9.831h-4.1v4.663h4.1V25.768h5.041V14.494Z"
                transform="translate(12.247 7.873)"
                fill="#5f1332"
              />
            </svg>
          </div>
          <div class="svg">
            <svg
              id="Youtube"
              xmlns="http://www.w3.org/2000/svg"
              width="41.515"
              height="41.515"
              viewBox="0 0 41.515 41.515"
            >
              <circle
                id="Ellipse_6"
                data-name="Ellipse 6"
                cx="20.757"
                cy="20.757"
                r="20.757"
                fill="#fff"
              />
              <path
                id="Icon_awesome-youtube"
                data-name="Icon awesome-youtube"
                d="M24.966,7.187a3.069,3.069,0,0,0-2.16-2.174C20.9,4.5,13.263,4.5,13.263,4.5s-7.638,0-9.543.514A3.069,3.069,0,0,0,1.56,7.187,32.2,32.2,0,0,0,1.05,13.1a32.2,32.2,0,0,0,.51,5.917,3.023,3.023,0,0,0,2.16,2.139c1.9.514,9.543.514,9.543.514s7.638,0,9.543-.514a3.023,3.023,0,0,0,2.16-2.139,32.2,32.2,0,0,0,.51-5.917A32.2,32.2,0,0,0,24.966,7.187Zm-14.2,9.549V9.473L17.149,13.1l-6.384,3.632Z"
                transform="translate(7.575 8.026)"
                fill="#5f1332"
              />
            </svg>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import BaseHeader from "@/components/BaseHeader";
import BaseButton from "@/components/BaseButton";

export default {
  name: "GamePage",
  components: {
    BaseHeader,
    BaseButton,
  },
  data() {
    return {
      quizStarted: false,
      quizFinished: false,
      currentStep: 1,
      steps: [
        {
          question: "Après le match tu serais plutôt :",
          responses: [
            "A relever les blessés restés sur le terrain",
            "A se rendre directement taper la discute aux supporters",
            "A refaire le match avec un debrief",
            "A ramasser les déchets dans le vestiaire",
          ],
        },
        {
          question: "Après un bon match, quel est ton repas de rêve ?",
          responses: [
            "Une raclette",
            "Du poisson à la plancha",
            "Une salade composée",
            "Frite, saucisse et beaucoup de mayo",
          ],
        },
        {
          question:
            "La musique que tu mets dans le vestiaire après une victoire ?",
          responses: [
            "Tryo, c’est l’Hymne de nos campagnes",
            "La Marseillaise",
            "L'hymne de l'UBB (UBB allez allez allez)",
            "Les lacs du Connemara",
          ],
        },
        {
          question: "Si tu travaillais à l'UBB quel job t’irait le mieux ?",
          responses: [
            "A la buvette",
            "Jardinier",
            "Animateur socioculturel cœur de rugby",
            "Entraineur de jeunes",
          ],
        },
        {
          question: "Quel genre de personne es-tu en soirée ?",
          responses: [
            "A prendre tout le monde bras dessus bras dessous",
            "A débattre sur les solutions environnementales de cœur de rugby",
            "A partager ton expérience auprès des jeunes",
            "Être le premier qui redémarre la chenille",
          ],
        },
      ],
      indexSelectedResponse: null,
    };
  },
  computed: {
    step() {
      return this.steps.find((step, index) => index + 1 === this.currentStep);
    },
    progress() {
      return (this.currentStep / this.steps.length) * 100;
    },
    bgClass() {
      if (this.quizStarted && !this.quizFinished) {
        return "bg-white";
      }

      if (this.quizStarted && this.quizFinished) {
        return "bg-final";
      }
    },
  },
  methods: {
    startGame() {
      this.quizStarted = true;
    },
    nextStep() {
      this.indexSelectedResponse = null;
      if (this.currentStep + 1 > this.steps.length) {
        this.quizFinished = true;
        return;
      }
      this.currentStep += 1;
    },
    selectResponse(index) {
      this.indexSelectedResponse = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  background-color: #d9d9d9;
}

.page--game {
  margin-top: 120px;
  min-height: calc(100vh - 120px);
  background-image: url("../assets/images/bg-quiz-1.jpg");
}

.bg-white {
  background-image: url("../assets/images/bg-quiz-2.png");
}

.bg-final {
  background-image: url("../assets/images/fond_game.png");
  background-size: cover;
}

.introduction {
  padding: 90px 110px 0 110px;

  h1 {
    font-family: $font-secondary;
    text-transform: uppercase;
    font-size: 62px;
    transform: rotate(-8deg);
    color: white;
  }

  p {
    color: white;
    line-height: 25px;
    padding-top: 150px;
    padding-bottom: 30px;
    width: 40%;
  }
}

.progress-bar {
  width: 33%;
  background-color: transparent;
  height: 20px;
  border: solid 1px $color-primary;
  border-radius: 30px;
  overflow: hidden;

  .progress {
    background-color: $color-primary;
    height: 20px;
    display: block;
    transition: 0.2s;
    border: solid 1px $color-primary;
  }
}
.game {
  padding: 80px 150px 100px 150px;

  &__progress {
    font-size: 25px;
    font-family: $font-secondary;
    display: block;
  }

  &__question {
    font-size: 35px;
    font-weight: bold;
    padding: 48px 0;
  }

  &__response {
    background-color: white;
    border-radius: 12px;
    padding: 30px 45px;
    margin-bottom: 32px;
    border: solid 2px transparent;
    overflow: hidden;
    position: relative;
    transition: 0.2s;

    &--selected {
      border: solid 2px $color-primary;
      .tick {
        background-color: $color-primary;
        display: block;
        width: 32px;
        height: 78px;
        position: absolute;
        top: 0;
        left: 0;
        transition: 0.2s;
      }
    }

    &:hover {
      cursor: pointer;
      border: solid 2px $color-primary;
    }
  }
}
.result {
  padding: 100px 150px 0 150px;

  .titles {
    text-align: center;
  }

  .names {
    margin-top: -20px;
  }

  .title {
    font-family: $font-secondary;
    text-transform: uppercase;
    font-size: 100px;
    transform: rotate(-8deg);
    color: transparent;
    -webkit-text-stroke: 2px white;
    opacity: 0.3;
  }

  .subtitle {
    font-family: $font-secondary;
    text-transform: uppercase;
    font-size: 62px;
    transform: rotate(-8deg) translateY(-150%);
    color: white;
  }

  .firstname {
    font-family: $font-secondary;
    text-transform: uppercase;
    font-size: 72px;
    color: transparent;
    -webkit-text-stroke: 2px white;
  }

  .lastname {
    font-family: $font-secondary;
    text-transform: uppercase;
    font-size: 72px;
    transform: translate(-15px, -49%);
    color: white;
  }

  .paragraph {
    color: white;
    line-height: 2em;
    margin-top: -50px;
    padding-bottom: 30px;
    width: 40%;
    font-size: 0.8em;
  }

  .link {
    width: 280px;
  }

  .rs {
    display: inline-block;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .rs-share {
    color: white;
  }

  .svg {
    display: inline-block;
    margin: 10px;
  }
}
</style>
