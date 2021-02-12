<template>
  <b-card class="dispatch-scheduler">
    <div class="mb-5">
      <h6>Pick a dispatch date:</h6>
      <datepicker 
        v-model="selectedDate"
        :mondayFirst="true">
      </datepicker>
    </div>

    <div>
      <h6>The expected delivery date is:</h6>
      <h5>{{expectedDeliveryDate.toLocaleDateString()}}</h5>
    </div>
  </b-card>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

export default {
  name: 'DispatchScheduler',
  data: function() { 
    return { 
      selectedDate: new Date(),
    }
  },
  components: {
    Datepicker
  },
  methods: {
    getFirstValidDate() {
      return new Date();
    }
  },
  computed: {
    expectedDeliveryDate() {
      // TODO: take into account non-working days
      const expectedDeliveryDate = new Date();
      let numberOfDayToAdd = 2;
      expectedDeliveryDate.setDate(this.selectedDate.getDate() + numberOfDayToAdd);

      return expectedDeliveryDate;
    }
  }
}
</script>

<style scoped>
  .dispatch-scheduler {
    max-width: 30vw;
  }
</style>
