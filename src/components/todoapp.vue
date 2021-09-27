<template>
  <div class="container" style="max-width: 600px">
    <!-- Heading -->
    <h2 class="text-center mt-5">Todo App</h2>

    <!-- Input -->
    <div class="d-flex mt-5">
      <input
        type="text"
        v-model= "task"
        placeholder="Enter task"
        class="w-100 form-control"
      />
     <!-- <form class="" method="post" @submit.prevent="postNow">
      <input type="text" name="" value="" v-model="name">
      <button type="submit" name="button">Submit</button>
      </form>-->
     <button class="btn btn-warning rounded-0" @click="submitTask">SUBMIT</button>
    </div>

    <!-- Task table -->
    <table class="table table-bordered mt-5">
      <thead>
        <tr>
          <th scope="col">Task</th>
          <th scope="col" style="width: 120px">Status</th>
          <th scope="col" class="text-center">#</th>
          <th scope="col" class="text-center">#</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <td>
            <span :class="{ 'line-through': task.status === 'finished' }">
              {{ task.name }}
            </span>
          </td>
          <td>
            <span
              class="pointer noselect"
              @click="changeStatus(index)"
              :class="{
                'text-danger': task.status === 'to-do',
                'text-success': task.status === 'finished',
                'text-warning': task.status === 'in-progress',
              }"
            >
              {{ capitalizeFirstChar(task.status) }}
            </span>
          </td>
          <td class="text-center">
            <div @click="deleteTask(index)">
              <span class="fa fa-trash pointer"></span>
            </div>
          </td>
          <td class="text-center">
            <div @click="editTask(index)">
              <p class="fa fa-pen pointer"></p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
//const baseURL = " http://127.0.0.1:5000/list"
//axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

export default {
  name: "todo",
  props: {
    eindex: Object,
  },
  data() {
    return {
      task: "",
      editedTask: null,
      statuses: ["to-do", "in-progress", "finished"],
      /* Status could be: 'to-do' / 'in-progress' / 'finished' */
      tasks: [
      ],
    };
  },
  created(){
    axios
        .get(' http://localhost:8080/list')
        .then (response=>{
          console.log(response.data)
        })
        .catch(error=>{
          console.log('There was an error'+error.response)
        })
  },
  mounted:function(){
  },
  testMethod () {
      axios.post(' http://localhost:8080/list')
      .then(function (response) {
        alert (response.data)
        this.addtodo=''
        this.id++


      })
      .catch(function (error) {
        alert(error);
      });
    },

  methods : {
    //async addTodo() {
      //const res = await axios.post(baseURL, { name: this.addtodo })//this.!!
      //this.tasks = [...this.tasks, res.data]
      //this.tasks = ''//this.!
    //},
    /**
     * Capitalize first character
     */
    capitalizeFirstChar(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    /**
     * Ch   
     *    ange status of task by index
     */
    changeStatus(index) {
      let newIndex = this.statuses.indexOf(this.tasks[index].status);
      if (++newIndex > 2) newIndex = 0;
      this.tasks[index].status = this.statuses[newIndex];
    },
    /**
     * Deletes task by index
     */
    //deleteTask(index) {
      //axios
           //.delete('http://127.0.0.1:5000/')
           //.then(response => {
                //this.tasks.splice(index, 1)
                //console.log(this.tasks)
           //});
    //},
    /**
     * Edit task
     */
    editTask(index) {
      this.task = this.tasks[index].name;
      this.editedTask = index;
    },
    /**
     * Add / Update task
     */
    submitTask() {
      if (this.task.length === 0) return;
    
      /* We need to update the task */
      if (this.editedTask != null) {
        this.tasks[this.editedTask].name = this.task;
        this.editedTask = null;
        Vue.axios.put(' http://localhost:8080/list')

      } else {
        /* We need to add new task */
        var edata ={
          'title': this.tasks,
          'status': false,
          'editing': false
        }
        axios.post(' http://localhost:8080/list',edata)
        .then(function (response) {
              alert (response.data)
              this.tasks.push({
               name: this.task,
               status: "todo",
             });
              this.tasks='',
              this.id++
        })
      }
    },
  },
      //};
       // this.tasks.push({
          //name: this.task,
          //status: "todo",
        //}):
       //}hnaa
      //Vue.axios.post('http//127.0.0.1:5000/', newEntry)
        //.then(response => this.idForTodo = response.data.id)
        //.then(this.todos.push(newEntry))
      //this.task = "";
      //this.idForTask++
    //}
  //},
 };

</script>

<style scoped>
.pointer {
  cursor: pointer;
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
.line-through {
  text-decoration: line-through;
}
</style>