<template>
  <p>{{ message }}</p>
  <p>{{ messageAlias }}</p>
  <p>{{ upperCaseMessage }}</p>
  <p>{{ messageToUpperCase() }}</p>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { keys } from "ts-transformer-keys"
class Test {
  prop1 = 'p1'
  prop2 = 'p2'

  someMethod() {
    console.log('nice')
  }
}

export default class App extends Vue {
  message = 'hello World'

  get messageAlias() {
    return this.message
  }

  get upperCaseMessage() {
    // return this.message.toUpperCase() // this will work
    return this.messageToUpperCase() // this won't
  }

  messageToUpperCase() {
    return this.message.toUpperCase()
  }

  created() {
    const testKeys = keys<Test>()
    console.log(testKeys)
  }
}
</script>
