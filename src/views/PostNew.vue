<template>
  <div class="row mt-4">
    <h2>New Post</h2>
    <div class="submit-form">
      <form @submit.prevent="onSubmit">
        <div class="form-outline mb-4">
          <textarea cols="30" rows="10" v-model="inputTxt" class="form-control" :disabled="disabled"></textarea><br />
          <input type="submit" class="btn btn-success" :value="btnTxt" :disabled="disabled" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSaving: false,
      inputTxt: "",
    };
  },
  computed: {
    btnTxt() {
      return this.isSaving ? "Saving..." : "Save";
    },
    disabled() {
      return this.isSaving;
    },
  },
  methods: {
    onSubmit() {
      this.isSaving = true;
      const post = { text: this.inputTxt };
      this.$store.dispatch("addPost", post).then(() => {
        this.isSaving = false;
        this.inputTxt = "";
        this.$router.push("/posts");
      });
    },
  },
};
</script>