<template>
    <div class="inputBox shadow">
        <input type="text" ref="newTodoItem" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <span class="addContainer" v-on:click="addTodo">
            <i class="fas fa-plus addBtn"></i>
        </span>
        <!-- <button @click="addTodo">add</button> -->
        <MyModal v-if="showModal">
          <!--
            you can use custom content here to overwrite
            default content
          -->
          <h3 slot="header">
            경고!
            <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
          </h3>
          <div slot="body">
            아무것도 입력하지 않으셨습니다.
          </div>
        </MyModal>
    </div>
</template>

<script>
import MyModal from './common/MyModal.vue';

export default {
    components: {
      MyModal
    },
    data() {
        return {
            newTodoItem: "",
            showModal: false
        }
    },
    /* Life Cycle Method */
    mounted() {
      this.$refs.newTodoItem.focus();
    },
    methods:{
        addTodo() {
            if (this.newTodoItem !== '') {
                //this.$emit('addEvent', this.newTodoItem);
                const todo = {completed: false, item: this.newTodoItem};
                this.$store.dispatch('addTodo', todo);
                this.clearInput();
            }else {
              this.showModal = !this.showModal;
            }
        },
        clearInput() {
            //addTodo() 함수에 있었지만 clearInput()함수로 이동            
            this.newTodoItem = '';
        }
    }
}
</script>

<style scoped>
i {
    cursor: pointer;
}
input:focus {
    outline: none !important;
    box-shadow: 0 0 0.4px #d6a8e9;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 15px;
}
.inputBox input {
    border-style: none;
    font-size: 0.9rem;
    width: 75%;
    height: 50%;
}

.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
}
</style>
