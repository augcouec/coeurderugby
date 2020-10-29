<template>
  <div class="page">
    <BaseHeader :forceFixed="true" />
    <main class="page--game">
      <div v-if="!quizStarted && !quizFinished" class="introduction">
        <h1>Quel joueur es-tu ?</h1>
        <BaseButton @click="startGame">Commencer le quiz</BaseButton>
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
          <BaseButton @click="nextStep">Suivant</BaseButton>
        </div>
      </div>
      <div v-if="quizStarted && quizFinished" class="result">Tu es ....</div>
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
        { question: "Quelle est blabla 1 ?", responses: ["A", "B", "C", "D"] },
        { question: "Quelle est blabla 2 ?", responses: ["A", "B", "C", "D"] },
        { question: "Quelle est blabla 3 ?", responses: ["A", "B", "C", "D"] },
        { question: "Quelle est blabla 4 ?", responses: ["A", "B", "C", "D"] },
        { question: "Quelle est blabla 5 ?", responses: ["A", "B", "C", "D"] },
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
}

.introduction {
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
  padding: 130px 150px 0 150px;

  &__progress {
    font-size: 25px;
    font-family: $font-secondary;
    display: block;
  }

  &__step {
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
}
</style>
