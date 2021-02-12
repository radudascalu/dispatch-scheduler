<template>
  <b-card class="dispatch-scheduler">
    <div class="mb-5">
      <h6>Pick a dispatch date:</h6>
      <div class="d-flex justify-content-center">
        <datepicker 
          v-model="selectedDate"
          :mondayFirst="true"
          :disabledDates="disabledDates">
        </datepicker>
      </div>
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
      disabledDates: {
        customPredictor (date) {
          const weekendDays = [0, 6]
          const holidays = [{
            day: 25,
            month: 12
          }, {
            day: 1,
            month: 1
          }]
          const utcCutoffTime = 12;
          const now = new Date();
          const today = new Date();
          today.setHours(0,0,0,0);

          return weekendDays.includes(date.getDay())
             || holidays.find(h => h.day == date.getDate() && h.month == date.getMonth() + 1)
             || (date < today)
             || (date.toDateString() == today.toDateString() && utcCutoffTime <= now.getUTCHours())
        }
      }
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
