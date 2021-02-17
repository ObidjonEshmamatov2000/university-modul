<template>
    <div>
        <h2 class="my-12 text-h4 text-center">Timetable of Lessons</h2>
        <FullCalendar :options="calendarOptions" />

        <div class="text-center">
          <v-dialog
            v-model="dialog"
            width="500"
          >
            <v-card>
              <v-card-title class="headline grey lighten-2">
                Timetabe
              </v-card-title>

              <v-card-text>
                <h2 class="my-3 headline">Teacher: Alisher Usmanov</h2>
                <h2 class="my-3 headline">Group: 714-19</h2>
                <p class="my-3 subtitle-1">Subject: Math</p>
                <p class="subtitle-2">Duration: 80 min</p>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  text
                  @click="dialog = false"
                >
                  Exit
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
    </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin ],
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick,
        events: [
          { title: 'event 1', date: '2019-04-01' },
          { title: 'event 2', date: '2019-04-02' }
        ]
      },
      dialog: false
    }
  },
  methods: {
    handleDateClick: function() {
      // alert('date click! ' + arg.dateStr);
      this.dialog = true;
    }
  }
}
</script>