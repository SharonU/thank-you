<template>
  <div>
    <v-btn medium @click="dialog =true" color="primary">New Offer</v-btn>

    <div class="offers-wrapper">
      <h3 class="no-data">No previous offers found</h3>
    </div>

    <v-dialog width="500" class="new-offer-dialog" v-model="dialog">
      <v-form>
        <v-card>
          <v-card-title primary-title class="headline grey lighten-2">New Offer</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field label="Title" v-model="title"></v-text-field>
              <v-textarea outlined label="Content" v-model="content"></v-textarea>
              <v-btn @click="submit" color="success">Create</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-form>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      title: "",
      content: ""
    };
  },
  methods: {
    submit() {}
  }
};
</script>

<style scoped>
.offers-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.no-data {
  color: #aeaeae;
  font-size: 1.2rem;
}
</style>