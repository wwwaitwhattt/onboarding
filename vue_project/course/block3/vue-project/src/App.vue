<template>
  <div>
    <h1>Parent: {{ carName }}</h1>

    <app-counter :counter="counter"></app-counter>

    <app-car
        :carName="carName"
        :car-year="carYear"
        :counter="counter"
        :changeFunc="changeNameToAudi"
        @nameChanged="carName = $event"
        @counterUpdated="counter = $event"
    ></app-car>

    <button @click="show = !show">Show async</button>
    <div v-if="show">
      <async-component/> <!-- загрузится только после клика по кнопке-->
    </div>

    <component :is="currentComponent"></component>

  </div>
</template>

<script>
import Counter from "./components/Counter";
import Car from "./components/Car";
import LoadingComponent from "./components/LoadingComponent";
import ErrorComponent from "./components/ErrorComponent";
import DynamicComponent from "./components/DynamicComponent";

const asyncComponent = () => ({
  component: import("./components/AsyncComponent"),
  loading: LoadingComponent,
  error: ErrorComponent,
  timeout: 3000,
})

export default {
  data() {
    return {
      carName: 'Ford',
      carYear: 2017,
      counter: 0,
      show: false,
      currentComponent: 'dynamic-component',
    }

  },
  methods: {
    changeNameToAudi() {
      this.carName = 'Audi'
    }
  },
  components: {
    appCar: Car,
    appCounter: Counter,
    // asyncComponent:() => import("./components/AsyncComponent") // динамический импорт
    asyncComponent,
    DynamicComponent: DynamicComponent,
  }
}
</script>

<style>

</style>
