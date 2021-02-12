<template>
  <b-card class="dispatch-scheduler">
    <div class="mb-5">
      <h6>Pick a dispatch date:</h6>
      <div class="d-flex justify-content-center">
        <datepicker 
          v-model="selectedDate"
          :mondayFirst="true"
          :disabledDates="disabledDates"
          inputClass="text-center h5 datepicker-input">
        </datepicker>
        <b-icon-calendar2 class="h4 ml-2"></b-icon-calendar2>
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
import { isNotValidDispatchDate, getFirstAvailableDispatchDate } from '../utils/dates'

export default {
  name: 'DispatchScheduler',
  data: function() { 
    return { 
      selectedDate: getFirstAvailableDispatchDate(),
      disabledDates: {
        customPredictor: isNotValidDispatchDate
      }
    }
  },
  components: {
    Datepicker
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

<style>
  .datepicker-input, .datepicker-input:active, .datepicker-input:focus {
    border: none;
    border-bottom: 1px dashed;
    outline: none;
    color: #2c3e50;
  }
</style>