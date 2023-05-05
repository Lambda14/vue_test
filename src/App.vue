<template>
  <div>
    <v-text-field
              v-model="task_input"
              label="Че поделать"
              outlinedtoDoList
            ></v-text-field>
    <v-btn elevation="1" @click="tasks_list.push({idx: (tasks_list.length == 0) ? 0 : tasks_list.at(-1)['idx'] + 1, name: task_input, is_done: false})">Добавить задание</v-btn>
    <v-divider></v-divider>
    <div v-for="(task, index) in tasks_list" v-bind:key= task.idx> {{ task.name }} {{task.idx}}
      <input type="checkbox" name="isDone" v-if="task.is_done == true" checked>
      <input type="checkbox" name="isDone" v-else>
      <v-btn elevation="1" @click="tasks_list.splice(index, 1)">Удалить</v-btn>


    
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tasks_list: [
          {
            idx: 0,
            name: 'Погладить кота',
            is_done: true,
          },
          {
            idx: 1,
            name: 'Покормить кота',
            is_done: false,
          },
        ],
        methods: {
        },
        components: {
        }
      }

    
    },
  }
</script>