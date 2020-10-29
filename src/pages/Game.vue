<template>
  <main class="page">
    <div v-if="!quizStarted && !quizFinished" class="introduction">
      <h1>Quel joueur es-tu ?</h1>
      <BaseButton @click="startGame">Commencer le quiz</BaseButton>
    </div>
    <div v-if="quizStarted && !quizFinished" class="game">
      <div class="game__step">
        <div>{{ step.question }}</div>
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
          <div>{{ response }}</div>
        </div>
        <BaseButton @click="nextStep">Suivant</BaseButton>
      </div>
    </div>
    <div v-if="quizStarted && quizFinished" class="result">Tu es ....</div>
  </main>
</template>

<script>
import BaseButton from "@/components/BaseButton";

export default {
  name: "GamePage",
  components: {
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
  min-height: 200vh;
}
.introduction {
}
.game {
  &__step {
  }

  &__response {
    &--selected {
      border: solid 1px black;
    }
  }
}
.result {
}
</style>
